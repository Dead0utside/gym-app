import { Exercise } from "@/components/utilities/types.ts";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";

type Props = {
	exercise: Exercise;
};

const ExerciseCard = ({ exercise }: Props) => {
	return (
		<Card className={`my-5 mx-5 md:mx-auto px-5`}>
			<CardHeader>
				<CardTitle className={`w-4/5`}>{exercise.name}</CardTitle>
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
