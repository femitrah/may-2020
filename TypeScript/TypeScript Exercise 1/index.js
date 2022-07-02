var integer = 6;
var float = 6.66;
var hex = 0xf00d;
var binary = 666;
var octal = 484;
var negZero = -0;
var actuallyNumber = NaN;
var largestNumber = Number.MAX_VALUE;
var mostBiglyNumber = Infinity;
var OnlyString = function (a, b) {
    if (typeof a === "string" && typeof b === "string") {
        if (a.length >= 1 && b.length >= 1) {
            return "" + a + b;
        }
        else if (a.length >= 1 || b.length >= 1) {
            var result = a + "" + b;
            return "";
        }
    }
    return testFunction(a, b);
};
var testFunction = function (valueOne, valueTwo) {
    if (typeof valueOne === "number" && typeof valueTwo === "number") {
        return valueOne + valueTwo;
    }
    else {
        console.log("not a number ");
    }
};
console.log("Result", OnlyString(5, 6));
console.log("OnlyString", OnlyString("palani", "selvam"));
var anyDataType = function (a, b) {
    console.log("AllOw all DataType: A," + a + ",is " + typeof (a) + ",DataType: B," + b + " is " + typeof (a));
};
anyDataType("palaniselvam", -10);
var stringAndBooleanOnly = function (stringAndBooleanOne, stringAndBooleanTwo) {
    var dataTypeOne = typeof (stringAndBooleanOne);
    var dataTypeTwo = typeof (stringAndBooleanTwo);
    console.log("String and boolean DataType Only: A," + stringAndBooleanOne + ",is " + dataTypeOne + ",DataType: B," + stringAndBooleanTwo + " is " + dataTypeTwo);
};
stringAndBooleanOnly("string", true);
var employee = {
    kovilpattiEmployees_id: 323,
    name: "S.Palaniselvam",
    maduraiEmployees_id: 333,
    emplyoyees_name: "sathish"
};
console.log(employee.kovilpattiEmployees_id, employee.name, employee.maduraiEmployees_id, employee.emplyoyees_name);
