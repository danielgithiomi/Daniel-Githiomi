// Change navbar accordiong to sections
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.navigation li a');

// Add a sticky navigation bar
window.onscroll = () => {

    // Change navbar active link
    sections.forEach(section => {
        let top = window.scrollY;

        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (top >= offset && top < (offset + height)) {

            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navigation li a[href*=' + sectionId + ']').classList.add('active');
            });

        };
    });

    // Add a sticky navigation bar
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}