import React from "react";

export default function ScreenComponent({ values, result }) {
	return (
		<div className="w-full min-w-[300px] h-1/3 bg-gray-700 text-white font-medium text-4xl text-right p-5">
			<div className="flex w-full h-1/3">
				<p className="font-bold">Calculator</p>
			</div>
			<div className="w-full h-2/3">
				<section className="valuesContainer h-full flex flex-col justify-center">
					<h2>{values}</h2>
					<h4>{result}</h4>
				</section>
			</div>
		</div>
	);
}
