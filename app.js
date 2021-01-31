var request=prompt("What you want to buy: -phone- or -laptop-");

while (request !== 'phone' && request !== 'laptop') {
    request = prompt('What you want to buy: -phone- or -laptop-');
}



var Quantity=prompt("Enter the required quantity");

var price;
var image='';

if (request =="phone"){
    price=Quantity * 150;
    image = '<img src="image/phone.png"/>';
  }

  if (request =="laptop"){
    price=Quantity * 500;
    image = '<img src="image/laptop.png"/>';
  }

  var result = '';

  for (var i = 0; i < Quantity; i++) {
    result = result + image;
  }

  document.write(result);


  var Discount="5%";

  if (price>=2000){
    var Discount="50%";
  }
  else if (price>=1500){
    var Discount="40%";
  }
  else if (price>=1000){
    var Discount="30%";
  }
  else if (price>=500){
    var Discount="20%";
  }
  else if (price>=200){
    var Discount="10%";
  }
  
  




  