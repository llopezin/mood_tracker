"use server";

import cookieNames from "@/utils/cookie/cookieNames.mjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogout() {
  cookies().delete(cookieNames.token);
  revalidatePath("/", "layout");
  redirect("/");
}
