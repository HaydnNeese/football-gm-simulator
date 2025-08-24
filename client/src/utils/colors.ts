export function getContrastTextColor(hex: string): string {
  // Convert hex to RGB
  const cleanedHex = hex.replace('#', '');
  const bigint = parseInt(cleanedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate luminance
  const [lr, lg, lb] = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const luminance = 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;

  // Return black or white text
  return luminance > 0.179 ? '#000000' : '#FFFFFF';
}