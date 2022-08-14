let number=document.getElementById("num");
let panda =document.getElementById("panda");
console.log(number);
console.log(panda);
let counter=0;
 setInterval(()=>{
   if(counter==75){
      panda.src="https://image.shutterstock.com/image-illustration/sign-panda-heart-idea-poster-600w-424508683.jpg"
      clearInterval();
    }
    else{
        counter++;
       number.innerHTML=counter+"%";
    }
 },25.01);
 
 