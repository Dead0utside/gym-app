import { Exercise } from "@/components/utilities/types";
import { useEffect, useState } from "react";
import ExerciseCard from "@/components/elements/workspace/exerciseCard.tsx";

const GET_URL = "http://localhost:8080/api/v1/exercise/get-from-training";

type Props = {
	trainingId: number;
};

const Workspace = ({ trainingId }: Props) => {
	const [exercises, setExercises] = useState(new Array<Exercise>());

	useEffect(() => {
		const fetchExercises = async () => {
			const fetchResult = await fetch(`${GET_URL}/${trainingId}`);
			return (await fetchResult.json()) as Array<Exercise>;
		};

		fetchExercises().then(response => setExercises(response));
	}, [trainingId]);

	// TODO add "+" button in workspace to create exercise
	// TODO create form for exercise submission
	return <section className="md:flex justify-evenly gap-5">
		{exercises.map(exercise => (
			<ExerciseCard exercise={exercise} key={exercise.id} />
		))}
	</section>;
};

export default Workspace;
