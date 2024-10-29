import { Exercise } from "@/components/utilities/types.ts";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";

type Props = {
	exercise: Exercise;
};

const ExerciseCard = ({ exercise }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{exercise.name}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>Weight: {exercise.weight}kg</p>
				<p>Sets: {exercise.sets}</p>
				<p>Reps: {exercise.reps}</p>
			</CardContent>
			<CardFooter />
		</Card>
	);
};

export default ExerciseCard;
