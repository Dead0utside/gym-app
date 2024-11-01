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
import { AddTrainingForm } from "@/components/utilities/forms/addTrainingForm.tsx";
import { useState } from "react";

const AddTrainingDialog = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleClose = () => setIsDialogOpen(false);

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
				<AddTrainingForm onSuccess={handleClose}/>
			</DialogContent>
		</Dialog>
	);
};

export default AddTrainingDialog;