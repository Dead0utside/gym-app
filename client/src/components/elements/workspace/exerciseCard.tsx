import { Exercise } from "@/components/utilities/types.ts";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const DELETE_URL = "http://localhost:8080/api/v1/exercise/delete";

type Props = {
	exercise: Exercise;
};

const ExerciseCard = ({ exercise }: Props) => {
	async function deleteExercise(exerciseId: number){
		fetch(`${DELETE_URL}/${exerciseId}`, {
			method: "DELETE",
		}).then(response => console.log(response));
	}

	return (
		<Card className={`my-5 mx-5 md:mx-auto px-5`}>
			<CardHeader className="px-2">
				<div className="flex justify-between items-center">
					<CardTitle>{exercise.name}</CardTitle>
					<DropdownMenu>
						<DropdownMenuTrigger className="">
							<MoreVertical />
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
								<Button className="mx-auto" variant="ghost" onClick={() => deleteExercise(exercise.id)}>
									Delete
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>
			<Separator />
			<CardContent className={`mt-5`}>
				<p>Weight: {exercise.weight}kg</p>
				<p>Sets: {exercise.sets}</p>
				<p>Reps: {exercise.reps}</p>
			</CardContent>
			<CardFooter />
		</Card>
	);
};

export default ExerciseCard;
