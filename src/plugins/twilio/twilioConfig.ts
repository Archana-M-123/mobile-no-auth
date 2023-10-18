import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

console.log(process.env.TWILIO_ACCOUNT_SID);
console.log(process.env.TWILIO_AUTH_TOKEN);

export const twilioClient = twilio(
  `${TWILIO_ACCOUNT_SID}`,
  `${TWILIO_AUTH_TOKEN}`,
);
