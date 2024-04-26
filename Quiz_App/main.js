const questionsList = [
    {
        id: 1,
        question: "What is term referred to binding of methods and functions?",
        answer: "Encapsulation",
        options: [
            "Abstraction",
            "Polymorphism",
            "Encapsulation",
            "Inheritance"
        ]

    },
    {
        id: 2,
        question: "What is smallest unit of the information?",
        answer: "a bit",
        options: [
            "a bit",
            "a byte",
            "a block",
            "a nibble"
        ]
    },
    {
        id: 3,
        question: "What is decimal value of 1011?",
        answer: "11",
        options: [
            "10",
            "9",
            "8",
            "11"
        ]

    },
    {
        id: 4,
        question: "Which tag is used to define an image in HTML?",
        answer: "img",
        options: [
            "img",
            "jpeg",
            "picture",
            "png"

        ]
    }

];
let length= questionsList.length;

const question = document.querySelector('#question');

let currentIndex = 0;
let score=0;
function startQuiz(){
    

     currentIndex=0;
    score=0;
    reset();
    showQuestion();
    
    
   
    
    
}

function showQuestion(){
    
    
   
    question.innerText = questionsList[currentIndex].id+". "+ questionsList[currentIndex].question;

    const parent  = document.querySelector('#buttons');
    for(let j=0; j< questionsList[currentIndex].options.length; j++){
    let newBtn= document.createElement('button');
    newBtn.className = "btn rounded-sm  border-[#222] border-[1px] font-normal text-start p-2 my-2 mx-0 bg-[#fff] text-[#222] w-full cursor-pointer";
    newBtn.innerText = questionsList[currentIndex].options[j];
    parent.appendChild(newBtn);
    }
    const nextBtn=document.createElement('button');
        nextBtn.className = "btn-next rounded-sm  border-0 font-medium  p-2 mt-5 mx-auto mb-0 bg-[#001e4d] text-[#fff] w-36 cursor-pointer hidden ";
        nextBtn.innerText = "Next";
        parent.appendChild(nextBtn);


      // Get all buttons
const buttons = document.querySelectorAll('button');

// Iterate over each button and attach click event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {

         nextBtn.classList.remove('hidden');


        // Get the innerText of the clicked button
        const buttonText = this.innerText;
        console.log("Button clicked: " + buttonText);
       

        // Check if the clicked button is the correct answer
        if (buttonText === questionsList[currentIndex].answer) {
            button.style.backgroundColor = '#50F39F';
            score++;
        }
        else{
            button.style.backgroundColor = '#F25F5C';
        }
           });
   });
  
     nextBtn.addEventListener('click', function() {
        if(currentIndex === length-1){
            myscore();
            return;}
        else{

            currentIndex++;
            reset();
            showQuestion();
        }




        
        
     })
   


    console.log("done")
    


  


    
    
           

}

function reset(){
    const parent = document.querySelector('#buttons');
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);


}
};
function myscore(){
    reset();
    question.innerText = "You scored "+score+"out of"+length+"!";
    const quiz=document.querySelector('.quiz');
    const ReTest=document.createElement('button');
        ReTest.className = "btn-next rounded-sm item-center border-0 font-medium  p-2 mt-5 mx-auto mb-0 bg-[#001e4d] text-[#fff] w-36 cursor-pointer  ";
        ReTest.innerText = "Take Test Again";
        quiz.appendChild(ReTest);
        ReTest.addEventListener('click', function(){
            ReTest.style.display="none";

            startQuiz();
        })

    
}

showQuestion();
