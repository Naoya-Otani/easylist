import React from "react";
import FacultySelector from "@/src/components/parts/rakutan/FacultySelector";
import { Tab } from "@headlessui/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const LangAndSpecializedTab = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      <div className="w-full md:w-[80%] py-6 px-4 md:p-8 border border-gray-200 rounded-lg shadow">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-yellow-500 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none",
                  selected
                    ? "bg-yellow-50 font-bold shadow text-gray-800"
                    : "text-white"
                )
              }
            >
              <span className="tracking-wider">第二外国語</span>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none",
                  selected
                    ? "bg-yellow-50 font-bold shadow text-gray-800"
                    : "text-white"
                )
              }
            >
              <span className="tracking-wider">学部専門科目</span>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <h3 className="text-xl font-semibold text-center my-12">
                第二外国語の口コミを検索
              </h3>
              <FacultySelector />
            </Tab.Panel>
            <Tab.Panel>
              <h3 className="text-xl font-semibold text-center my-12">
                準備中
              </h3>
              <p>この機能は現在準備中です。しばらくお待ちください。</p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default LangAndSpecializedTab;
