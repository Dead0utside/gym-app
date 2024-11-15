import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddExerciseForm } from "@/components/utilities/forms/addExerciseForm.tsx";
import { Button } from "@/components/ui/button.tsx";

type Props = {
	trainingId: number,
}

const AddExerciseDialog = ({ trainingId }: Props) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleClose = () => setIsDialogOpen(false);

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			{trainingId > 0 && <DialogTrigger asChild>
				<Button variant="ghost" className="m-5 p-3 flex flex-row">
					<Plus />
				</Button>
			</DialogTrigger>}
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add Exercise</DialogTitle>
					<DialogDescription>Create a new exercise</DialogDescription>
				</DialogHeader>
				<AddExerciseForm trainingId={trainingId} onSuccess={handleClose}/>
			</DialogContent>
		</Dialog>
	);
};

export default AddExerciseDialog;