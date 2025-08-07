function router_reset() {
    window.history.pushState({page:1},"","/")
    title_update()
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
    switch (window.location.pathname.slice(0,3)) {
        case "/bl":
            blog_cut_check()
            p2l_sc("blog","createbloglinks()")
            break
        case "/fs":
            p2l_sc("fs","sche_init()")
            break
        case "/pr":
            p2l_sc("proj","sche_init()")
            break
        case "/de":
            p2l_sc("demo","sche_init()")
            break
        case "/ab":
            p2l_sc("about","about_printver()")
            break
    }
    title_update()
}

function blog_cut_check() {
    let blog_path = window.location.pathname.slice(6)
    if (blog_path) {
        createmdwindow(blog_path,0,null,null,1)
    }
}