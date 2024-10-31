"use client"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { SidebarGroupAction } from "@/components/ui/sidebar.tsx";
import { Plus } from "lucide-react";
import { AddTrainingForm } from "@/components/utilities/formSchemas/addTrainingForm.tsx";

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
				<AddTrainingForm />
			</DialogContent>
		</Dialog>
	);
};

export default AddTrainingDialog;