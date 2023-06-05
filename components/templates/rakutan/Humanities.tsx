import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { CourseSummary, Review } from "@prisma/client";
import Heading from "@/components/parts/common/Heading";
import HasReport from "@/components/parts/common/rakutanCard/HasReport";
import HasAttendance from "@/components/parts/common/rakutanCard/HasAttendance";
import HasExam from "@/components/parts/common/rakutanCard/HasExam";
import AvgStar from "@/components/parts/rakutan/AvgStar";
import Sorts from "@/components/parts/rakutan/Sorts";
import Filter from "@/components/parts/rakutan/Filter";
import AboutCourseList from "@/components/parts/rakutan/AboutCourseList";

type Props = {
  data: Array<CourseSummary & { reviews: Review[] }>;
};
const sortOptions = [
  { name: "通常" },
  { name: "評価の高い順" },
  { name: "レビューの多い順" },
];

const filterOptions = [
  { name: "フィルター無し" },
  { name: "対面授業" },
  { name: "オンデマンド授業" },
  { name: "出席がない授業" },
  { name: "試験がない授業" },
];

const Humanities: FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState(sortOptions[0]);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [sortedData, setSortedData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);

  const sortData = (option: { name: string }) => {
    if (option.name === "通常") {
      setSortedData([...filteredData]);
    } else if (option.name === "評価の高い順") {
      const sorted = [...filteredData];
      sorted.sort((a, b) => {
        const aReputationSum = a.reviews.map((item) => {
          return item.reputation;
        });
        const bReputationSum = b.reviews.map((item) => {
          return item.reputation;
        });
        const aAvg =
          aReputationSum.length !== 0
            ? aReputationSum.reduce((a, b) => {
                return a + b;
              }, 0) / aReputationSum.length
            : 0;
        const bAvg =
          bReputationSum.length !== 0
            ? bReputationSum.reduce((a, b) => {
                return a + b;
              }, 0) / bReputationSum.length
            : 0;
        return bAvg - aAvg;
      });
      setSortedData(sorted);
    } else if (option.name === "レビューの多い順") {
      const sorted = [...filteredData];
      sorted.sort((a, b) => {
        return b.reviews.length - a.reviews.length;
      });
      setSortedData(sorted);
    }
  };
  const filterData = (option: { name: string }) => {
    setSelectedFilter(option);
    if (option.name === "フィルター無し") {
      setFilteredData([...data]);
    } else if (option.name === "対面授業") {
      const filtered = data.filter(
        (item) => item.lessonModeName === "対面授業（主として対面授業）"
      );
      setFilteredData(filtered);
    } else if (option.name === "オンデマンド授業") {
      const filtered = data.filter(
        (item) =>
          item.lessonModeName ===
            "オンライン授業（主としてオンデマンド形式）" ||
          item.lessonModeName === "オンライン授業（全回オンデマンド形式）"
      );
      setFilteredData(filtered);
    } else if (option.name === "出席がない授業") {
      const filtered = data.filter((item) => {
        const attCount = item.reviews.reduce((count, review) => {
          return review.attendance ? count + 1 : count;
        }, 0);
        return item.reviews.length > 0 && attCount < item.reviews.length / 2;
      });
      setFilteredData(filtered);
    } else if (option.name === "試験がない授業") {
      const filtered = data.filter((item) => {
        const examCount = item.reviews.reduce((count, review) => {
          return review.hasExam ? count + 1 : count;
        }, 0);
        return item.reviews.length > 0 && examCount < item.reviews.length / 2;
      });
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    setSortedData(filteredData);
  }, [filteredData]);

  return (
    <div className="outlineStyle font-notoSans">
      <div className="my-8">
        <Heading heading="楽単リスト　人文・社会科学" />
      </div>
      <div className="lg:px-16 flex flex-col justify-center bg-yellow-50 p-8 rounded-lg mb-8 ">
        <div>
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-3 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-center text-2xl font-bold pb-[2px]">
              授業情報について
            </h2>
          </div>
          <AboutCourseList />
        </div>
        <div className="p-4 rounded-md">
          <div className="flex items-center text-gray-800 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <p className="pb-[2px]">並び替え</p>
          </div>
          <Sorts
            selected={selected}
            setSelected={setSelected}
            sortData={sortData}
          />
        </div>
        <div className="p-4 rounded-md">
          <div className="flex items-center text-gray-800 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
            <p className="pb-[2px]">フィルター</p>
          </div>
          <Filter filterData={filterData} />
        </div>
      </div>
      <div className="lg:px-16 flex flex-col lg:flex-row lg:flex-wrap justify-between">
        {sortedData.map(
          (courseSummary: CourseSummary & { reviews: Review[] }) => {
            const reputationSum = courseSummary.reviews.map((item) => {
              return item.reputation;
            });
            return (
              <React.Fragment key={courseSummary.id}>
                <Link
                  href={`/rakutan/${courseSummary.id}`}
                  className="lg:basis-[49%] flex flex-col bg-gray-50 p-8 rounded-lg mb-8 shadow-lg hover:bg-gray-200 duration-300 transform rotate-x-12 rotate-z-10 transition duration-400 ease-in-out hover:translate-y-1 hover:rotate-x-12 hover:rotate-z-10"
                >
                  <p className="text-xl lg:text-2xl font-medium mb-1">
                    {courseSummary.subjectName}
                  </p>
                  <p className="text-lg lg:text-xl text-gray-500 mb-1">
                    {courseSummary.locationName}
                  </p>

                  <AvgStar reputationSum={reputationSum} />

                  <p className="text-sm font-medium text-gray-500 mb-8">
                    {courseSummary.reviews.length === 0
                      ? "0"
                      : courseSummary.reviews.length}
                    件の評価
                  </p>

                  <div className="border border-t-1 border-b-0 border-x-0">
                    <div className="text-gray-500 mb-2 mt-4">
                      {courseSummary.lessonModeName ===
                      "対面授業（主として対面授業）" ? (
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
                      {courseSummary.faculties.map((faculty, index) => {
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
                      <p className="pb-[2px]">
                        {courseSummary.dayOfWeekPeriod}
                      </p>
                    </div>
                  </div>
                  <div className="border border-t-1 border-b-0 border-x-0">
                    <HasReport reviews={courseSummary.reviews} />
                    <HasAttendance reviews={courseSummary.reviews} />
                    <HasExam reviews={courseSummary.reviews} />
                  </div>
                </Link>
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Humanities;
