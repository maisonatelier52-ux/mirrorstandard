import { NextResponse } from "next/server";

const KIT_API = "https://api.kit.com/v4";

export async function POST(req: Request) {
  let email = "";
  let source = "website";

  try {
    const body = await req.json();
    email = String(body.email ?? "").trim();
    source = String(body.source ?? "website");
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.NEWSLETTER_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !formId) {
    console.error("Missing NEWSLETTER_API_KEY or KIT_FORM_ID");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const headers = {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": apiKey,
  };

  try {
    // 1) Create the subscriber (or find the existing one)
    const create = await fetch(`${KIT_API}/subscribers`, {
      method: "POST",
      headers,
      // New subscribers start "inactive" so Kit's double opt-in can confirm them.
      // For an existing subscriber Kit keeps the current state and returns it.
      body: JSON.stringify({ email_address: email, state: "inactive" }),
    });
    if (!create.ok) {
      console.error("Kit create subscriber failed", create.status, await create.text());
      return NextResponse.json({ error: "Could not subscribe" }, { status: 502 });
    }

    // Already confirmed? Do not send another confirmation email.
    const created = (await create.json().catch(() => null)) as
      | { subscriber?: { state?: string } }
      | null;
    if (created?.subscriber?.state === "active") {
      return NextResponse.json({ ok: true, status: "already_subscribed" });
    }

    // 2) Add to the form -> Kit sends the confirmation email (double opt-in)
    const addToForm = await fetch(`${KIT_API}/forms/${formId}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address: email }),
    });
    if (!addToForm.ok) {
      console.error("Kit add to form failed", addToForm.status, await addToForm.text());
      return NextResponse.json({ error: "Could not subscribe" }, { status: 502 });
    }

    console.log("newsletter_signup", source);
    return NextResponse.json({ ok: true, status: "pending_confirmation" });
  } catch (err) {
    console.error("Subscribe error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
