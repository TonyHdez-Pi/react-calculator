import "./index.css";
import ScreenComponent from "./components/ScreenComponent";
import ButtonPanel from "./components/ButtonPanel";

function App() {
	return (
		<div className="App w-full h-screen overflow-hidden">
			<ScreenComponent />
			<ButtonPanel />
		</div>
	);
}

export default App;
