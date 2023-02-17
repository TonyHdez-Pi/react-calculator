import React from "react";
export default function MainButton({ content, handler, color }) {
	if (color === "white") {
		return (
			<button
				onClick={handler}
				className="bg-[#b6b6b6] text-[#18212A] rounded-full w-12 h-fit  flex justify-center items-center  p-2 hover:bg-[#e2dfdf]"
			>
				<p className="text-2xl">{content}</p>
			</button>
		);
	}

	if (color === "dark") {
		return (
			<button
				onClick={handler}
				className="bg-[#18212A] text-white rounded-full w-12 h-fit p-2 hover:bg-[#334455]  flex justify-center items-center "
			>
				<p className="text-2xl">{content}</p>
			</button>
		);
	}
}
