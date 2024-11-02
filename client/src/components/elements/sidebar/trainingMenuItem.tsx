import { SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar.tsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { MoreHorizontal } from "lucide-react";
import { Training } from "@/components/utilities/types.ts";
import { Button } from "@/components/ui/button.tsx";

type Props = {
	training: Training;
	setWorkspaceContent: (value: number) => void;
	deleteTrainingHandler: (value: number) => void;
}

const TrainingMenuItem = ({training, setWorkspaceContent, deleteTrainingHandler}: Props) => {
	const {isMobile, setOpenMobile} = useSidebar();

	return (
		<SidebarMenuItem
			className={`cursor-pointer`}
			onClick={() => {
					setWorkspaceContent(training.id);
					if (isMobile) {
						setOpenMobile(false);
					}
				}
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
					<DropdownMenuItem className="p-0">
						<Button className="mx-auto" variant="ghost">
							Rename
						</Button>
					</DropdownMenuItem>
					<DropdownMenuItem className="p-0">
						<Button className="mx-auto" variant="ghost" onClick={() => deleteTrainingHandler(training.id)}>
							Delete
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</SidebarMenuItem>
	);
};

export default TrainingMenuItem;