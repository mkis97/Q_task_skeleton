export default function getUser(usersArray, userId) {
  if (!usersArray.length || !userId) return "";
  return usersArray.find((user) => user.id === userId)?.name;
}
