let btn = document.getElementById("btn");
let btnText =document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logo=document.getElementById("logo");

btn.addEventListener("click",dark);

function dark()
{
    // console.log("dark");
    // console.log(btnIcon);
    // console.log(btnText);
    console.log(logo);

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme"))
    {
        btnIcon.src="./images/sun.png";
        btnText.innerHTML="Light";
        logo.src="./images/logo-white.png";
    }
    else
    {
        btnIcon.src="./images/moon.png";
        btnText.innerText="Dark";
        logo.src="./images/logo.png";
    }
}