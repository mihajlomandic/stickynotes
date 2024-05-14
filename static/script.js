let r = document.querySelector(':root');
let rs = getComputedStyle(r);
let bg_color = rs.getPropertyValue('--off-white');

let darkmode = localStorage.getItem('darkmode');


if(darkmode === null){

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('darkmode', 'true');
        darkmode = 'true';
    } else {
        localStorage.setItem('darkmode', 'false');
        darkmode = 'false';
    }

}

if(darkmode === 'true'){
    r.style.setProperty('--off-white', '#1C1C1B');
    r.style.setProperty('--title', '#FFFFFF');
} else {
    r.style.setProperty('--off-white', '#EEEDE6');
    r.style.setProperty('--title', '#000000');
}


document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    //to dark mode
    if(darkmode === 'false'){
        r.style.setProperty('--off-white', '#1C1C1B');
        r.style.setProperty('--title', '#FFFFFF');
        localStorage.setItem('darkmode', 'true');
        darkmode = 'true';
    }
    // to light mode 
    else if(darkmode === 'true'){
        r.style.setProperty('--off-white', '#EEEDE6');
        r.style.setProperty('--title', '#000000');
        localStorage.setItem('darkmode', 'false');
        darkmode = 'false';
    }
})