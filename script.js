let video=document.querySelector("video");

const reproducir=()=>{
    video.play();
}
const detener=()=>{
    video.pause();
}

function arrastre(e){
   // console.log("arrastre")
  // console.dir(e)
 //   let 
   e.dataTransfer.setData("Text",e.target.id)
}

function soltado(){
   // console.log("se solto!")
}

function llevando(){
  //  console.log("llevando")
}

let caja=document.querySelectorAll(".caja");

caja.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

caja.addEventListener("drop",(event)=>{
    const id=event.dataTransfer.getData("Text");
    let element=document.querySelectorAll("#"+id);
    caja.innerHTML=element.outerHTML;
    element.style.display="none";
})

function onclick(event) {
    reinicio()
}

// no logre hacerlo funcionar