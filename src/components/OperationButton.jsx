import React from "react";
import { ACTIONS } from "../actions";

export default function OperationButton({ operation, dispatch }) {
	return (
		<button
			onClick={() =>
				dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
			}
			className="bg-[#b6b6b6] text-[#18212A] rounded-full w-12 h-fit  flex justify-center items-center  p-2 hover:bg-[#e2dfdf]"
		>
			<p className="text-2xl">{operation}</p>
		</button>
	);
}
