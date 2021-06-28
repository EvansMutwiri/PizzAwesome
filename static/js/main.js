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
        price = 900;
        console.log("The price is " + price);
        break;
      case "small":
        price = 400;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pizzCrust) {
      case "0":
        crust_price = 0;
        break;
      case "Crispy":
        crust_price = 0;
        break;
      case "Stuffed":
        crust_price = 100;
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

    // Add pizza button
    $("button.addPizza").click(function () {
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
          price = 900;
          console.log("The price is " + price);
          break;
        case "small":
          price = 400;
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
          crust_price = 150;
          break;
        case "Gluten-free":
          crust_price = 180;
          break;
        default:
          console.log("No price");
      }
      let topping_value = ptopping.length * 50;
      console.log("toppings value" + topping_value);
      total = price + crust_price + topping_value;
      console.log(total);

      checkoutTotal = checkoutTotal + total;
      console.log(checkoutTotal);

      // constructor function

      var newOrder = new Getpizza(
        pizzName,
        pizzSize,
        pizzCrust,
        ptopping,
        total
      );

      $("#ordersmade").append(
        '<tr><td id="pizzaname">' +
          newOrder.name +
          '</td><td id="pizzasize">' +
          newOrder.size +
          '</td><td id="pizzacrust">' +
          newOrder.crust +
          '</td><td id="pizzatopping">' +
          newOrder.topping +
          '</td><td id="totals">' +
          newOrder.total +
          "</td></tr>"
      );
      console.log(newOrder);
    });
    // Checkout button
    $("button#checkout").click(function () {
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.home-delivery").slideDown(1000);
      $("#adddelivery").slideDown(1000);
      console.log("Your total bills is sh. " + checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
    });

    // delivery button
    $("button.home-delivery").click(function () {
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $(".delivery").slideDown(1000);
      $("#adddelivery").hide();
      $("button.home-delivery").hide();
      $("#pizzatotal").hide();
      let deliveryamount = checkoutTotal + 150;
      console.log("You will pay sh. " + deliveryamount + " on delivery");
      $("#totalbill").append(
        "Your bill plus delivery fee is: " + deliveryamount
      );
    });

    // click button
    $("button#final-order").click(function (event) {
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliveryamount = checkoutTotal + 150;
      console.log("Final Bill is: " + deliveryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if (
        $("input#name").val() &&
        $("input#phone").val() &&
        $("input#location").val() != ""
      ) {
        $("#confirmorder").append(
          person +
            ", We have taken your order and it will be delivered to you at " +
            location +
            ". POD sh. " +
            deliveryamount
        );
        $("#totalbill").hide();
        $("#confirmorder").slideDown(1200);
      } else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
    event.preventDefault();
  });
});
