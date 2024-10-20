import { ModeToggle } from "@/components/utilities/modeToggle";

const Sidebar = () => {
	return (
		<aside className="h-screen w-1/6 bg-zinc-800">
			<header className="flex border-b-2 border-solid">
				{/* <p className="mx-auto">Trainings</p> */}
				<h1 className="mx-auto my-2 scroll-m-20 font-sans text-zinc-400">
					trainings
				</h1>
			</header>
			<ModeToggle />
		</aside>
	);
};

export default Sidebar;
