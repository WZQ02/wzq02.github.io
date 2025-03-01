function router_reset() {
    window.history.pushState({page:1},"","/")
}
window.addEventListener("load",() => {
    // hash compatibility
    switch (window.location.hash) {
        case "#/dl":
            window.history.pushState({page:1},"","/fs")
            break
        case "#/tv":
            window.history.pushState({page:1},"","/proj")
            break
        case "#/demos":
            window.history.pushState({page:1},"","/demo")
            break
        case "#/about":
            window.history.pushState({page:1},"","/about")
            break
    }
    ps_check()
})
window.addEventListener("popstate",() => {
    if (window.location.pathname == "/") {
        destroyxmlpage()
    }
    ps_check()
})

function ps_check() {
    switch (window.location.pathname) {
        case "/blog":
        case "/blog/":
            p2l_sc("blog","createbloglinks()")
            break
        case "/fs":
        case "/fs/":
            p2l_sc("fs")
            break
        case "/proj":
        case "/proj/":
            p2l_sc("proj")
            break
        case "/demo":
        case "/demo/":
            p2l_sc("demo")
            break
        case "/about":
        case "/about/":
            p2l_sc("about","about_printver()")
            break
    }
}