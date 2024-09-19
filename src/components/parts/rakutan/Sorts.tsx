import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { type FC, Fragment, useEffect, useState } from "react";
import type React from "react";
import { sortOptions } from "./SortFilterOptions";

const Sorts: FC<{
	sort: string;
	setSort: React.Dispatch<React.SetStateAction<string>>;
}> = ({ sort, setSort }) => {
	const [selected, setSelected] = useState(sortOptions[0]);
	const sortHandler = (option: { name: string; value: string }) => {
		setSort(option.value);
		setSelected(option);
	};
	useEffect(() => {
		setSelected(
			sortOptions.find((option) => option.value === sort) || sortOptions[0],
		);
	}, [sort]);
	return (
		<div className="w-full">
			<Listbox value={sort}>
				<div className="relative mt-1 z-20">
					<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
						<span className="block truncate">{selected.name}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon
								className="h-5 w-5 text-gray-500"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{sortOptions.map((option, optionIdx) => (
								<Listbox.Option
									key={optionIdx}
									onClick={() => sortHandler(option)}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? "bg-yellow-50 text-yellow-500" : "text-gray-800"
										}`
									}
									value={option.value}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{option.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-600">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default Sorts;
