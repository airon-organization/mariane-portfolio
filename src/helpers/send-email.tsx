import { RefObject } from "react";

export default function sendEmail(form: RefObject<HTMLFormElement>) {
  if (!form.current) return;
  return null;
}

