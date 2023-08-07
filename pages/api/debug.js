export default function handler(req, res) {
    console.log("GOOGLE_ID:", process.env.NEXT_PUBLIC_GOOGLE_ID);
    console.log("GOOGLE_SECRET:", process.env.NEXT_PUBLIC_GOOGLE_SECRET);
  
    res.status(200).send("Sprawdzono wartości .env");
  }
  