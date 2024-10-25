import { Training } from "@/components/utilities/types";
import { useEffect, useState } from "react";

type Props = {
	trainingId: number;
};

const Workspace = ({ trainingId }: Props) => {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {}, [exercises]);

	return <div>{trainingId}</div>;
};

export default Workspace;
