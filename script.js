// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

const buttons = document.querySelectorAll("main button");  
buttons.forEach((button) => {  
     button.addEventListener("pointerenter", handleMouseEnter);  
     button.addEventListener("pointerleave", handleMouseLeave);  
});  
document.body.addEventListener("pointermove", updateCursorPosition);  
document.body.addEventListener("pointerdown", () => {  
     gsap.to(cursorInner, 0.15, {  
          scale: 2,  
     });  
});  
document.body.addEventListener("pointerup", () => {  
     gsap.to(cursorInner, 0.15, {  
          scale: 1,  
     });  
});  
function updateCursorPosition(e) {  
     mouse.x = e.pageX;  
     mouse.y = e.pageY;  
}  
function updateCursor() {  
     gsap.set(cursorInner, {  
          x: mouse.x,  
          y: mouse.y,  
     });  
     if (!isStuck) {  
          gsap.to(cursorOuter, {  
               duration: 0.15,  
               x: mouse.x - cursorOuterOriginalState.width/2,  
               y: mouse.y - cursorOuterOriginalState.height/2,  
          });  
     }  
     requestAnimationFrame(updateCursor);  
}  
updateCursor();  
function handleMouseEnter(e) {  
     isStuck = true;  
     const targetBox = e.currentTarget.getBoundingClientRect();  
     gsap.to(cursorOuter, 0.2, {  
          x: targetBox.left,   
          y: targetBox.top + scrollHeight,  
          width: targetBox.width,  
          height: targetBox.width,  
          borderRadius: 0,  
          backgroundColor: "rgba(255, 255, 255, 0.1)",  
     });  
}  
function handleMouseLeave(e) {  
     isStuck = false;  
     gsap.to(cursorOuter, 0.2, {  
          width: cursorOuterOriginalState.width,  
          height: cursorOuterOriginalState.width,  
          borderRadius: "50%",  
          backgroundColor: "transparent",  
     });  
}