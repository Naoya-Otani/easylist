import React, { FC, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

const DoneModal: FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: string;
  status?: "posted" | "deleted" | "reported";
}> = ({ isOpen, setIsOpen, title, body, status }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const statusImage = {
    posted: {
      src: "/posted.svg",
      width: 303.71,
      height: 525.42,
    },
    deleted: {
      src: "/deleted.svg",
      width: 920.30414,
      height: 515.08657,
    },
    reported: {
      src: "/reported.svg",
      width: 575.8112,
      height: 524.00008,
    },
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
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  {status !== undefined && (
                    <Image
                      src={statusImage[status].src}
                      alt={status}
                      width={statusImage[status].width}
                      height={statusImage[status].height}
                      className={`${
                        status === "posted" ? "h-[200px]" : "w-[50%]"
                      } block mx-auto mt-4 mb-8 pointer-events-none`}
                    />
                  )}
                  <p className="text-sm text-gray-500">{body}</p>
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
