import { Exercise } from "@/components/utilities/types";
import { useEffect, useState } from "react";
import ExerciseCard from "@/components/elements/workspace/exerciseCard.tsx";
import AddExerciseDialog from "@/components/elements/workspace/addExerciseDialog.tsx";
import { SidebarTrigger } from "@/components/ui/sidebar.tsx";

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

		fetchExercises().then((response) => setExercises(response));
	});

	return (
		<section id="workspace">
			<section className={`flex justify-between`}>
				<SidebarTrigger className="m-5" />
				<div className="m-5">
					<AddExerciseDialog trainingId={trainingId}/>
				</div>
			</section>
			<section className="justify-evenly gap-5 md:flex md:flex-wrap">
				{exercises.map((exercise) => (
					<ExerciseCard exercise={exercise} key={exercise.id} />
				))}
			</section>
		</section>
	);
};

export default Workspace;
