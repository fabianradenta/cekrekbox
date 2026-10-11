import { contact } from "@/content/site";

// rupiah dipisah ke format.ts agar site.ts bisa memakainya tanpa circular import.
export { rupiah } from "./format";

export function waLink(message: string = contact.defaultMessage): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
