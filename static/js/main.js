var price, crust_price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

// proceed button
$(document).ready(function () {
    alert ("WELCOME TO PIZZAWESOME").timeOut(5000)

  $("button.proceed").click(function (event) {
    let pizzName = $(".name option:selected").val();
    let pizzSize = $("#size option:selected").val();
    let pizzCrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch (pizzSize) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 1200;
        console.log(price);
        break;
      case "medium":
        price = 850;
        console.log("The price is " + price);
        break;
      case "small":
        price = 600;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pizzCrust) {
      case "0":
        crust_price = 0;
        break;
      case "Crispy":
        crust_price = 200;
        break;
      case "Stuffed":
        crust_price = 250;
        break;
      case "Gluten-free":
        crust_price = 180;
        break;
      default:
        console.log("No price");
    }
    let topping_value = ptopping.length * 50;
    console.log("toppings value" + topping_value);

    if (pizzSize == "0" && pizzCrust == "0") {
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choice").hide();
      alert("Please select pizza size and crust");
    } else {
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choice").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html($("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

    
});
