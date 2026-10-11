/** rupiah(849000) === "Rp849.000" */
export function rupiah(value: number): string {
  return `Rp${value.toLocaleString("id-ID")}`;
}
