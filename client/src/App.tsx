import { Button } from "@/components/ui/button";
import Sidebar from "@/components/elements/sidebar";
import { ThemeProvider } from "./components/utilities/themeProvider";

Button;

function App() {
	return (
		<ThemeProvider>
			<div className="app">
				<Sidebar />
			</div>
		</ThemeProvider>
	);
}

export default App;
