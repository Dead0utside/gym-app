"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DialogFooter } from "@/components/ui/dialog.tsx";

const POST_URL = "http://localhost:8080/api/v1/exercise/add-to-training";

const addExerciseFormSchema = z.object({
	name: z.string().min(2, "Exercise name is too short"),
	description: z.ostring(),
	sets: z
		.number()
		.positive("Number of sets must be positive.")
		.int("Number of sets must be integer."),
	reps: z
		.number()
		.positive("Number of reps must be positive.")
		.int("Number of reps must be integer."),
	weight: z.number().positive("Weight must be positive"),
});

type Props = {
	trainingId: number,
	onSuccess: (value: void) => void;
};

export function AddExerciseForm({ trainingId, onSuccess }: Props) {
	const form = useForm<z.infer<typeof addExerciseFormSchema>>({
		resolver: zodResolver(addExerciseFormSchema),
		defaultValues: {
			name: "",
			description: "",
			sets: 0,
			reps: 0,
			weight: 0,
		},
	});

	async function onSubmit(values: z.infer<typeof addExerciseFormSchema>) {
		// values = {
		// 	...values,
		// 	sets: Number(values.sets),
		// 	reps: Number(values.reps),
		// 	weight: Number(values.weight),
		// };
		console.log(values);
		try {
			console.log(`Training id: ${trainingId}`);
			const response = await fetch(`${POST_URL}/${trainingId}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (response.ok) {
				console.log("Submission successful");
				onSuccess();
			} else {
				console.error("Submission failed");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Exercise name</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. Bench press"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Exercise description</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. Chest focus"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="sets"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Sets</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. 3"
									{...field}
									value={field.value || ""}
									onChange={(e) => {
										// Optional: Convert value to number
										field.onChange(Number(e.target.value));
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="reps"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Reps</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. 12"
									{...field}
									value={field.value || ""}
									onChange={(e) => {
										// Optional: Convert value to number
										field.onChange(Number(e.target.value));
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="weight"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Weight, kg</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. 50"
									{...field}
									value={field.value || ""}
									onChange={(e) => {
										// Optional: Convert value to number
										field.onChange(Number(e.target.value));
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<DialogFooter>
					<Button type={"submit"}> Add</Button>
				</DialogFooter>
			</form>
		</Form>
	);
}

// {
// 	"name": "bicep curls",
// 	"description": "arm day",
// 	"sets": 3,
// 	"reps": 12,
// 	"weight": 19.5
// }
