export const pad = (n: number) => String(n).padStart(2, '0');
export const tel = (p: string) => 'tel:' + p.replace(/\s/g, '');
