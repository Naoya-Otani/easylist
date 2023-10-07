import React, { FC } from "react";
import Link from "next/link";
import { Rakutan } from "@/src/@types/rakutan";
import HasReport from "@/src/components/parts/common/rakutanCard/HasReport";
import HasAttendance from "@/src/components/parts/common/rakutanCard/HasAttendance";
import HasExam from "@/src/components/parts/common/rakutanCard/HasExam";
import AvgStar from "@/src/components/parts/rakutan/AvgStar";

type Props = {
  rakutan: Rakutan;
};

const RenderRakutan: FC<Props> = ({ rakutan }) => {
  return (
    <Link
      href={`/rakutan/${rakutan.id}`}
      className="lg:basis-[49%] flex flex-col bg-gray-50 p-8 rounded-lg mb-8 shadow-lg hover:bg-gray-200 duration-300 transform rotate-x-12 rotate-z-10 transition duration-400 ease-in-out hover:translate-y-1 hover:rotate-x-12 hover:rotate-z-10"
    >
      <p className="text-xl lg:text-2xl font-medium mb-1">
        {rakutan.subjectName}
      </p>
      <p className="text-lg lg:text-xl text-gray-500 mb-1">
        {rakutan.locationName}
      </p>

      <AvgStar avg_reputation={rakutan.avg_reputation} />

      <p className="text-sm font-medium text-gray-500 mb-8">
        {rakutan.count_reviews}
        件の評価
      </p>

      <div className="border border-t-1 border-b-0 border-x-0">
        <div className="text-gray-500 mb-2 mt-4">
          {rakutan.lessonModeName === "対面授業（主として対面授業）" ? (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              <p className="pb-[2px]">対面授業</p>
            </div>
          ) : (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p className="pb-[2px]">オンデマンド授業</p>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center mb-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
            />
          </svg>
          {rakutan.faculties?.map((faculty, index) => {
            return (
              <p className="mr-2 text-center pb-[2px]" key={index}>
                {faculty}
              </p>
            );
          })}
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="pb-[2px]">{rakutan.dayOfWeekPeriod}</p>
        </div>
      </div>
      <div className="border border-t-1 border-b-0 border-x-0">
        <HasReport
          agg_hasReport={rakutan.agg_hasReport}
          count_reviews={rakutan.count_reviews}
        />
        <HasAttendance
          agg_attendance={rakutan.agg_attendance}
          count_reviews={rakutan.count_reviews}
        />
        <HasExam
          agg_hasExam={rakutan.agg_hasExam}
          count_reviews={rakutan.count_reviews}
        />
      </div>
    </Link>
  );
};

export default RenderRakutan;
