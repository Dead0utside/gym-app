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
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/utilities/modeToggle";
import { Training } from "@/components/utilities/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus } from "lucide-react";
import { useEffect, useState } from "react";

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
					<SidebarGroupAction title="Add Training">
						<Plus /> <span className="sr-only"> Add Training</span>
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							{trainings.map((training) => (
								// TODO crete a separate component for SidebarMenuItem (cleaner)
								<SidebarMenuItem
									className={`cursor-default`}
									key={`training-${training.id}`}
									onClick={() =>
										setWorkspaceContent(training.id)
									}
								>
									<SidebarMenuButton asChild>
										<span>{training.name}</span>
									</SidebarMenuButton>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<SidebarMenuAction>
												<MoreHorizontal />
											</SidebarMenuAction>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											side="right"
											align="start"
										>
											<DropdownMenuItem>
												<span>Rename</span>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<span>Delete</span>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
