import emailjs from "emailjs-com";
import { RefObject } from "react";

export default function sendEmail(form: RefObject<HTMLFormElement>) {
  if (!form.current) return;
  return emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID || "",
    process.env.REACT_APP_TEMPLATE_ID || "",
    form.current,
    process.env.REACT_APP_PUBLIC_KEY || ""
  );
}

