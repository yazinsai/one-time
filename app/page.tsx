"use client";

import { handleSubmit } from "./actions";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	async function onSubmit(formData: FormData) {
		const secretId = await handleSubmit(formData);
		if (secretId) {
			router.push(`/success?id=${secretId}`);
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-4xl font-bold mb-8">Secret Information App</h1>
			<form action={onSubmit} className="w-full max-w-md">
				<textarea
					name="secret"
					placeholder="Enter your secret information here..."
					className="w-full p-2 mb-4 border border-gray-300 rounded"
					rows={4}
					required
				/>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
				>
					Generate Secret URL
				</button>
			</form>
		</main>
	);
}
