// Animation of Header Navigation Bar
const container = document.querySelector('.single_page');
const titleBox = document.querySelector('.title');

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
    }
    // Remove "visible" class when the element leaves the viewport
    else {
        header.classList.add('scroll');
        subheader.classList.add('appear');
    }
});

//Scroll Control between single and multi pages
document.addEventListener('DOMContentLoaded', () => {
    const singlePage = document.querySelector('.single_page');
    const multiPage = document.querySelector('.multi_page');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.target === multiPage && entry.isIntersecting) {
                    singlePage.classList.add('no-scroll');
                } else if (entry.target === multiPage && !entry.isIntersecting) {
                    singlePage.classList.remove('no-scroll');
                }
            });
        },
        { threshold: 0.01 } // Adjust threshold based on when you want to trigger
    );

    observer.observe(multiPage);
});


