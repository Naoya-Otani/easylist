import React, { useState, FormEvent, useEffect, FC } from "react";
import { useSession, signIn } from "next-auth/react";
import ReportLength from "../PostReviews/ReportLength";
import HasExam from "../PostReviews/HasExam";
import Attendance from "../PostReviews/Attendance";
import HasReport from "../PostReviews/HasReport";
import AllowedCheatSheet from "../PostReviews/AllowedCheatSheet";
import StarRate from "../PostReviews/StarRate";
import Detail from "../PostReviews/Detail";
import SubmitBtn from "../PostReviews/SubmitBtn";
import DoneModal from "../common/DoneModal";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = session?.userId;
    const formData = {
      attendance,
      hasReport,
      reportLength,
      hasExam,
      allowedCheatsheet,
      reputation,
      detail,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    if (!session) {
      signIn("google", { callbackUrl: window.location.href });
      return;
    }
    try {
      const response = await fetch("/api/reviews/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, userId, courseId }),
      });

      if (response.ok) {
        console.log("レビューが作成されました");
        setIsOpen(true);
        resetForm();
        localStorage.removeItem("formData");
      } else {
        console.error("レビューの作成中にエラーが発生しました");
      }
    } catch (error) {
      console.error("レビューの作成中にエラーが発生しました:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <SubmitBtn />
      </form>
      <DoneModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="投稿されました！"
        body="皆様のレビューのおかげで、楽単リストはより良いものになっています😄"
      />
    </div>
  );
};

export default PostReviews;
