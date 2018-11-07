Thanks = function(){
  let name = document.getElementById("handle").value;
  let email = document.getElementById("email").value;
  result = "Congratulations, " + name + ", you're in. Expect an email at " + email + " in the near future.";
  alert(result);  
};

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}