const btnDarkkMode = document.querySelector('.dark-mode-btn')

// // Проверка темной темы в систем настройках
// if (localStorage.getItem(darkMode) === 'dark') {
//     btnDarkkMode.classList.add('dark-mode-btn--active');
//     document.body.classList.add('dark');
// }

// Проверка темы в локал сторлджк 
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newcolorScheme = event.matches ? "dark" : "light";
    alert('Change Theme')
    if (newcolorScheme === 'dark') {
        btnDarkkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', "light");
    }

})

btnDarkkMode.onclick = function () {
    btnDarkkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', "light");
    }
}