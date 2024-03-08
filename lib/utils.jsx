

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getSizeName(selectedSize = string) {
  switch (selectedSize) {
    case "XS":
      return "Xs"
    case "S":
      return "S"
    case "M":
      return "M"
    case "L":
      return "L"
    case "XL":
      return "XL"
  }
}
