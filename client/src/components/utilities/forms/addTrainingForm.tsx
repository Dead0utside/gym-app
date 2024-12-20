"use client"

import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DialogFooter } from "@/components/ui/dialog.tsx";

const POST_URL = "http://localhost:8080/api/v1/training/add";

const addTrainingFormSchema = z.object({
	name: z.string().min(2, "Training name is too short"),
	description: z.ostring(),
})

type Props = {
	onSuccess: (value: void) => void ;
}

export function AddTrainingForm({ onSuccess }: Props) {

	const form = useForm<z.infer<typeof addTrainingFormSchema>>({
		resolver: zodResolver(addTrainingFormSchema),
		defaultValues: {
			name: "",
			description: ""
		}
	})

	async function onSubmit(values: z.infer<typeof addTrainingFormSchema>) {
		console.log(values);
		try {
			const response = await fetch(POST_URL, {
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
							<FormLabel>Training name</FormLabel>
							<FormControl>
								<Input placeholder="e.g. Chest day" {...field} />
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
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Input placeholder="e.g. Upper body focus" {...field} />
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
	)
}