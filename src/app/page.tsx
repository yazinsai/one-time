"use client";

import { handleSubmit } from "./actions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
	const router = useRouter();

	async function onSubmit(formData: FormData) {
		const secretId = await handleSubmit(formData);
		if (secretId) {
			router.push(`/success?id=${secretId}`);
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-3xl font-bold text-center">
						Secret Information App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form action={onSubmit} className="space-y-4">
						<Textarea
							name="secret"
							placeholder="Enter your secret information here..."
							className="w-full"
							rows={4}
							required
						/>
						<Button type="submit" className="w-full">
							Generate Secret URL
						</Button>
					</form>
				</CardContent>
			</Card>
		</main>
	);
}
