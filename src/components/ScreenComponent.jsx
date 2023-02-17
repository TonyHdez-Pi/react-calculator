import React from "react";
// firstV takes the first number,
// secondV takes the second number,
// op takes the operation type,
// result shows the result of the operation.
export default function ScreenComponent({
	firstV = "",
	secondV = "",
	op = "",
	result = "",
}) {
	return (
		<div className="w-full min-w-[300px] h-1/3 bg-gray-700 text-white font-medium text-4xl text-right p-5">
			<div className="flex w-full h-1/3">
				<p className="font-bold">Calculator</p>
			</div>
			<div className="w-full h-2/3">
				<section className="valuesContainer h-full flex flex-col justify-center">
					<h2 className="mb-2 font-light">{`${firstV} ${op} ${secondV}`}</h2>
					<h4>{result}</h4>
				</section>
			</div>
		</div>
	);
}
