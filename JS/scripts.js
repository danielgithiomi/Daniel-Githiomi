// Navbar toggle
const hamburger = document.querySelector('.hamburger i');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('bx-x');
    navigation.classList.toggle('show');

});

// Theme Toggle
let darkModeIcon = document.querySelector('#theme-icon');

darkModeIcon.addEventListener('click', () => {

    darkModeIcon.classList.toggle('bx-sun');
    
    document.body.classList.toggle('dark_mode');
});

// Change navbar accordiong to sections
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.navigation li a');

// Add a sticky navigation bar
window.onscroll = () => {

    // Add a sticky navigation bar
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // To remove navbar icon on select and scroll
    hamburger.classList.remove('bx-x');
    navigation.classList.remove('show');

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

}

// Motify the user that the message has been sent
const submit_btn = document.getElementById('form_submit_btn');

submit_btn.addEventListener('click', (e) => {

    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let username = first_name + ' ' + last_name;

    if (first_name !== '' || last_name !== '') {
        alert(`Hello ${username}, \nWe are grateful for getting in touch with us. \nWe will get back to you as soon as we can.`)
    }
    
});