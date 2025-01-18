// 001 * * * * * * * * * * Header Animation * * * * * * * * * * 
const container = document.querySelector('.single_page');
const titleBox = document.querySelector('.title');

//first page of content
const novelContent = document.getElementById('project-content');
const novelPreview = document.getElementById('project-preview');
const footerLog = document.getElementById('footer-log');

container.addEventListener('scroll', () => {
    // console.log('Scrolling...');
    const header = document.querySelector('.header');
    const subheader = document.querySelector('.subheader');
    const viewportHeight = window.innerHeight;
    const rect = titleBox.getBoundingClientRect();

    // Add "visible" class when the element is in the viewport
    if (rect.top < viewportHeight && rect.bottom > 0) {
        header.classList.remove('scroll');
        subheader.classList.remove('appear');
        if(footerLog){
            footerLog.classList.remove('appear');
        }
    }
    // Remove "visible" class when the element leaves the viewport
    else {
        header.classList.add('scroll');
        subheader.classList.add('appear');
        if(footerLog){
            footerLog.classList.add('appear');
        }
    }

    const contentRect = novelContent.getBoundingClientRect();
    if (contentRect.top <= viewportHeight / 2) {
        novelPreview.classList.add('blur'); // Add blur effect
    } else {
        novelPreview.classList.remove('blur'); // Remove blur effect
    }

});

//Scroll Control between single and multi pages
// document.addEventListener('DOMContentLoaded', () => {
//     const singlePage = document.querySelector('.single_page');
//     const multiPage = document.querySelector('.multi_page');

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach(entry => {
//                 if (entry.target === multiPage && entry.isIntersecting) {
//                     singlePage.classList.add('no-scroll');
//                 } else if (entry.target === multiPage && !entry.isIntersecting) {
//                     singlePage.classList.remove('no-scroll');
//                 }
//             });
//         },
//         { threshold: 0.01 } // Adjust threshold based on when you want to trigger
//     );
//     observer.observe(multiPage);
// });


// 002 * * * * * * * * * * Link to Technical Process * * * * * * * * * * 
// function setupTechnicalInteraction() {
//     const linkTechnical = document.getElementById("link-art-tech");
//     const pagesTechAll = document.getElementById("page-techAll");
//     const pageTechFirst = document.getElementById("page-techFirst");

//     // Array of elements to check
//     const elements = {
//         "link-technical": linkTechnical,
//         "pages-techAll": pagesTechAll,
//         "page-techFirst": pageTechFirst
//     };

//     // Check for missing elements
//     let missingElements = [];
//     for (const [id, element] of Object.entries(elements)) {
//         if (!element) {
//             missingElements.push(id);
//         }
//     }

//     if (missingElements.length > 0) {
//         console.error(`Missing elements: ${missingElements.join(", ")}`);
//         return;
//     }

//     // Set up interaction if all elements exist
//     linkTechnical.addEventListener('click', (e) => {
//         e.preventDefault();

//         // Show the technical pages
//         pagesTechAll.style.display = "block";

//         // Scroll smoothly to the first technical page
//         pageTechFirst.scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// }

// // Start initialization when DOM is loaded
// document.addEventListener("DOMContentLoaded", setupTechnicalInteraction);