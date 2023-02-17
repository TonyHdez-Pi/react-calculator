import React from "react";
import { ACTIONS } from "../actions";

export default function DigitButton({ content, dispatch }) {
	return (
		<button
			onClick={() =>
				dispatch({ type: ACTIONS.ADD_DIGIT, payload: { content } })
			}
			className="bg-[#18212A] text-white rounded-full w-12 h-fit p-2 hover:bg-[#334455]  flex justify-center items-center "
		>
			<p className="text-2xl">{content}</p>
		</button>
	);
}
