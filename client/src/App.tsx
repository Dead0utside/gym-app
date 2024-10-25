import { ThemeProvider } from "./components/utilities/themeProvider";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/elements/sidebar";
import Workspace from "./components/elements/workspace";
import { useState } from "react";

function App() {
	const [workspaceContent, setWorkspaceContent] = useState(0);

	return (
		<ThemeProvider>
			<SidebarProvider>
				<AppSidebar setWorkspaceContent={setWorkspaceContent} />
				<main>
					<SidebarTrigger />
					<Workspace trainingId={workspaceContent} />
				</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}

export default App;
