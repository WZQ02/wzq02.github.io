window.addEventListener('DOMContentLoaded',onhashchange)
window.addEventListener('hashchange',onhashchange)

function tosec(sect) {
    if (sect) {
        if (document.getElementById("page2").getAttribute('class') == "pagedisplay") {
            displaysec(sect);
        } else {
            scrolltopage2();
            displaysec(sect);
        }
    } else {
        if (document.getElementById("page2").getAttribute('class') == "pagedisplay") {
            scrolltopage1();
        }
    }
}

function onhashchange() {
    switch (location.hash) {
        case '#/':
        case '':
        case '#/main':
            tosec();
            break;
        case '#/blog':
            tosec(section1);
            break;
        case '#/filsvr':
            tosec(section2);
            break;
        case '#/tv':
            tosec(section3);
            break;
        case '#/demos':
            tosec(section4);
            break;
        case '#/dl':
            tosec(section5);
            break;
        case '#/about':
            tosec(section6);
            break;
        default:
            if (location.hash.indexOf('#/read/') != -1) {
                createmdprompt(location.hash.slice(7));
            }
        break;
    }
}