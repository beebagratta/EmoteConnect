const menubtn=document.querySelector("#menu");
const navbar=document.querySelector("nav");
function btn() {
    menubtn.addEventListener("click" ,()=>{
        navbar.style.display="flex";
        menubtn.id="cross";
        menubtn.innerHTML="close";
        const closebtn=document.querySelector("#cross");
        closebtn.addEventListener("click",()=>{
            navbar.style.display="none";
            menubtn.id="menu";
            menubtn.innerHTML="menu";
            btn();
        });
    });
    
};
btn();
