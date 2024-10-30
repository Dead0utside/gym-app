import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { SidebarGroupAction } from "@/components/ui/sidebar.tsx";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const AddTrainingDialog = () => {
	return (
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
				{/*TODO create a form for training creation here*/}
				<DialogFooter>
					<Button type={"submit"}> Add</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default AddTrainingDialog;