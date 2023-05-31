import { InputHTMLAttributes } from "react";

export interface iInputValues extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string
}
