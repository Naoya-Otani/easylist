import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, FC, useState } from "react";
import DoneModal from "../common/DoneModal";
import { useSession } from "next-auth/react";

const ReviewMenu: FC<{
  reviewId: number;
  userId: string;
}> = ({ reviewId, userId }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const isMatch = session?.userId === userId;
  const deleteHandler = async () => {
    if (isMatch) {
      try {
        const response = await fetch("/api/reviews/delete", {
          method: "POST",
          body: JSON.stringify({ reviewId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          console.log("レビューが削除されました");
          setIsOpen(true);
        } else {
          console.error("レビューの削除中にエラーが発生しました");
        }
      } catch (error) {
        console.error("レビューの削除中にエラーが発生しました:", error);
      }
    }
  };

  return (
    <div className="absolute top-0 right-0 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md hover:bg-opacity-30 text-gray-500 z-10">
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
            {isMatch || (
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-800"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
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
                          d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                        />
                      </svg>
                      報告する
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
            {isMatch && (
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={deleteHandler}
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-800"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      削除する
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
      <DoneModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="レビューを削除しました！"
        body="レビューを削除しました。"
      />
    </div>
  );
};

export default ReviewMenu;
