var navis = document.getElementById('is');
var navt = document.getElementById('nav');
i = 1;
navis.onclick = () => {


    if (i == 1) {
        navt.style.display = "flex";
        navt.style.display = +"important ";
        navt.style.opacity = "1";
        navt.style.translate = "10px";
        navt.style.position = "fixed ";
        navt.style.transition = "1.5s";
        i = 0;
    } else if (i == 0) {
        navt.style.display = "none";
        navt.style.opacity = "1";
        navt.style.translate = "0";
        navt.style.position = "fixed ";
        i = 1;
    }


}