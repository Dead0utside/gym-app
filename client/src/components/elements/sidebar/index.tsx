import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/utilities/modeToggle";
import { Training } from "@/components/utilities/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import TrainingMenuItem from "@/components/elements/sidebar/trainingMenuItem.tsx";
import {
	Dialog,
	DialogContent,
	DialogDescription, DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";

const GET_URL = "http://localhost:8080/api/v1/training/get";

type Props = {
	setWorkspaceContent: (value: number) => void;
};

export function AppSidebar({ setWorkspaceContent }: Props) {
	const { isMobile } = useSidebar();

	const [trainings, setTrainings] = useState(new Array<Training>());

	useEffect(() => {
		const fetchTrainings = async () => {
			const fetchResult = await fetch(`${GET_URL}`);
			return (await fetchResult.json()) as Array<Training>;
		};

		fetchTrainings().then(response => setTrainings(response));
	}, [trainings]);

	return (
		<Sidebar>
			<SidebarHeader className={`flex-row pt-5`}>
				<ModeToggle />
				<h1 className="mx-auto"> Gym app </h1>
				{isMobile && <SidebarTrigger />}
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Trainings</SidebarGroupLabel>

					<Dialog>
						<DialogTrigger asChild>
							<SidebarGroupAction title="Add Training">
								<Plus /> <span className="sr-only"> Add Training</span>
							</SidebarGroupAction>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Add training</DialogTitle>
								<DialogDescription>Create a new training</DialogDescription>
							</DialogHeader>
							// TODO create a form for training creation
							<DialogFooter>
								<Button type={"submit"}> Add</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
					<SidebarGroupContent>
						<SidebarMenu>
							{trainings.map((training) => (
								<TrainingMenuItem key={training.id} training={training} setWorkspaceContent={setWorkspaceContent} />
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
