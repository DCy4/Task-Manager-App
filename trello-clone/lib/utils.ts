import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// shadcn - enables us to safely combine tailwaind classes, specifically dynamic TW classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
