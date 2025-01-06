const footerIndex = document.getElementById("footer-index");
const labSection = document.getElementById("lab");

window.addEventListener("scroll", () => {
    const labPosition = labSection.getBoundingClientRect();
    
    // Check if the lab section is in the viewport
    if (labPosition.top <= window.innerHeight && labPosition.bottom >= 0) {
        console.log("lab is here")
        footerIndex.style.visibility = "visible"; // Hide the second footer
        footerIndex.classList.add = "hide"; 
    } else {
        footerIndex.style.visibility = "hidden"; // Show the second footer
    }
});