import { useReducer } from "react";
import { ACTIONS } from "./actions";

import "./index.css";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import ScreenComponent from "./components/ScreenComponent";

function reducer(state, { type, payload }) {
	console.log(state);
	switch (type) {
		case ACTIONS.ADD_DIGIT:
			if (payload.content === "0" && state.firstV === "0") return state;
			if (payload.content === "." && state.firstV.includes(".")) return state;
			return {
				...state,
				firstV: `${state.firstV || ""}${payload.content}`,
			};
		case ACTIONS.CLEAR:
			return {};
		case ACTIONS.CHOOSE_OPERATION:
			if (state.firstV === null && state.secondV === null) {
				return state;
			}
			if (state.secondV === null) {
				return {
					...state,
					operation: payload.operation,
					secondV: state.firstV,
					firstV: null,
				};
			}
	}
}

function App() {
	const [{ firstV, secondV, op, result }, dispatch] = useReducer(reducer, {});
	return (
		<div className="App w-full h-screen">
			<ScreenComponent
				firstV={firstV}
				secondV={secondV}
				op={op}
				result={result}
			/>

			<div className="ButtonPanel min-w-[300px] flex flex-col w-full h-2/3 bg-[#18212A]">
				<section className="firstRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
					<OperationButton operation={"AC"} dispatch={dispatch} />
					<OperationButton
						operation={"DEL"}
						dispatch={() => dispatch({ type: ACTIONS.CLEAR })}
					/>

					<OperationButton operation={"%"} dispatch={dispatch} />
					<OperationButton operation={"/"} dispatch={dispatch} />
				</section>
				<section className="secondRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
					<DigitButton content={"7"} dispatch={dispatch} />
					<DigitButton content={"8"} dispatch={dispatch} />
					<DigitButton content={"9"} dispatch={dispatch} />
					<OperationButton operation={"x"} dispatch={dispatch} />
				</section>
				<section className="thirdRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
					<DigitButton content={"4"} dispatch={dispatch} />
					<DigitButton content={"5"} dispatch={dispatch} />
					<DigitButton content={"6"} dispatch={dispatch} />
					<OperationButton operation={"-"} dispatch={dispatch} />
				</section>
				<section className="fourthRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
					<DigitButton content={"1"} dispatch={dispatch} />
					<DigitButton content={"2"} dispatch={dispatch} />
					<DigitButton content={"3"} dispatch={dispatch} />
					<OperationButton operation={"+"} dispatch={dispatch} />
				</section>
				<section className="fifthRow w-full h-1/5 flex items-center justify-evenly p-0 m-0">
					<DigitButton content={""} />
					<DigitButton content={"0"} dispatch={dispatch} />
					<DigitButton content={"."} dispatch={dispatch} />
					<OperationButton operation={"="} dispatch={dispatch} />
				</section>
			</div>
		</div>
	);
}

export default App;
