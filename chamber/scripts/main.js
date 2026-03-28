document.getElementById("year").textContent =
new Date().getFullYear();

const lastMod=document.getElementById("last-mod");
if(lastMod){
lastMod.textContent=document.lastModified;
}