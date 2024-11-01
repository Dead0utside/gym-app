import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { Plus } from "lucide-react";

const AddExerciseDialog = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<Plus />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add Exercise</DialogTitle>
					<DialogDescription>Create a new exercise</DialogDescription>
				</DialogHeader>

			</DialogContent>
		</Dialog>
	);
};

export default AddExerciseDialog;