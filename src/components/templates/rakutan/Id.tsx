"use client";

import type { RakutanWithReviews } from "@/src/@types/rakutan";
import CircleGragh from "@/src/components/parts/Reviews/CircleGragh";
import ReviewList from "@/src/components/parts/Reviews/ReviewList";
import HeadingXs from "@/src/components/parts/common/HeadingXs";
import NavAnchor from "@/src/components/parts/common/NavAnchor";
import HasAttendance from "@/src/components/parts/common/rakutanCard/HasAttendance";
import HasExam from "@/src/components/parts/common/rakutanCard/HasExam";
import HasReport from "@/src/components/parts/common/rakutanCard/HasReport";
import AvgStar from "@/src/components/parts/rakutan/AvgStar";
import PostReviews from "@/src/components/parts/rakutan/PostReviews";
import FacultyRow from "@/src/components/parts/rakutan/info/FacultyRow";
import LessonModeRow from "@/src/components/parts/rakutan/info/LessonModeRow";
import ScheduleRow from "@/src/components/parts/rakutan/info/ScheduleRow";
import Link from "next/link";
import { type FC, useState } from "react";
import useSWR from "swr";
import ShareBtn from "../../atoms/Button/ShareBtn";
import NoData from "../../parts/Reviews/NoData";
import NoReviews from "../../parts/Reviews/NoReviews";
import ReportLengthAvg from "../../parts/Reviews/ReportLengthAvg";
import Loading from "../../parts/common/Loading";
import ShareModal from "../../parts/rakutan/ShareModal";

const Id: FC<{ id: string }> = ({ id }) => {
	const [isOpen, setIsOpen] = useState(false);
	const fetchOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	const fetcher = (url: string) =>
		fetch(url, fetchOptions).then((res) => res.json());

	const {
		data,
		error,
		isLoading,
	}: {
		data: RakutanWithReviews;
		error?: unknown;
		isLoading: boolean;
	} = useSWR(`/api/rakutan/getById?id=${id}`, fetcher);

	if (isLoading)
		return (
			<div className="outlineStyle font-notoSans w-screen h-[80vh] justify-center items-center">
				<Loading />
			</div>
		);

	if (error)
		return (
			<div className="outlineStyle font-notoSans w-screen h-[80vh] justify-center items-center">
				エラーが発生しました <br /> <Link href={"/"}>トップに戻る</Link>
			</div>
		);

	return (
		<div className="outlineStyle font-notoSans">
			<div className="px-4 lg:px-16 lg:flex justify-between my-12 md:my-20 lg:gap-2">
				<div className="lg:w-[49%]">
					<p className="text-xl lg:text-4xl font-medium mb-1">
						{data.course.subjectName}
					</p>
					<p className="text-lg lg:text-2xl text-gray-500 mb-1">
						{data.course.locationName}
					</p>
					<AvgStar avg_reputation={data.course.avg_reputation} />
					<p className="text-sm font-medium text-gray-500 mb-1">
						{data.reviews.length === 0 ? "0" : data.reviews.length}
						件の評価
					</p>
					<div className="mb-8">
						<NavAnchor
							href={`https://gslbs.keio.jp/syllabus/detail?ttblyr=2023&entno=${data.course.entryNumber}&lang=jp`}
							text="シラバスを見る"
						/>
					</div>

					<div className="border border-t-1 border-b-0 border-x-0">
						<LessonModeRow lessonModeName={data.course.lessonModeName} />
						<FacultyRow faculties={data.course.faculties} />
						<ScheduleRow dayOfWeekPeriod={data.course.dayOfWeekPeriod} />
					</div>
					<div className="border border-t-1 border-b-0 border-x-0">
						<HasReport
							agg_hasReport={data.course.agg_hasReport}
							count_reviews={data.course.count_reviews}
						/>
						<HasAttendance
							agg_attendance={data.course.agg_attendance}
							count_reviews={data.course.count_reviews}
						/>
						<HasExam
							agg_hasExam={data.course.agg_hasExam}
							count_reviews={data.course.count_reviews}
						/>
					</div>
				</div>

				<div className="lg:w-[460px] mt-10 lg:mt-0">
					<HeadingXs heading="口コミを投稿してみよう" />

					<div className="mt-6">
						<PostReviews courseId={data.course.id} />
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-16 mb-12 md:mb-20">
				<HeadingXs heading="授業情報" />
				{data.reviews.length === 0 ? (
					<NoData />
				) : (
					<>
						<CircleGragh reviews={data.reviews} />
						<ReportLengthAvg reviews={data.reviews} />
					</>
				)}
			</div>
			<div className="px-4 lg:px-16 mb-12 md:mb-20 justify-between">
				<HeadingXs heading="口コミ一覧" />
				{data.reviews.length === 0 ? (
					<NoReviews />
				) : (
					<ReviewList reviews={data.reviews} />
				)}
			</div>
			<div className="px-8 lg:px-16 flex justify-end">
				<ShareBtn setIsOpen={setIsOpen} />
			</div>
			<ShareModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				id={id}
				professor={data.course.locationName}
				subject={data.course.subjectName}
			/>
		</div>
	);
};

export default Id;
