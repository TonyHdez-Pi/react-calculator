import React from "react";
import MainButton from "./MainButton";

export default function ButtonPanel() {
	return (
		<div className="ButtonPanel min-w-[300px] flex flex-col w-full h-2/3 bg-[#18212A]">
			<section className="firstRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
				<MainButton color={"dark"} content={"AC"} />
				<MainButton color={"dark"} content={"DEL"} />
				<MainButton color={"dark"} content={"%"} />
				<MainButton color={"white"} content={"/"} />
			</section>
			<section className="secondRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
				<MainButton color={"dark"} content={"7"} />
				<MainButton color={"dark"} content={"8"} />
				<MainButton color={"dark"} content={"9"} />
				<MainButton color={"white"} content={"x"} />
			</section>
			<section className="thirdRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
				<MainButton color={"dark"} content={"4"} />
				<MainButton color={"dark"} content={"5"} />
				<MainButton color={"dark"} content={"6"} />
				<MainButton color={"white"} content={"-"} />
			</section>
			<section className="fourthRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
				<MainButton color={"dark"} content={"1"} />
				<MainButton color={"dark"} content={"2"} />
				<MainButton color={"dark"} content={"3"} />
				<MainButton color={"white"} content={"+"} />
			</section>
			<section className="fifthRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
				<MainButton color={"dark"} content={""} />
				<MainButton color={"dark"} content={"0"} />
				<MainButton color={"dark"} content={"."} />
				<MainButton color={"white"} content={"="} />
			</section>
		</div>
	);
}
