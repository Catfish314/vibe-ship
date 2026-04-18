import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//Додамо щось особливе
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
