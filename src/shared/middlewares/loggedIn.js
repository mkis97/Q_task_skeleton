export default function loggedIn() {
  if (localStorage.getItem("q_login")) {
    return false;
  }
  return true;
}
