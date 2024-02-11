import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, FC, useState } from "react";
import DoneModal from "../common/DoneModal";
import { useSession } from "next-auth/react";
import useSWRMutation from "swr/mutation";
import notifyMutationError from "@/lib/notifyMutationError";

const ReviewMenu: FC<{
  reviewId: number;
  courseId: number;
  userId: string;
}> = ({ reviewId, courseId, userId }) => {
  const { data: session } = useSession();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const isMatch = session?.userId === userId;

  const reportHandler = async () => {
    if (!isMatch) {
      try {
        const response = await fetch("/api/reviews/report", {
          method: "POST",
          body: JSON.stringify({ reviewId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          setIsReportOpen(true);
        } else {
          console.error("レビューの報告中にエラーが発生しました");
        }
      } catch (error) {
        console.error("レビューの報告中にエラーが発生しました:", error);
      }
    }
  };

  const deleteReview = async () => {
    try {
      const response = await fetch("/api/reviews/delete", {
        method: "POST",
        body: JSON.stringify({ reviewId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        notifyMutationError(response);
        throw new Error("レビューの削除にエラーが発生しました");
      }
      setIsDeleteOpen(true);
    } catch (error) {
      throw new Error("レビューの削除中にエラーが発生しました");
    }
  };

  const { trigger, isMutating } = useSWRMutation(
    `/api/rakutan/getRakutanById?id=${courseId}`,
    deleteReview,
    {
      onError: () => {
        throw new Error("レビューの削除中にエラーが発生しました");
      },
    }
  );

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
                      onClick={reportHandler}
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
                      onClick={() => {
                        trigger();
                      }}
                      disabled={isMutating || !isMatch}
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
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        title="レビューを削除しました！"
        body="レビューを削除しました。"
        status="deleted"
      />
      <DoneModal
        isOpen={isReportOpen}
        setIsOpen={setIsReportOpen}
        title="レビューを報告しました！"
        body="報告ありがとうございます。管理者がレビューをチェックします。"
        status="reported"
      />
      {isMutating && (
        <div className="fixed inset-0 overflow-hidden flex justify-center items-center bg-white opacity-50">
          <div className="flex flex-col items-center">
            <svg
              aria-hidden="true"
              className="inline w-16 h-16 mb-8 text-gray-200 animate-spin fill-yellow-400"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <div className="flex items-center mx-auto lg:ml-4 font-gothicA1">
              <img
                src="/icon-easylist.svg"
                alt="logo icon"
                className="w-7 h-7 mr-4 md:mr-6 pointer-events-none"
              />
              <h1 className="font-bold tracking-widest mr-2 text-2xl">KEIO</h1>
              <h1 className="font-extralight tracking-widest text-2xl">
                EASYLIST
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewMenu;
