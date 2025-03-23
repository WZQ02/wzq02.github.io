function cp_th(){
    const cc = document.getElementById("centerpic_container")
    const th = document.createElement("div")
    th.id = "touchhold_cont"
    let thsv_path = "/assets/images/touchhold/th_"
    let thsv_clastr = "class='touchhold_sv'"
    let thad_path = "/assets/audio/touchhold/th_"
    th.innerHTML = "<img "+thsv_clastr+" id='t1' src='"+thsv_path+"inn_1.svg' /><img "+thsv_clastr+" id='t2' src='"+thsv_path+"inn_2.svg' /><img "+thsv_clastr+" id='t3' src='"+thsv_path+"inn_3.svg' /><img "+thsv_clastr+" id='t4' src='"+thsv_path+"inn_4.svg' /><img "+thsv_clastr+" id='t5' src='"+thsv_path+"inn_cir.svg' /><img "+thsv_clastr+" id='t6' src='"+thsv_path+"outer.svg' /><audio id='thad_touch' src='"+thad_path+"touch.ogg'></audio><audio id='thad_riser' src='"+thad_path+"riser.ogg'></audio><audio id='thad_hanabi' src='"+thad_path+"hanabi.ogg'></audio>"
    cc.appendChild(th)

    let th_state = 0
    let th_tim1,thh_stat
    let thon_styl = "transition:none;animation:flick .07s infinite"
    let hold_time = 3
    th.onmouseup = () => {t_clickup()}
    th.onmousedown = () => {t_clickdown()}
    th.ontouchend = () => {t_clickup()}
    th.ontouchstart = () => {t_clickdown()}
    th.ondragstart = (e) => {e.preventDefault()}
    function t_clickup() {
        if (!th_state) {
            th.style.opacity = .15
            th_state = 1
            th_tim1 = setTimeout(()=>{th.style = "";th_state = 0},5000)
        }
        if (th_state == 2) {
            th.style = "transition:none;opacity:.25"
            thh_stat = 0
        }
    }
    function t_clickdown() {
        if (th_state == 1) {
            clearTimeout(th_tim1)
            th.style = thon_styl
            tri_setup(1)
            let t6 = document.getElementById("t6")
            t6.style = "display:block;animation:th_anim1 "+hold_time+"s linear"
            th_state = 2
            thh_stat = 1
            setTimeout(()=>{th.style = "transition:.15s";t6.style = "";th_state = 3;
                if (!thh_stat) {
                    setTimeout(()=>{th.style = "";th_state = 0;tri_setup()},1000)
                } else {
                    add_mai_c_entry()
                }
            },hold_time*1000)
            document.getElementById("thad_touch").play()
            document.getElementById("thad_riser").play()
        }
        if (th_state == 2) {
            th.style = thon_styl
            thh_stat = 1
        }
    }
    function add_mai_c_entry() {
        fireworks()
        let a = document.createElement("a");
        a.title = "舞萌 DX 好友码";
        a.onmouseup = ()=>{show_mai_code()};
        a.innerHTML = "<div class='othlnk'><span>舞萌 DX 好友码</span></div>"
        document.querySelector("#othlnks").appendChild(a)
    }
    function show_mai_code() {
        createxmlwindow("maimai_friend_code",0,1)
    }
    function fireworks() {
        let tc1 = document.createElement("div")
        tc1.id = "t_circle"
        cc.appendChild(tc1)
        let tc2 = document.createElement("img")
        tc2.src = thsv_path+"firwks1.svg"
        tc2.id = "t_fire"
        cc.appendChild(tc2)
        setTimeout(()=>{tc1.style = "display:none"},245)
        setTimeout(()=>{tc2.style = "display:none"},745)
        document.getElementById("thad_hanabi").play()
    }
    function tri_setup(stat) {
        for (let i of ["t1","t2","t3","t4"]) {
            let tri = document.getElementById(i)
            if (stat) {
                tri.style = "transform: translate(0px,0px)"
            } else {
                tri.style = ""
            }
        }
    }
}
cp_th()