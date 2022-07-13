export default function acronym(str) {
  let res = "";
  let arr = str.split(" ");
  res = arr.map((i) => i.charAt(0)).join("");
  return res;
}
