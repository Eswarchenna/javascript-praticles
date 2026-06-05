function onClickCostPrice() {
    debugger;
    var chocolatePrice = Number(document.getElementById("txtChocolatePrice").value);
    var boxQuantity = Number(document.getElementById("txtBoxQuntity").value);
    var noofBoxes = Number(document.getElementById("txtNoOfBoxes").value);
    var travellingCost = Number(document.getElementById("txtTravellingCost").value);
    var newPrice = Number(document.getElementById("txtSellingPrice").value);
    var costPrice = (chocolatePrice * boxQuantity * noofBoxes) + travellingCost;
    var sellingPrice = (newPrice * boxQuantity * noofBoxes);
    if (sellingPrice > costPrice) {
        result = "profit";
    }
    else {
        result = "loss";
    }
    document.getElementById("pResult").innerHTML = result;
}