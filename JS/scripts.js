// Navbar toggle
const hamburger = document.querySelector('.hamburger i');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('bx-x');
    navigation.classList.toggle('show');
});

// Theme Toggle
const THEME_STORAGE_KEY = "theme";
const themeToggleIcon = document.querySelector('#theme-icon');
const getTheme = () => localStorage.getItem(THEME_STORAGE_KEY);
const setTheme = (theme) => localStorage.setItem(THEME_STORAGE_KEY, theme);

const loadTheme = () => {
    const savedTheme = getTheme();

    if (!savedTheme) setTheme('light');
    const theme = savedTheme || 'light';

    theme === 'light'
        ? document.body.classList.remove('dark_mode')
        : document.body.classList.add("dark_mode")
}
loadTheme();

const toggleTheme = () => {
    const savedTheme = getTheme();
    const nextTheme = savedTheme == 'light' ? 'dark' : 'light';

    switch (nextTheme){
        case 'light':
            setTheme('light');
            themeToggleIcon.classList.remove('bx-sun');
            themeToggleIcon.classList.add('bx-moon');
            document.body.classList.remove('dark_mode');
            break;
        case 'dark':
            setTheme('dark')
            themeToggleIcon.classList.remove('bx-moon');
            themeToggleIcon.classList.add('bx-sun');
            document.body.classList.add('dark_mode');
            break;
    }
}

themeToggleIcon.addEventListener('click', toggleTheme);

// Typewriter Effect
new Typed('.fname', {
    loop: false,
    backSpeed: 90,
    typeSpeed: 110,
    strings: ["Daniel"],
});

new Typed('.lname', {
    loop: false,
    typeSpeed: 80,
    backSpeed: 90,
    strings: ["Githiomi"],
});

// Scroll Reveal
const scroll_reveal = ScrollReveal({
    delay: 10,
    reset: true,
    duration: 2000,
    distance: '100px',
});

scroll_reveal.reveal('.home-content', { origin: 'left' });
scroll_reveal.reveal('.socials, .cv', { origin: 'right' });
scroll_reveal.reveal('.sectionHeader h2', { origin: 'top' });

// Change navbar accordiong to sections
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.navigation li a');

// Add a sticky navigation bar
window.onscroll = () => {
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