// alert("This is created by Siddharth Aasal");
const form = document.getElementById("model");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
let str = "";
var numberOfButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
     evaluate(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
   var c = event.key;
  if(c=='Enter' || c=='Backspace' || c=='Delete' || c=='=' || c=='+' || c=='-' || c=='*' || c=='/' || c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8' || c=='9' || c=='0' ||c=='.'){
    evaluate(c);
  }
  

});

function evaluate(key){
  if(key == '=' || key == 'Enter'){
      document.getElementById('display').value = eval(str);
  }
  else if(key == 'Clear' || key == 'Delete'){
    str = "";
    document.getElementById('display').value = "";
  }
  else if(key == 'Dark'){
    
  }
  else if(key == 'Del' || key == 'Backspace'){
    str = str.slice(0,str.length-1);
    document.getElementById('display').value = str;
  }
  else{
    str += key;
    document.getElementById('display').value = str;
  }
  

  //  if(key == 'Clear'){
  //   str = "";
  //   document.getElementById('display').value = str;
  // }
  // if(key == 'Dark'){
  
  // }
  // if(key == '7'){
  //   str += "7";
  //   document.getElementById('display').value = str;
  //   // document.querySelector('input').value = str;
  // }
}