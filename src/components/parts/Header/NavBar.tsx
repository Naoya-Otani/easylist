import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Button from "@/src/components/atoms/LoginBtn";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      {openMenu ? (
        <div className="fixed z-10 top-0 left-0 w-full">
          <div className="flex flex-row min-h-fit">
            <div className="basis-1/2"></div>
            <div className="basis-1/2 font-notoSans font-semibold">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-l-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-center">
                <li className="block py-2 pl-3 pr-4">
                  <button onClick={menuFunction} className="font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
                <li className="block py-2 pl-3 pr-4">
                  <Menu as="div" className="z-50">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
                      <h1>楽単</h1>
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
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                                href="/rakutan/pe"
                              >
                                体育
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
                                専門科目
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
                                その他
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <li className="block py-2 pl-3 pr-4">
                  <Menu as="div" className="z-50">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
                      <h1>履修</h1>
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
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
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
                  <Menu as="div" className="z-50">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
                      <h1>About Us</h1>
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
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                  </Menu>{" "}
                </li>
                <Button />
              </ul>
            </div>
          </div>
        </div>
      ) : undefined}
      <div className="md:flex hidden items-center md:space-x-4 lg:space-x-6 font-notoSans font-semibold ">
        <Menu as="div" className="z-50">
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
            <h1>楽単</h1>
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
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="/rakutan/pe"
                    >
                      体育
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="/rakutan/specialized"
                    >
                      専門科目
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="/rakutan/others"
                    >
                      その他
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="z-50">
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
            <h1>履修</h1>
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
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
        <Menu as="div" className="z-50">
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm text-gray-800 hover:bg-yellow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75">
            <h1>About Us</h1>
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
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
                        active ? "bg-yellow-500 text-white" : "text-gray-900"
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
        <Button />
      </div>
      <button
        onClick={menuFunction}
        className="flex-initial fixed bottom-7 right-7 md:hidden rounded-full bg-white shadow-lg p-2 z-50 border-2 border-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-yellow-300"
      >
        <Bars3Icon className="w-10 h-10 text-yellow-500" />
      </button>
    </div>
  );
};

export default NavBar;
