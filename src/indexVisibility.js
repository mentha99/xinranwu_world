document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section first
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Use a timeout to toggle visibility after scrolling
        setTimeout(() => {
            if (targetId === "index") {
                document.querySelector('.index__container').classList.remove('hidden');
            } else if (targetId === "lab") {
                document.querySelector('.index__container').classList.add('hidden');
            }
        }, 500); // Adjust timing to match the scroll duration
    });
});