let num = document.querySelectorAll("li");
let results = document.querySelector(".result");
let dummy = document.querySelector(".dummy");

for (let i = 0; i < num.length; i++)
{
    num[i].addEventListener("click",function (){

        let getvalue = document.querySelector(".result");
        getvalue =getvalue.value;
       if(num[i].innerHTML == "="){
        results.value = eval(results.value);
        results.style.color = "#2ecc71";
       }else{
        if(num[i].innerHTML === "C"){
            results.value ="";
            dummy.textContent= "";

        }else{
            results.value += num[i].innerHTML;
            dummy.textContent += num[i].innerHTML;
        }

        if(num[i].innerHTML =="DEL"){
            results.value = getvalue.slice(0,-1);
            dummy.textContent = getvalue.slice(0,-1);

        }
       
       }
    });

}

document.addEventListener("keydown", (e) => {
    e.preventDefault(); // Prevent the default behavior of the keyboard event
    num.forEach((Element) => {
      if (Element.textContent === e.key) {
        results.value += Element.textContent;
        dummy.textContent += Element.textContent;
      } else if (e.key == "Enter") {
        results.value = eval(results.value);
        results.style.color = "#2ecc71";
      } else if (e.key == "Escape") {
        results.value = "";
        dummy.textContent = "";
      } else if (e.key == "Backspace") {
        // Prevent the default behavior of the Backspace key
        e.preventDefault();
  
        // Remove the last character from the input field if there is any
        if (results.value.length > 0) {
          results.value = results.value.slice(0, -1);
          dummy.textContent = dummy.textContent.slice(0, -1);
        }
      }
    });
  });
