const bt1=document.getElementById('gray');
const bt2=document.getElementById('white');
const bt3=document.getElementById('blue');
const bt4=document.getElementById('yellow');

bt1.addEventListener('click',function(){
    document.body.style.backgroundColor='gray';
})

bt2.addEventListener('click',function(){
    document.body.style.backgroundColor='white';
})

bt3.addEventListener('click',function(){
    document.body.style.backgroundColor='blue';
})

bt4.addEventListener('click',function(){
    document.body.style.backgroundColor='yellow';
})