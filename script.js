
let from_unit = document.querySelectorAll(".input_currency_box select")
let swap = document.querySelector(".swap_icon")
let input_box = document.querySelector(".input input")
let convert = document.querySelector(".get_rate")
let error = document.querySelector(".error")
let output = document.querySelector(".output")
let result = document.querySelector(".result")

let output_icon = document.querySelector(" output .output_icon")

// changing icons on selecting new unit
for(var i=0;i<2;i++){
    from_unit[i].addEventListener('change',(e)=>{
            let new_icon = e.target.previousElementSibling
            new_icon.innerHTML = `<i class="fa-solid fa-${e.target.value}"></i>`
     })   
}


// swaping (from and to) units
swap.addEventListener('click',e=>{
   var from = document.querySelector(".from .units")
   var to= document.querySelector(".to .units")

   var from_icon = document.querySelector(".from .new_icon")
   var to_icon= document.querySelector(".to .new_icon")

   var temp;
   temp = from.value
   from.value = to.value
   to.value = temp;

   temp = from_icon.innerHTML
   from_icon.innerHTML= to_icon.innerHTML
   to_icon.innerHTML = temp;

})

// converting equations
convert.addEventListener('click',e=>{
 
   if(input_box.value==""){

     error.style.display = "block"
     output.style.display = "none"
     return;
   }

   error.style.display = "none"

   var from = document.querySelector(".from .units")
   var to= document.querySelector(".to .units")

   var output_no =  0
   var flag = 0;

   if(from.value =="c"){

      if(to.value=="k"){
          output_no = parseFloat(input_box.value) + 273.15
      }

      else if(to.value=="f"){
         output_no = parseFloat(input_box.value)*(9/5) + 32
      }  

      else{
         output_no = parseFloat(input_box.value)
      }
   }

   else if(from.value =="k"){
      if(to.value=="c"){
          output_no = parseFloat(input_box.value) - 273.15
      }

      else if(to.value=="f"){
          output_no = (parseFloat(input_box.value) - 273.15)*1.8 + 32
      }

      else{
         output_no = parseFloat(input_box.value)
      }
   }

   else{

      if(to.value=="k"){
          output_no = (5/9)*(parseFloat(input_box.value) + 459.67)
      }

      else if(to.value=="c"){
         output_no = (5/9)*(parseFloat(input_box.value) - 32)
      }

      else{
         output_no = parseFloat(input_box.value)
       
      }
   }
   output_no = output_no.toFixed(2)
   result.innerHTML = output_no

  output.style.display = "block"

})




