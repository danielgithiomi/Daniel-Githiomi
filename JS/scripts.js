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

// Typewriter Effect
new Typed('.fname', {
    strings: ["Daniel"],
    typeSpeed: 110,
    backSpeed: 90,
    loop: false
});

new Typed('.lname', {
    strings: ["Githiomi"],
    typeSpeed: 110,
    backSpeed: 90,
    loop: false
});


// Scroll Reveal
const scroll_reveal = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 10
});

scroll_reveal.reveal('.sectionHeader h2', { origin: 'top' });
scroll_reveal.reveal('.home-content', { origin: 'left' });
scroll_reveal.reveal('.socials, .cv', { origin: 'right' });

// Change navbar accordiong to sections
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.navigation li a');

// Add a sticky navigation bar
window.onscroll = () => {

    // Add a sticky navigation bar
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 50);

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

    let first_name_element = document.getElementById('first_name');
    let last_name_element = document.getElementById('last_name');
    let email_element = document.getElementById('email_address');
    let user_message_element = document.getElementById('user_message');

    let first_name = first_name_element.value;
    let last_name = last_name_element.value;
    let email = email_element.value;

    let username = first_name + ' ' + last_name;

    if (first_name !== '' || last_name !== '') {
        alert(`Hello ${username}, \nI appreciate you getting in touch with me. \nI will reach out via ${email} as soon as I can.\n\nIf very urgent, please contact me at: danielgithiomi@gmail.com`)
    }

    // Clear the inputs
    first_name_element.value = '';
    last_name_element.value = '';
    email_element.value = '';
    user_message_element.value = '';

    e.preventDefault();

});