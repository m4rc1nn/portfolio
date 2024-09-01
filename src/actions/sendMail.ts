"use server";

export async function sendMail(data: FormData) {
  const email = data.get("email");
  const name = data.get("name");
  const message = data.get("message");

  return { success: false, error: "Failed to send email." };
}