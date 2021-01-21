// kilometer to meter
function kilometerToMeter(kilometer) {
    var convert = kilometer * 1000;

    if (convert < 0) {
        return "Kilometers Are Not Negative Values."
    } else {
        return convert;
    }
}
var meter = kilometerToMeter(3);
console.log(meter);





//budget calculator
function budgetCalculator(watch, phone, computer) {
    watchPrice = watch * 50;
    phonePrice = phone * 100;
    computerPrice = computer * 500;

    if (watch < 0 && phone >= 0 && computer >= 0) {
        console.log("The Watch Will Not Have a Negative Value.");
        return phonePrice + computerPrice;
    } 
    else if (phone < 0 && watch >= 0 && computer >= 0) {
        console.log("The Phone Will Not Have a Negative Value.");
        return watchPrice + computerPrice;
    } 
    else if (computer < 0 && watch >= 0 && phone >= 0) {
        console.log("The Computer Will Not Have a Negative Value.");
        return watchPrice + phonePrice;
    } 
    else if (computer < 0 && watch < 0 && phone >= 0) {
        console.log("The Watch And Computer Will Not Have a Negative Value.");
        return phonePrice;
    } 
    else if (computer < 0 && watch >=0 && phone < 0) {
        console.log("The Phone And Computer Will Not Have a Negative Value.");
        return watchPrice;
    } 
    else if (watch < 0 && phone < 0 && computer >= 0) {
        console.log("The Watch And Phone Will Not Have a Negative Value.");
        return computerPrice;
    }
    else if (watch < 0 && phone < 0 && computer < 0) {
        return "Negative Values is Not Allowed."
    } 
    else {
        return watchPrice + phonePrice + computerPrice;
    }
}
var totalCost = budgetCalculator(2, 1, 1);
console.log(totalCost);





// hotel cost
function hotelCost(day) {
    var total = 0;
    if (day > 20) {
        total = total + ((day - 20) * 50);
        day = 20;
    }
    if (day > 10) {
        total = total + ((day - 10) * 80);
        day = day - 10;
    }
    if (day != 0) {
        total = total + (day * 100);
    }
    return total;
}
var totalHotelCost = hotelCost(50);

if (totalHotelCost < 0) {
    console.log("Hotel Cost Are Not Negative Values.");
} else {
    console.log(totalHotelCost);
}





// mega friend
function megaFriend(allName) {
    var maxValue = allName[0];
    for (var i = 0; i < allName.length; i++) {
        if (maxValue.length < allName[i].length) {
            maxValue = allName[i];
        }
    }

    if ((maxValue[0] >= 'A' && maxValue[0] <= 'Z') || (maxValue[0] >= 'a' && maxValue[0] <= 'z')) {
        return maxValue;
    } else {
        return "This Value is Not Matching.";
    }
}
var maxValueName = megaFriend(["kamal","jamal", "salam", "barkat"]);
console.log(maxValueName);




