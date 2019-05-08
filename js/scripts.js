window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.add("bg-light");
    } else {
        document.getElementById("navbar").classList.add("navbar-dark");
        document.getElementById("navbar").classList.remove("navbar-light");
        document.getElementById("navbar").classList.remove("bg-light");
    }
}

