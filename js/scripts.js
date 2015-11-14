var link = document.querySelector(".title-form");
var form = document.querySelector(".form"); 
 

 link.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("form-show");
 });

