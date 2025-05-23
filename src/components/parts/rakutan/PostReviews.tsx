import notifyMutationError from "@/lib/notifyMutationError";
import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect, type FC } from "react";
import useSWRMutation from "swr/mutation";
import AllowedCheatSheet from "../PostReviews/AllowedCheatSheet";
import Attendance from "../PostReviews/Attendance";
import Detail from "../PostReviews/Detail";
import HasExam from "../PostReviews/HasExam";
import HasReport from "../PostReviews/HasReport";
import Notes from "../PostReviews/Notes";
import ReportLength from "../PostReviews/ReportLength";
import StarRate from "../PostReviews/StarRate";
import SubmitBtn from "../PostReviews/SubmitBtn";
import DoneModal from "../common/DoneModal";
import Loading from "../common/Loading";

const PostReviews: FC<{
	courseId: number;
}> = ({ courseId }) => {
	const { data: session } = useSession();
	const [attendance, setAttendance] = useState(true);
	const [hasReport, setHasReport] = useState(false);
	const [reportLength, setReportLength] = useState(0);
	const [hasExam, setHasExam] = useState(false);
	const [allowedCheatsheet, setAllowedCheatsheet] = useState(false);
	const [reputation, setReputation] = useState(3);
	const [detail, setDetail] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const storedData = localStorage.getItem("formData");
		if (storedData) {
			const formData = JSON.parse(storedData);
			setAttendance(formData.attendance);
			setHasReport(formData.hasReport);
			setReportLength(formData.reportLength);
			setHasExam(formData.hasExam);
			setAllowedCheatsheet(formData.allowedCheatsheet);
			setReputation(formData.reputation);
			setDetail(formData.detail);
		}
	}, []);

	const resetForm = () => {
		setAttendance(true);
		setHasReport(false);
		setReportLength(0);
		setHasExam(false);
		setAllowedCheatsheet(false);
		setReputation(3);
		setDetail("");
	};

	const formData = {
		attendance,
		hasReport,
		reportLength,
		hasExam,
		allowedCheatsheet,
		reputation,
		detail,
	};

	const postReview = async () => {
		const userId = session?.userId;
		try {
			const response = await fetch("/api/review/post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ formData, userId, courseId }),
			});
			if (!response.ok) {
				notifyMutationError(response);
				throw new Error("レビューの作成にエラーが発生しました");
			}
		} catch (_) {
			throw new Error("レビューの作成中にエラーが発生しました");
		}
	};

	const preCheck = () => {
		if (!session) {
			localStorage.setItem("formData", JSON.stringify(formData));
			signIn("google", { callbackUrl: window.location.href });
			return;
		}
	};

	const { trigger, isMutating } = useSWRMutation(
		"/api/rakutan/postRakutanById",
		postReview,
		{
			onSuccess: () => {
				resetForm();
				localStorage.removeItem("formData");
				setIsOpen(true);
			},
			onError: (error) => {
				notifyMutationError(error);
			},
		},
	);

	if (isMutating) {
		return <Loading />;
	}

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					preCheck();
					trigger();
				}}
			>
				<Attendance attendance={attendance} setAttendance={setAttendance} />
				<HasReport
					hasReport={hasReport}
					setHasReport={setHasReport}
					setReportLength={setReportLength}
				/>
				{hasReport && (
					<ReportLength
						hasReport={hasReport}
						reportLength={reportLength}
						setReportLength={setReportLength}
					/>
				)}
				<HasExam
					hasExam={hasExam}
					setHasExam={setHasExam}
					setAllowedCheatsheet={setAllowedCheatsheet}
				/>
				{hasExam && (
					<AllowedCheatSheet
						allowedCheatsheet={allowedCheatsheet}
						hasExam={hasExam}
						setAllowedCheatsheet={setAllowedCheatsheet}
					/>
				)}
				<StarRate setReputation={setReputation} />
				<Detail detail={detail} setDetail={setDetail} />
				<div className="flex justify-between items-start">
					<Notes />
					<SubmitBtn isMutating={isMutating} />
				</div>
			</form>
			<DoneModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title="投稿されました！"
				body="皆様のレビューのおかげで、楽単リストはより良いものになっています😄"
				status="posted"
			/>
		</div>
	);
};

export default PostReviews;
