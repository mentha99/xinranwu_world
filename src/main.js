
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
const textWorks1 = document.getElementById("works-text1");
const textWorks2 = document.getElementById("works-text2");
const textThoughts1 = document.getElementById("thought-text1");
const textThoughts2 = document.getElementById("thought-text2");
const textAbout = document.getElementById("about-text");
const textAbout_height = textAbout.getBoundingClientRect().height - 16;
// console.log(textAbout_height);

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
var widthMaxWidth = window.matchMedia("(max-width: 800px)")

let widthSmallerThan800 = false;
function checkWidthSmllerThan800(event) {
    if (event.matches) {
        widthSmallerThan800 = true;
        // console.log("Viewport is 800px or narrower.");
    } else {
        // console.log("Viewport is wider than 800px.");
    }
}
const mediaQuery = window.matchMedia("(max-width: 800px)");
mediaQuery.addEventListener("change", checkWidthSmllerThan800);
checkWidthSmllerThan800(mediaQuery);

if (!widthSmallerThan800) {
    // for PC, could show list AND about at the same time
    linkAbout.addEventListener('click', (e) => {
        aboutShowOrNot = !aboutShowOrNot;
        // console.log("about is clicked");
        e.preventDefault();
        appearAboutAndList();
    });
    linkList.addEventListener('click', (e) => {
        listShowOrNot = !listShowOrNot;
        // console.log("list is clicked");
        e.preventDefault();
        // filterProjects('all');
        appearAboutAndList();
    });
} else {
    // for mobile, only show list OR about at the same time
    linkAbout.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("about is clicked");
        aboutShowOrNot = !aboutShowOrNot;
        if (aboutShowOrNot && listShowOrNot) {
            listShowOrNot = !listShowOrNot;
        }
        // filterProjects('all');
        appearAboutAndList();
    });
    linkList.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("list is clicked");
        listShowOrNot = !listShowOrNot;
        if (aboutShowOrNot && listShowOrNot) {
            aboutShowOrNot = !aboutShowOrNot;
        }
        // filterProjects('all');
        appearAboutAndList();
    });
}


function appearAboutAndList() {
    if (aboutShowOrNot && !listShowOrNot) {
        // windowList.classList.remove('down');
        // windowList.style.transform="translate(-50%, ${textAbout_height}px)";
        windowList.style.transform = "translate(-50%, 0)";

        windowAbout.style.opacity = "1";
        windowAbout.style.pointerEvents = "auto";
        windowList.style.opacity = "0";
        windowList.style.pointerEvents = "none";
        mainElement.classList.add('blur');

        textAbout.classList.add('appear');
        textThoughts1.classList.remove('appear');
        textThoughts2.classList.remove('appear');
        textWorks1.classList.remove('appear');
        textWorks2.classList.remove('appear');

        linkList.textContent = "view all projects";
        linkAbout.textContent = "hide about";
    }
    else if (!aboutShowOrNot && listShowOrNot) {
        // windowList.classList.remove('down');
        // windowList.style.transform="translate(-50%, ${textAbout_height}px)";
        windowList.style.transform = "translate(-50%, 0)";

        windowList.style.opacity = "1";
        windowList.style.pointerEvents = "auto";
        windowAbout.style.opacity = "0";
        windowAbout.style.pointerEvents = "none";
        mainElement.classList.add('blur');

        textThoughts1.classList.add('appear');
        textThoughts2.classList.add('appear');
        textWorks1.classList.add('appear');
        textWorks2.classList.add('appear');
        textAbout.classList.remove('appear');

        linkList.textContent = "hide all projects";
        linkAbout.textContent = "about";
    }
    else if (aboutShowOrNot && listShowOrNot) {
        // windowList.classList.add('down');
        windowList.style.transform = `translate(-50%, ${textAbout_height}px)`;
        // windowList.style.transform="translate(-50%, 0)";

        windowList.style.opacity = "1";
        windowList.style.pointerEvents = "auto";
        windowAbout.style.opacity = "1";
        // windowAbout.style.pointerEvents = "auto";
        mainElement.classList.add('blur');

        textAbout.classList.add('appear');
        textThoughts1.classList.add('appear');
        textThoughts2.classList.add('appear');
        textWorks1.classList.add('appear');
        textWorks2.classList.add('appear');


        linkList.textContent = "hide all projects";
        linkAbout.textContent = "hide about";
    }
    else if (!aboutShowOrNot && !listShowOrNot) {
        // windowList.classList.remove('down');
        // windowList.style.transform="translate(-50%, ${textAbout_height}px)";
        windowList.style.transform = "translate(-50%, 0)";
        mainElement.classList.remove('blur');

        textAbout.classList.remove('appear');
        textThoughts1.classList.remove('appear');
        textThoughts2.classList.remove('appear');
        textWorks1.classList.remove('appear');
        textWorks2.classList.remove('appear');

        linkList.textContent = "view all projects";
        linkAbout.textContent = "about";

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
setupEventListener("BlackBoxOfInterlock", [1, 4, 5, 6, 7, 8, 10, 11, 27, 28], "cyan");


// 003 * * * * * * * * * * Projects Filter * * * * * * * * * * 
// Define the categories for each project
const projectCategories = {
    SitDown: ['art', 'game', 'film', 'immersive', '3dscan', 'participatory', 'wip'],
    IntoBirth: ['art', 'game', 'immersive', '3dscan', 'participatory'],
    PHS: ['art', 'film', '3dscan', 'commission', 'wip'],
    FalseWindows: ['art', 'film', '3dscan', 'architecture', 'participatory'],
    CoupleOfSingles: ['art', 'design', 'game', 'immersive', '3dscan', 'architecture', 'participatory', 'wip'],
    CoveredBridge: ['design', 'architecture', 'participatory', 'commission'],
    TrilogyOfTrees: ['art', 'photography'],
    NovelOfTriviality: ['art', 'photography', 'architecture', 'participatory'],
    TheRiver: ['design', 'architecture'],
    FoldingBeijing: ['art', 'design', 'architecture', 'commission'],
    FloodedTeaHouse: ['art', 'design', 'architecture'],
    BlackBoxOfInterlock: ['art', 'design', 'architecture', 'participatory'],
    // Add more projects and their categories here
};

// Function to filter projects
function filterProjects(category) {
    const projects = document.querySelectorAll('.index__work');

    projects.forEach(project => {
        const projectId = project.id;

        if (category === 'all' || (projectCategories[projectId] && projectCategories[projectId].includes(category))) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Add click event listeners to category buttons
document.querySelectorAll('.index__classButton').forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        document.querySelectorAll('.index__classButton').forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        button.classList.add('selected');

        // Filter projects based on the selected category
        const category = button.id.replace('class-', '');
        filterProjects(category);
    });
});

// Initially show all projects
filterProjects('all');

// 004 * * * * * * * * * * Technical Archive Hover * * * * * * * * * * 
const IntoBirth_log = document.getElementById("IntoBirth-log");
const FalseWindows_log = document.getElementById("FalseWindows-log");
const IntoBirth = document.getElementById("IntoBirth");
const FalseWindows = document.getElementById("FalseWindows");

function logToProjectListerner(hoverProject, hightlightProject, color){
    if (hoverProject) {
        hoverProject.addEventListener("mouseover", () => {
            hightlightProject.classList.add('logHighlight');
        });

        hoverProject.addEventListener("mouseout", () => {
            hightlightProject.classList.remove('logHighlight');
        });
    }
}


logToProjectListerner(IntoBirth_log, IntoBirth);
logToProjectListerner(FalseWindows_log, FalseWindows);
