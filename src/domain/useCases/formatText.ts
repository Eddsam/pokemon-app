export function capitalizeFirstLetter(text: string) {
  try {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
  } catch (e) {
    return text;
  }
}
