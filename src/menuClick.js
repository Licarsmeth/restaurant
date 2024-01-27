export default function menuClick() {
  const content = document.getElementById("content");
  const description = document.createElement('div');

description.textContent = 'menu';
content.appendChild(description);
}
