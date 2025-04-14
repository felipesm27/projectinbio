"use server";

import { db } from "../lib/firebase";

export async function verifyLink(link: string) {
  const spapshot = await db.collection("profiles").doc(link).get();

  return spapshot.exists;
}
