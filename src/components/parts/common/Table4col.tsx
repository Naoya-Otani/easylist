import React, { type FC } from "react";

const Table4col: FC<{
	head: string[];
	items: { th: string; td1: string; td2: string; td3: string }[];
}> = ({ head, items }) => {
	return (
		<div>
			<div className="relative overflow-x-auto rounded-md shadow">
				<table className="w-full text-sm text-left text-black font-notoSans">
					<thead className="text-xs text-black uppercase bg-yellow-100 ">
						<tr>
							{head.map((item) => (
								<th scope="col" className="px-6 py-3" key={item}>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{items.map((item) => (
							<React.Fragment key={item.th}>
								<tr className="bg-white border-b">
									<th scope="row" className="px-6 py-4 font-normal">
										{item.th}
									</th>
									<td className="px-6 py-4">{item.td1}</td>
									<td className="px-6 py-4">{item.td2}</td>
									<td className="px-6 py-4">{item.td3}</td>
								</tr>
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table4col;
