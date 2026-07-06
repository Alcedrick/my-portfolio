import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // use your verified domain in prod
      to: "alcedrickgarcia@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}