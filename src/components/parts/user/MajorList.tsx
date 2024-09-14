import majorsMaster from "@/src/data/majors";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import type { Major } from "@prisma/client";
import React from "react";

const MajorList: React.FC<{
	facultyId: number;
	major: Major;
	setMajor: React.Dispatch<React.SetStateAction<Major>>;
}> = ({ facultyId, major, setMajor }) => {
	const filteredMajors = majorsMaster.filter(
		(major) => major.facultyId === facultyId,
	);

	return (
		<Listbox value={major} onChange={setMajor}>
			<div className="relative z-10 w-full h-7 flex">
				<Listbox.Button className="relative w-full h-7 cursor-default rounded-lg bg-white text-left -m-[1px] border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
					<span className="block truncate text-sm text-end mr-6">
						{major.name || "専攻を選択してください"}
					</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
						<ChevronUpDownIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={React.Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-200">
						{filteredMajors.map((filteredmajor) => (
							<Listbox.Option
								key={filteredmajor.id}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active ? "bg-yellow-50 text-yellow-500" : "text-gray-800"
									}`
								}
								value={filteredmajor}
							>
								{({ selected, active }) => (
									<>
										<span
											className={`block truncate ${
												selected ? "font-medium" : "font-normal"
											}`}
										>
											{filteredmajor.name}
										</span>
										{selected ? (
											<span
												className={`${
													active ? "text-yellow-600" : "text-yellow-600"
												}
                                  absolute inset-y-0 left-
                                  0 flex items-center pl-3`}
											></span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default MajorList;
