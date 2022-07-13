export default function auth() {
  if (!localStorage.getItem("q_login")) {
    return false;
  }
  return true;
}
