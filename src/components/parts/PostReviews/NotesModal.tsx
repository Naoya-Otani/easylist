import React, { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const DoneModal: FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  注意事項
                </Dialog.Title>
                <div className="mt-2">
                  <Image
                    src="/warning.svg"
                    alt="注意"
                    width={790}
                    height={512.20805}
                    className="w-[240px] block mx-auto mt-4 mb-8 pointer-events-none"
                  />
                  <ul className="text-sm text-gray-500 pl-4 ">
                    <li className="relative before:absolute before:content-[''] before:bg-gray-500 before:rounded-full before:w-1 before:h-1 before:top-[7px] before:left-[-10px]">
                      投稿にはGoogleアカウント(keio.jp)が必要です
                    </li>
                    <li className="relative before:absolute before:content-[''] before:bg-gray-500 before:rounded-full before:w-1 before:h-1 before:top-[7px] before:left-[-10px]">
                      ログイン時に提供される個人情報は当サイト以外では使用されません
                    </li>
                    <li className="relative before:absolute before:content-[''] before:bg-gray-500 before:rounded-full before:w-1 before:h-1 before:top-[7px] before:left-[-10px]">
                      授業と関係のない書き込みはご遠慮下さい
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    閉じる
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DoneModal;
