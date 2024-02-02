const button = document.querySelector('#theme-toggle');

const themes = {
    't-dark' : 't-light',
    't-light' : 't-dark',
}

const toggle_icon = {
    'fa-toggle-off' : 'fa-toggle-on',
    'fa-toggle-on' : 'fa-toggle-off',
}

if(button){
    button.addEventListener('click', event => {
        event.preventDefault();
        change_theme();
        toggle_btn();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        set_theme(savedTheme);
    }
});

function set_theme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function change_theme(){
    const currentTheme = document.body.dataset.theme;
    const newTheme = themes[currentTheme];
    document.body.setAttribute('data-theme', newTheme);
    set_theme(newTheme);
}

function toggle_btn(){
    var toggle = document.getElementById('toggle');
    const toggle_off = toggle.classList.item(1);
    const toggle_on = toggle_icon[toggle_off];
    toggle.classList.remove(toggle_off);
    toggle.classList.add(toggle_on);
}