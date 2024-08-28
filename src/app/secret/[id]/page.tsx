import { getSecret } from "@/lib/cache";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function SecretPage({
	params,
}: { params: { id: string } }) {
	const secret = await getSecret(params.id);

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-3xl font-bold text-center">
						Secret Information
					</CardTitle>
				</CardHeader>
				<CardContent className="text-center space-y-4">
					{secret ? (
						<p className="text-lg">{secret}</p>
					) : (
						<p className="text-lg text-destructive">
							This secret has already been viewed or does not exist.
						</p>
					)}
					<Button asChild>
						<Link href="/">Create a New Secret</Link>
					</Button>
				</CardContent>
			</Card>
		</main>
	);
}
