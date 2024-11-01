import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/utilities/modeToggle";
import { Training } from "@/components/utilities/types";
import { useEffect, useState } from "react";
import TrainingMenuItem from "@/components/elements/sidebar/trainingMenuItem.tsx";
import AddTrainingDialog from "@/components/elements/sidebar/addTrainingDialog.tsx";

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
					<AddTrainingDialog />
					<SidebarGroupContent>
						<SidebarMenu>
							{trainings.map((training) => (
								// TODO make training menu item close the sidebar on mobile
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
