import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Insert data into Supabase database
    const { error } = await supabase.from('contact_messages').insert([
      { name, email, subject, message },
    ]);

    if (error) {
      console.error("Error saving to database:", error);
      return res.status(500).json({ error: "Failed to save message" });
    }

    // Optionally, send email using Supabase Edge Functions or a service like SendGrid
    res.status(200).json({ message: "Message sent successfully!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
