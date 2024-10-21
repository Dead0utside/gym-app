import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/utilities/modeToggle";
import { Training } from "@/components/utilities/types";
import { useEffect, useState } from "react";

const GET_URL = "http://localhost:8080/api/v1/training/get";

export function AppSidebar() {
	const { isMobile } = useSidebar();

	const [trainings, setTrainings] = useState(new Array<Training>());

	useEffect(() => {
		const fetchTrainings = async () => {
			const fetchResult = await fetch(`${GET_URL}`);
			const fetchResultJson =
				(await fetchResult.json()) as Array<Training>;

			setTrainings(fetchResultJson);
		};

		fetchTrainings();
	}, [trainings]);

	return (
		<Sidebar>
			<SidebarHeader className="flex-row">
				<ModeToggle />
				<h1 className="mx-auto"> Gym app </h1>
				{isMobile && <SidebarTrigger />}
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu>
					{trainings.map((training) => (
						<SidebarMenuItem key={`training-${training.id}`}>
							<SidebarMenuButton asChild>
								<span>{training.name}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
