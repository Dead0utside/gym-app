import { Training } from "@/components/utilities/types";

type Props = {
	trainingId: number;
};

const Workspace = ({ trainingId }: Props) => {
	return <div>{trainingId}</div>;
};

export default Workspace;
