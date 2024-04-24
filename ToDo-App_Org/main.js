const input=document.getElementById("takeInput");
const btn=document.getElementById("addBtn");
const lists=document.getElementById("list-container");




btn.addEventListener("click", function(){

    if(input.value==""){
        alert("Please enter a task");
} 
    else{
        let data=input.value;

        const li=document.createElement("li");
        li.setAttribute("class", " flex rounded-3xl  pl-5 mb-6 mt-2 items-center cursor-pointer  ");
        li.innerHTML=` <img src="./assets/images/unchecked.png" alt="" class="img1 w-6 mr-2">
        <span class="list-text ">${data}</span>
        <img src="./assets/images/icons8-cancel-24.png" alt="" class="img2 w-6 ml-auto mr-4">`;

        
        console.log(li);
        lists.appendChild(li);


        input.value="";
        const img1 = li.querySelector(".img1");
        img1.addEventListener("click", function(){
            
            const img1 = li.querySelector(".img1");
            // Change the src attribute to the path of the checked image
            img1.src = "./assets/images/checked.png";
            const checked=li.querySelector(".list-text");
            checked.style.textDecoration="line-through";
            
            console.log("Image changed to checked");
            
            // const deleteBtn = li.querySelector(".img2");
            // deleteBtn.addEventListener("click", function() {
            //     lists.removeChild(li);
                
            // })

        });

        const deleteBtn = li.querySelector(".img2");
        deleteBtn.addEventListener("click", function() {
            lists.removeChild(li);
            
        })



    }
    
    
   
});


