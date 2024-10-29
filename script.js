document.addEventListener("DOMContentLoaded", () => {
    const typing = document.querySelector('.typing');
    const typingP = document.querySelector('.typing-p');
    let text = "Hi, I'm Princy Dhanciya!";
    let description = "I'm a Web Developer, Designer,programmer";
    let i = 0, j = 0;
  
    function typeText() {
      if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 150);
      } else if (j < description.length) {
        typingP.innerHTML += description.charAt(j);
        j++;
        setTimeout(typeText, 150);
      }
    }
  
    typeText();
  });
  