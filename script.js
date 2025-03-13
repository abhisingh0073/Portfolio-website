

const bar=document.querySelector(".mobile_nav");
const menu=document.querySelector(".mobile_nav_menu");
const mobileLinks=document.querySelectorAll(".mobile_nav_link");
const mode = document.querySelector(".header_sun");

let barOpen = false;


function barbtn(){
    barOpen = !barOpen;
    if(barOpen === true){
    bar.style.display = "flex";
    document.body.style.overflowY = "hidden";
}

else{
    bar.style.display = "none";
    document.body.style.overflowY = "auto";
}


}

// menu.forEach(link => {
//     link.addEventListener("click", () => {
//         baropen = false
//         bar.style.display = "none";
//         document.body.style.overflowY = "auto";   
//     })
   
// })

menu.addEventListener("click",event =>{
    if(event.target.classList.contains("mobile_nav_link")){
    barOpen = false
    bar.style.display = "none";
    document.body.style.overflowY = "auto";
}
})



// important *********this is use to fix the toggling of dark-light mode even after refreshing the browser*********************************************************************8
const theme = localStorage.getItem("theme");         
theme && document.body.classList.add(theme);


function sunbtn(){
    document.body.classList.toggle('dark_mode')
    
    if(document.body.classList.contains("dark_mode")){
        localStorage.setItem("theme", "dark_mode");
    }
    else{
        localStorage.removeItem("theme");
    }

    bar.style.display = "none";
    document.body.style.overflowY = "auto";
}
    



