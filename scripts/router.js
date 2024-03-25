window.addEventListener('load',onhashchange)
window.addEventListener('hashchange',onhashchange)

var rp = ['main','blog','filsvr','tv','demos','dl','about']

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
        case '#/'+rp[0]:
            tosec();
            break;
        case '#/'+rp[1]:
            tosec(section1);
            break;
        case '#/'+rp[2]:
            tosec(section2);
            break;
        case '#/'+rp[3]:
            tosec(section3);
            break;
        case '#/'+rp[4]:
            tosec(section4);
            break;
        case '#/'+rp[5]:
            tosec(section5);
            break;
        case '#/'+rp[6]:
            tosec(section6);
            break;
        default:
            if (location.hash.indexOf('#/read/') != -1) {
                createmdprompt(location.hash.slice(7));
            }
        break;
    }
}