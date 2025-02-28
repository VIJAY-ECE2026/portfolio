import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const uploadDir = path.join(__dirname, 'uploads');
const upload = multer({ dest: uploadDir }); // Ensure 'uploads' directory exists

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // ✅ Keep this if needed
})

  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Define schema and model for credentials
const credentialSchema = new mongoose.Schema({
  user: String,
  pass: String,
});

const Credential = mongoose.model('Credential', credentialSchema, 'credentials');

// POST endpoint for contact form
app.post('/api/contact', upload.single('file'), async (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;

  try {
    // Fetch credentials from MongoDB
    const credentials = await Credential.findOne();
    if (!credentials) {
      console.error('Email credentials not found');
      return res.status(500).json({ error: 'Email credentials not found' });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: credentials.user,
        pass: credentials.pass,
      },
    });

    // Prepare email options
    const mailOptions = {
      from: email,
      to: 'vijaydurairaj2005@gmail.com', // Replace with your email
      subject: `Message from ${name}`,
      text: message,
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully!');
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the app for Vercel (required for serverless deployment)
export default app;
