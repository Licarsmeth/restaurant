export default function contactUs() {
    const content = document.getElementById("content");
    const description = document.createElement('div');
  
  description.textContent = 'Contact info';
  description.classList.add('description');
  content.appendChild(description);
  }