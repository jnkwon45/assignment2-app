/* functions */

function addItem(){

  var list = document.getElementById("cart");
  var itemInput = document.getElementById(("add").value);
  var newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode(itemInput.value));
  list.appendChild(newItem);

  iqties.appendChild(document.getElementById(("qtydropdown").value));
  iglazes.appendChild(document.getElementById(("glazingdropdown").value));
  
  displayCart()
   
}

function displayCart(){
  
  cartdata = '<table><tr><th>Product Name</th><th>Quantity</th><th>Glaze</th><th>Price</th><th>Total</th></tr>';
  
  total = 0;
  
  for (i=0; i<iqties.length; i++){
    total += number(iqties[i]) * 3.20
    cartdata += "<tr><td>" + "Blackberry Cinnamon Bun" + "</td><td>" + iqties[i] + "</td><td>" + iglazes[i] + "</td><td>" +
    "$3.20" + "</td><td>" + number(iqties[i]) * 3.20 + "</td><td><button onclick='delElement(" + i + ")'>Delete</button></td></tr>"
  }
  
  cartdata += '<tr><td></td><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata
  
}

function delElement(a){
  iqties.splice(a, 1);
  iglazes.splice(a, 1)
  displayCart()
}

/* carousel */

var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// /*** document load ***/

// $(document).ready(function(){
//     $("#add").click(function() {
//         var list = $("#grocery-list"); // get the ol list by id
//         var itemInput = $("#new-list-item"); // get the new item input
//       // append the input value within an li element
//         list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>") 
//     });

//     $(".delete-item").click(function() {
//         console.log("test")
//         $(this).parent().remove();
//     });

// });

// iqties.length
