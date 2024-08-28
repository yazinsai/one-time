"use server";

import { nanoid } from "nanoid";

type SecretInfo = {
	content: string;
	viewed: boolean;
};

// Use global variable to persist cache across requests
declare global {
	var secretCache: Map<string, SecretInfo>;
}

if (!global.secretCache) {
	global.secretCache = new Map<string, SecretInfo>();
}

export async function storeSecret(content: string): Promise<string> {
	const id = nanoid();
	global.secretCache.set(id, { content, viewed: false });
	return id;
}

export async function getSecret(id: string): Promise<string | null> {
	const secret = global.secretCache.get(id);
	if (secret && !secret.viewed) {
		secret.viewed = true;
		global.secretCache.set(id, secret); // Update the secret in the cache
		return secret.content;
	}
	return null;
}
