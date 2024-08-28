import Link from "next/link";

export default function SuccessPage({
	searchParams,
}: { searchParams: { id: string } }) {
	const secretUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ""}/secret/${searchParams.id}`;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-4xl font-bold mb-8">Secret Information App</h1>
			<div className="text-center">
				<p className="mb-4">Your secret information has been stored.</p>
				<p className="mb-4">Here's your one-time secret URL:</p>
				<Link
					href={secretUrl}
					className="text-blue-500 hover:underline break-all"
				>
					{secretUrl}
				</Link>
				<p className="mt-4 text-sm text-gray-600">
					Remember: This URL will only work once!
				</p>
			</div>
		</main>
	);
}
