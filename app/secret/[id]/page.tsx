import { getSecret } from "../../../lib/cache";

export default async function SecretPage({
	params,
}: { params: { id: string } }) {
	const secret = await getSecret(params.id);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-4xl font-bold mb-8">Secret Information</h1>
			{secret ? (
				<p className="mb-4">{secret}</p>
			) : (
				<p className="mb-4 text-red-500">
					This secret has already been viewed or does not exist.
				</p>
			)}
		</main>
	);
}
