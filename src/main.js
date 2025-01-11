
// import '../styles/modern-normalize.css'
// import '../styles/style.css'


// 001 * * * * * * * * * * About & List Appearance * * * * * * * * * * 
// links
const linkList = document.getElementById("link-list");
const linkAbout = document.getElementById("link-about");

// windows
const mainElement = document.querySelector('main');
const windowList = document.getElementById("list-window");
const windowAbout = document.getElementById("about-window");

// text boxs with .U_bgWhiteGradient
// const BGWhiteGradient = document.querySelectorAll('.U_bgWhiteGradient');
const textWorks = document.getElementById("works-text");
const textThoughts1 = document.getElementById("thought-text1");
const textThoughts2 = document.getElementById("thought-text2");
const textAbout = document.getElementById("about-text");

// nav location #
const labSection = document.getElementById("lab");

// other
const footerIndex = document.getElementById("footer-index");


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

let listShowOrNot = false;
let aboutShowOrNot = false;

linkAbout.addEventListener('click', (e) => {
    aboutShowOrNot = !aboutShowOrNot;
    console.log("about is clicked");
    e.preventDefault();
    appearAboutAndList();

});
linkList.addEventListener('click', (e) => {
    listShowOrNot = !listShowOrNot;
    console.log("list is clicked");
    e.preventDefault();
    appearAboutAndList();

});

function appearAboutAndList() {
    if (aboutShowOrNot && !listShowOrNot) {
        windowList.classList.remove('down');
        windowAbout.style.opacity = "1";
        windowAbout.style.pointerEvents = "auto";
        windowList.style.opacity = "0";
        windowList.style.pointerEvents = "none";
        mainElement.classList.add('blur');

        textAbout.classList.add('appear');
        textThoughts1.classList.remove('appear');
        textThoughts2.classList.remove('appear');
        textWorks.classList.remove('appear');

        linkList.textContent = "view all projects";
    }
    else if (!aboutShowOrNot && listShowOrNot) {
        windowList.classList.remove('down');
        windowList.style.opacity = "1";
        windowList.style.pointerEvents = "auto";
        windowAbout.style.opacity = "0";
        windowAbout.style.pointerEvents = "none";
        mainElement.classList.add('blur');

        textThoughts1.classList.add('appear');
        textThoughts2.classList.add('appear');
        textWorks.classList.add('appear');
        textAbout.classList.remove('appear');

        linkList.textContent = "hide all projects";
    }
    else if (aboutShowOrNot && listShowOrNot) {
        windowList.classList.add('down');
        windowList.style.opacity = "1";
        windowList.style.pointerEvents = "auto";
        windowAbout.style.opacity = "1";
        windowAbout.style.pointerEvents = "auto";
        mainElement.classList.add('blur');

        textAbout.classList.add('appear');
        textThoughts1.classList.add('appear');
        textThoughts2.classList.add('appear');
        textWorks.classList.add('appear');

        linkList.textContent = "view all projects";
    }
    else if (!aboutShowOrNot && !listShowOrNot) {
        windowList.classList.remove('down');
        mainElement.classList.remove('blur');

        textAbout.classList.remove('appear');
        textThoughts1.classList.remove('appear');
        textThoughts2.classList.remove('appear');
        textWorks.classList.remove('appear');

        linkList.textContent = "hide all projects";

        setTimeout(() => {
            windowList.style.opacity = "0";
            windowList.style.pointerEvents = "none";
            windowAbout.style.opacity = "0";
            windowAbout.style.pointerEvents = "none";
        }, 500);
    }
}


// 002 * * * * * * * * * * Projects Hover Style * * * * * * * * * * 
// get project name
const allWorks = document.querySelectorAll(".index__work");
const worksById = {};
const words = {};

allWorks.forEach(work => {
    const id = work.id; // Get the id of the <li>
    if (id) {
        worksById[id] = work; // Add to the object with id as the key
    }
});

// get keywords in thoughts
for (let i = 1; i <= 35; i++) {
    words[`word_${i}`] = document.getElementById(`word_${i}`);
}

// function for highlight keywords when hovering
const highlightWords = (action, targetNumbers, highlightColor) => {
    targetNumbers.forEach(i => {
        if (action === 'add') {
            words[`word_${i}`].classList.add(highlightColor);
        } else if (action === 'remove') {
            words[`word_${i}`].classList.remove(highlightColor);
        }
    });
};
const setupEventListener = (elementId, targetNumbers, highlightColor) => {
    const element = worksById[elementId];
    if (element) {
        element.addEventListener("mouseover", () => {
            highlightWords('add', targetNumbers, highlightColor);
        });

        element.addEventListener("mouseout", () => {
            highlightWords('remove', targetNumbers, highlightColor);
        });
    }
};

// Example usage:
setupEventListener("SitDown", [1, 4, 7, 9, 10, 11, 19, 20, 23, 26, 31, 34], "pink");  // You can change target numbers here
setupEventListener("IntoBirth", [1, 3, 6, 13, 14, 16, 17, 19, 20, 21, 22, 26, 31, 32], "orange");  // Customize target numbers for "FalseWindows"
setupEventListener("PHS", [1, 3, 5, 6, 11, 19, 20, 23, 26, 30], "green");  // Customize target numbers for "FalseWindows"
setupEventListener("FalseWindows", [1, 4, 5, 6, 7, 8, 10, 11, 19, 20, 21, 23, 24, 25, 30], "cyan");  // Customize target numbers for "FalseWindows"

setupEventListener("CoupleOfSingles", [2, 3, 6, 13, 14, 16, 17, 19, 20, 21, 22, 24, 25, 34], "pink");  // You can change target numbers here
setupEventListener("CoveredBridge", [2, 4, 5, 6, 8, 10, 12], "orange");  // Customize target numbers for "FalseWindows"
setupEventListener("TrilogyOfTrees", [1, 2, 3, 9, 10, 11, 19, 28, 29, 33], "green");  // Customize target numbers for "FalseWindows"
setupEventListener("NovelOfTriviality", [1, 4, 5, 7, 8, 10, 11, 19, 28], "cyan");  // Customize target numbers for "FalseWindows"

setupEventListener("TheRiver", [2, 4, 5, 7, 8, 10, 11, 20, 23], "pink");  // You can change target numbers here
setupEventListener("FoldingBeijing", [2, 4, 5, 6, 8, 10, 11, 20, 23, 27], "orange");  // Customize target numbers for "FalseWindows"
setupEventListener("FloodedTeaHouse", [2, 3, 5, 6, 8, 10, 12], "green");  // Customize target numbers for "FalseWindows"
// setupEventListener("NovelOfTriviality", [1,4,5,6,7,8,10,11,19,20,21,23,24,25,30],"cyan");  // Customize target numbers for "FalseWindows"