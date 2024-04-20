const startkro=document.querySelector("#start");
const stopkiya=document.querySelector("#stop");

 const changecolor=()=>{
    
     const hex="0123456789ABCDEF";
     let color="#";
     for(let i=0;i<6;i++){
          color+=hex[Math.floor(Math.random()*16)];
     }
     return color;
      
 };
 let inters;
 const changecolors=()=>{ 
     if(!inters){
     inters=setInterval(changebg,1000);}
     function changebg(){
     document.body.style.backgroundColor=changecolor();
 }

 };
 const stopcolors=()=>{
     clearInterval(inters);
     inters=null;
 };
 startkro.addEventListener("click",changecolors);    
 stopkiya.addEventListener("click",stopcolors);    
     
