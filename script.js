const List = document.getElementById("list");
List.style.maxHeight= '0px';

function toggleMenu(){
    if(List.style.maxHeight == '0px'){
        List.style.maxHeight = '400px'
    }
    else{
        List.style.maxHeight = '0px'
    }
}



const switchTheme = () => {
    const root = document.documentElement;
    let dataTheme = root.getAttribute("data-theme"),
    newTheme = (dataTheme === "light") ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
}

document.querySelector("#theme-switcher").addEventListener("click", switchTheme)

  