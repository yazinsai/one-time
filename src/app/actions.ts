"use server";

import { storeSecret } from "@/lib/cache";

export async function handleSubmit(formData: FormData) {
	const secret = formData.get("secret") as string;
	if (secret) {
		const secretId = await storeSecret(secret);
		return secretId;
	}
}
