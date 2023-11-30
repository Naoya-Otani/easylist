import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LineBtn from "@/src/components/atoms/Button/LineBtn";
import XBtn from "@/src/components/atoms/Button/XBtn";
import CopyBtn from "../../atoms/Button/CopyBtn";

const ShareModal: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  professor: string;
  subject: string;
}> = ({ isOpen, setIsOpen, id, professor, subject }) => {
  if (process.env.NEXT_PUBLIC_BASE_URL === undefined) return <></>;

  const closeModal = () => {
    setIsOpen(false);
  };

  const decodedUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/rakutan/${id}`;

  const url = `${encodeURIComponent(
    process.env.NEXT_PUBLIC_BASE_URL
  )}/rakutan/${id}`;
  const title = `${encodeURIComponent(professor)} ${encodeURIComponent(
    subject
  )}の授業情報を見るならこちら！%0a%0a`;

  return (
    <div>
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
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium tracking-widest text-center leading-6 text-gray-900"
                  >
                    SHARE
                  </Dialog.Title>
                  <div className="mt-6">
                    <div className="flex justify-center items-center  gap-6">
                      <XBtn encodedUrl={url} encodedTitle={title} />
                      <LineBtn url={url} title={title} />
                      <CopyBtn url={decodedUrl} />
                    </div>
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
    </div>
  );
};

export default ShareModal;
