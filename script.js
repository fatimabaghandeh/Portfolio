const List = document.getElementById("list");
List.style.maxHeight= '0px';

function toggleMenu(){
    if(List.style.maxHeight == '0px'){
        List.style.maxHeight = '300px'
    }
    else{
        List.style.maxHeight = '0px'
    }
}