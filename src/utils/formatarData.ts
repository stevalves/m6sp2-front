export const getDate = (data: string) => {
  const date = new Date(data);
  const day =
    String(date.getDate()).length > 1 ? date.getDate() : "0" + date.getDate();
  const hours =
    String(date.getHours()).length > 1
      ? date.getHours()
      : "0" + date.getHours();
  const minutes =
    String(date.getMinutes()).length > 1
      ? date.getMinutes()
      : "0" + date.getMinutes();
  const month =
    String(date.getMonth()).length > 1
      ? date.getMonth()
      : "0" + date.getMonth();
  return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
};