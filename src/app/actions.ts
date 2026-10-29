"use server";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  fields?: Record<string, string>;
};

// Delivers contact form messages by email through Resend, so the address never reaches the browser.
export async function sendMessage(_: ContactState, formData: FormData): Promise<ContactState> {
  const fields = Object.fromEntries(formData) as Record<string, string>;
  const { name, email, message, website } = fields;

  // Bots fill the hidden "website" field; pretend success and drop the message.
  if (website) return { status: "sent" };
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { status: "error", message: "Please fill in every field.", fields };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Website contact form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend failed", res.status, await res.text());
    return {
      status: "error",
      message: "Your message couldn't be sent. Please try again later.",
      fields,
    };
  }
  return { status: "sent" };
}
