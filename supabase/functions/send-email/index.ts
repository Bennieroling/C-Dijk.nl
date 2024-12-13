import { serve } from "https://deno.land/x/sift/mod.ts";

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  console.log("Request received:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request for CORS");
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "POST, OPTIONS", // Allow specific methods
        "Access-Control-Allow-Headers": "Content-Type", // Allow specific headers
      },
    });
  }

  // Ensure the method is POST
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    // Parse the request body
    const { name, email, subject, message }: EmailPayload = await req.json();
    console.log("Payload received:", { name, email, subject, message });

    const sendgridApiKey = Deno.env.get("SENDGRID_API_KEY");
    if (!sendgridApiKey) {
      console.error("SendGrid API key is missing");
      return new Response("SendGrid API key is missing", { status: 500 });
    }

    // Send the email using SendGrid
    const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sendgridApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "recipient@example.com" }], // Replace with your recipient email
            subject,
          },
        ],
        from: { email: "verified-sender@yourdomain.com", name: "Your Site" }, // Replace with your sender email
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        ],
      }),
    });

    if (!sendgridResponse.ok) {
      const error = await sendgridResponse.text();
      console.error("Failed to send email:", error);
      return new Response(`Failed to send email: ${error}`, {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    console.log("Email sent successfully");
    return new Response("Email sent successfully", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response("An error occurred", {
      status: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }
});
