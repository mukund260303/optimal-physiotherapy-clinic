import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      patient_name,
      phone,
      service,
      date,
      time,
    } = await req.json();

    const data = await resend.emails.send({
      from: "Optimal Physiotherapy <onboarding@resend.dev>",
      to: ["optimalphysiotherapyclinic@gmail.com"], // <-- apna Gmail yaha likhna
      subject: "🩺 New Appointment Booking",
      html: `
        <h2>New Appointment Received</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><b>Patient</b></td>
            <td>${patient_name}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Service</b></td>
            <td>${service}</td>
          </tr>

          <tr>
            <td><b>Date</b></td>
            <td>${date}</td>
          </tr>

          <tr>
            <td><b>Time</b></td>
            <td>${time}</td>
          </tr>
        </table>

        <br>

        <h3>Please login to Admin Panel to confirm the booking.</h3>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}