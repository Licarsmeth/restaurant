export default function menuClick() {
  const content = document.getElementById("content");
  const description = document.createElement("div");

  description.textContent = "Menu";
  description.classList.add("description");
  content.appendChild(description);
}
