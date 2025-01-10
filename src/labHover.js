const areaNovel = document.getElementById('area-NovelSVG');
const infoNovel = document.getElementById('info-Novel');
const areaFalseWindow = document.getElementById('area-FalseWindowsSVG');
const infoFalseWindow = document.getElementById('info-FalseWindows');
const areaIntoBirth = document.getElementById('area-IntoBirthSVG');
const infoIntoBirth = document.getElementById('info-IntoBirth');
const areaFoldingBeijing = document.getElementById('area-FoldingBeijingSVG');
const infoFoldingBeijing = document.getElementById('info-FoldingBeijing');
const labHeader = document.getElementById('lab-header');

infoAppear(areaNovel, infoNovel, "right");
infoAppear(areaFalseWindow, infoFalseWindow, "left");
infoAppear(areaIntoBirth, infoIntoBirth, "right");
infoAppear(areaFoldingBeijing, infoFoldingBeijing, "left");



function infoAppear(itemArea, textElement, direction) {
    if (direction === "right") { // Use strict equality
        itemArea.addEventListener('mouseenter', () => {
            textElement.style.opacity = "1";
            textElement.style.transform = "translateX(80%)";
        });
        itemArea.addEventListener('mouseleave', () => {
            textElement.style.opacity = "0";
            textElement.style.transform = "translateX(0)";
        });
    } else { // Handles "left"
        itemArea.addEventListener('mouseenter', () => {
            textElement.style.opacity = "1";
            textElement.style.transform = "translateX(-80%)";
        });
        itemArea.addEventListener('mouseleave', () => {
            textElement.style.opacity = "0";
            textElement.style.transform = "translateX(0)";
        });
    }
}

// Select elements
const heroContainer = document.querySelector('.hero__container');
// const heroEmpty = document.querySelector('.hero__empty');
// const heroBackground = document.querySelector('.hero__background');

const heroWindow = document.getElementById('window');
const heroAllArea = document.getElementById('hero-allArea');
const heroScrollArea = document.getElementById('hero-scrollArea');
const heroEmptyArea = document.getElementById('hero-emptyArea');
const linkHeroLab = document.getElementById('link-hero-lab');
const linkLabInfo = document.getElementById('link-lab-info');

// Add click listener for 'link-hero-lab'
linkHeroLab.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Scroll the container smoothly
    heroContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'end' // Align the bottom of the container with the bottom of the viewport
    });

    // Toggle link visibility
    linkHeroLab.style.display = 'none';
    linkLabIndex.style.display = 'block';
});

function isHeroEmptyNearTop() {
    const rect = heroEmptyArea.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    // Check if the top of heroEmpty is less than 20vh from the top of the screen
    console.log(rect.top);
    console.log("viewportHeight", viewportHeight * 0.2);
    return rect.top <= viewportHeight * 1.4;
}

heroWindow.addEventListener('scroll', () => {
    console.log('scrolling');
    // Example usage
    if (isHeroEmptyNearTop()) {
        console.log('hero__empty is less than 20vh from the top of the screen');
        linkHeroLab.style.display = 'none';
        linkLabInfo.style.display = 'block';
        labHeader.style.display = 'block';
    } else {
        // If not at the bottom, ensure 'link-hero-lab' is shown
        linkHeroLab.style.display = 'block';
        linkLabInfo.style.display = 'none';
        labHeader.style.display = 'none';
    }
});

const labInfoElementsRight = document.querySelectorAll('.lab__info.right'); // Elements with class 'lab__info right'
const labInfoElementsLeft = document.querySelectorAll('.lab__info.left'); // Elements with class 'lab__info left'

let isVisible = false; // State to track visibility

linkLabInfo.addEventListener('click', () => {
    isVisible = !isVisible; // Toggle the state
    // Handle elements on the right
    labInfoElementsRight.forEach(element => {
        element.style.opacity = isVisible ? '1' : '0'; // Set opacity
        element.style.transform = isVisible ? 'translateX(80%)' : 'translateX(0%)'; // Set transform
        // element.style.transition = 'opacity 0.3s, transform 0.3s'; // Smooth transitions
    });

    // Handle elements on the left
    labInfoElementsLeft.forEach(element => {
        element.style.opacity = isVisible ? '1' : '0'; // Set opacity
        element.style.transform = isVisible ? 'translateX(-80%)' : 'translateX(0%)'; // Set transform
        // element.style.transition = 'opacity 0.3s, transform 0.3s'; // Smooth transitions
    });
});
// heroAllArea.addEventListener('scroll', () => {
//     console.log('scrolling');
//     // Example usage
//     if (isHeroEmptyNearTop()) {
//         console.log('hero__empty is less than 20vh from the top of the screen');
//         linkHeroLab.style.display = 'none';
//         linkLabIndex.style.display = 'block';
//     } else {
//         // If not at the bottom, ensure 'link-hero-lab' is shown
//         linkHeroLab.style.display = 'block';
//         linkLabIndex.style.display = 'none';
//     }
// });

// heroScrollArea.addEventListener('scroll', () => {
//     console.log('scrolling');
//     // Example usage
//     if (isHeroEmptyNearTop()) {
//         console.log('hero__empty is less than 20vh from the top of the screen');
//         linkHeroLab.style.display = 'none';
//         linkLabIndex.style.display = 'block';
//     } else {
//         // If not at the bottom, ensure 'link-hero-lab' is shown
//         linkHeroLab.style.display = 'block';
//         linkLabIndex.style.display = 'none';
//     }
// });


// // Add scroll listener for manual scroll
// heroContainer.addEventListener('scroll', () => {
//     const scrollTop = heroContainer.scrollTop; // How much has been scrolled
//     const scrollHeight = heroContainer.scrollHeight; // Total scrollable height
//     const clientHeight = heroContainer.clientHeight; // Visible height of the container

//     // Check if scrolled to the bottom
//     if (scrollTop + clientHeight >= scrollHeight - 10) {
//         // Hide 'link-hero-lab' and show 'link-lab-index'
//         linkHeroLab.style.display = 'none';
//         linkLabIndex.style.display = 'inline';
//     } else {
//         // If not at the bottom, ensure 'link-hero-lab' is shown
//         linkHeroLab.style.display = 'inline';
//         linkLabIndex.style.display = 'none';
//     }
// });
