import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SuccessPage({
	searchParams,
}: { searchParams: { id: string } }) {
	const secretUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ""}/secret/${searchParams.id}`;

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-3xl font-bold text-center">
						Secret Information App
					</CardTitle>
				</CardHeader>
				<CardContent className="text-center space-y-4">
					<p>Your secret information has been stored.</p>
					<p>Here's your one-time secret URL:</p>
					<Link
						href={secretUrl}
						className="text-blue-500 hover:underline break-all block"
					>
						{secretUrl}
					</Link>
					<p className="text-sm text-muted-foreground">
						Remember: This URL will only work once!
					</p>
					<Button asChild>
						<Link href="/">Create Another Secret</Link>
					</Button>
				</CardContent>
			</Card>
		</main>
	);
}
