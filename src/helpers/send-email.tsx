import emailjs from "emailjs-com";
require("dotenv").config();
export default function sendEmail(e: any) {
  e.preventDefault();

  emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID || "",
    process.env.REACT_APP_TEMPLATE_ID || "",
    e.target,
    process.env.REACT_APP_PUBLIC_KEY || ""
  );
}

