// get project name
const allWorks = document.querySelectorAll(".index__work");
const worksById = {};
allWorks.forEach(work => {
    const id = work.id; // Get the id of the <li>
    if (id) {
        worksById[id] = work; // Add to the object with id as the key
    }
});

// get keywords in thoughts
const words = {};
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
const setupEventListener = (elementId, targetNumbers,highlightColor) => {
    const element = worksById[elementId];
    if (element) {
        element.addEventListener("mouseover", () => {
            highlightWords('add', targetNumbers,highlightColor);
        });

        element.addEventListener("mouseout", () => {
            highlightWords('remove', targetNumbers,highlightColor);
        });
    }
};

// Example usage:
setupEventListener("SitDown", [1, 4, 7, 9, 10, 11, 19, 20, 23, 26, 31, 34], "pink");  // You can change target numbers here
setupEventListener("IntoBirth", [1, 3, 6, 13, 14, 16, 17, 19, 20, 21, 22, 26, 31, 32], "orange");  // Customize target numbers for "FalseWindows"
setupEventListener("PHS", [1,3,5,6,11,19,20,23,26,30],"green");  // Customize target numbers for "FalseWindows"
setupEventListener("FalseWindows", [1,4,5,6,7,8,10,11,19,20,21,23,24,25,30],"cyan");  // Customize target numbers for "FalseWindows"

setupEventListener("CoupleOfSingles", [2,3,6,13,14,16,17,19,20,21,22,24,25,34], "pink");  // You can change target numbers here
setupEventListener("CoveredBridge", [2,4,5,6,8,10,12], "orange");  // Customize target numbers for "FalseWindows"
setupEventListener("TrilogyOfTrees", [1,2,3,9,10,11,19,28,29,33],"green");  // Customize target numbers for "FalseWindows"
setupEventListener("NovelOfTriviality", [1,4,5,7,8,10,11,19,28],"cyan");  // Customize target numbers for "FalseWindows"

setupEventListener("TheRiver", [2,4,5,7,8,10,11,20,23], "pink");  // You can change target numbers here
setupEventListener("FoldingBeijing", [2,4,5,6,8,10,11,20,23,27], "orange");  // Customize target numbers for "FalseWindows"
setupEventListener("FloodedTeaHouse", [2,3,5,6,8,10,12],"green");  // Customize target numbers for "FalseWindows"
// setupEventListener("NovelOfTriviality", [1,4,5,6,7,8,10,11,19,20,21,23,24,25,30],"cyan");  // Customize target numbers for "FalseWindows"