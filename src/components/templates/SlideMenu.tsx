import React, { FC } from "react";
import Link from "next/link";
import SearchBar from "../parts/Header/SearchBar";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LogoBar from "../parts/common/LogoBar";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useSession } from "next-auth/react";
import AuthBtn from "../atoms/Button/AuthBtn";

const SlideMenu: FC<{
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ openMenu, setOpenMenu }) => {
  useLockBodyScroll();
  const { data: session } = useSession();
  return (
    <Transition
      appear
      show={openMenu}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="fixed inset-0 bg-white w-screen h-screen flex flex-col justify-between z-30 overflow-hidden ">
        <div className="relative flex justify-center my-6">
          <LogoBar />
        </div>
        <div className="font-notoSans mt-4 mx-6">
          <p className="text-sm font-bold px-11 text-yellow-600">Menu</p>
          <ul className="font-medium flex flex-col p-4 text-center">
            <li className="block py-2 pl-3 pr-4">
              <Menu as="div">
                <Menu.Button className="inline-flex w-full items-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
                  <h1 className="text-xl font-bold">楽単</h1>
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 hover:text-yellow-600"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items
                    as="section"
                    className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan"
                          >
                            概要
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan/nature"
                          >
                            自然科学
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan/humanities"
                          >
                            人文・社会科学
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan/online"
                          >
                            オンライン授業
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan/pe"
                          >
                            体育（準備中）
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan/specialized"
                          >
                            専門科目（準備中）
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/rakutan/others"
                          >
                            その他（準備中）
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="block py-2 pl-3 pr-4">
              <Menu as="div">
                <Menu.Button className="inline-flex w-full items-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
                  <h1 className="text-xl font-bold">履修</h1>
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 hover:text-yellow-600"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items
                    as="section"
                    className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses"
                          >
                            概要
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses/letters"
                          >
                            文学部
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses/economics"
                          >
                            経済学部
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses/lawlaw"
                          >
                            法学部法学科
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses/lawpolitics"
                          >
                            法学部政治学科
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses/commerce"
                          >
                            商学部
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/courses/science"
                          >
                            理工学部
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="block py-2 pl-3 pr-4">
              <Menu as="div">
                <Menu.Button className="inline-flex w-full items-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
                  <h1 className="text-xl font-bold">About Us</h1>
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 hover:text-yellow-600"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items
                    as="section"
                    className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  >
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/aboutus"
                          >
                            Our Team
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/contact"
                          >
                            Contact
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            {session && (
              <li className="block py-2 pl-3 pr-4">
                <Link
                  className="inline-flex w-full items-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75"
                  href={"/user"}
                >
                  <h1 className="text-xl font-bold">マイページ</h1>
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="h-[36%] flex flex-col justify-around items-start px-[68px] font-notoSans mt-6 py-6 bg-gradient-to-r from-orange-200 to-yellow-100 -z-10">
          <div className="mt-6">
            <SearchBar />
          </div>
          <div className="w-fit rounded-md shadow-lg">
            <AuthBtn />
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default SlideMenu;
