import { SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar.tsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { MoreHorizontal } from "lucide-react";
import { Training } from "@/components/utilities/types.ts";

type Props = {
	training: Training;
	setWorkspaceContent: (value: number) => void;
}

const TrainingMenuItem = ({training, setWorkspaceContent}: Props) => {
	return (
		<SidebarMenuItem
			className={`cursor-default`}
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
	);
};

export default TrainingMenuItem;