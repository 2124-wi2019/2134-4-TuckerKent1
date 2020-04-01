/*
    Tucker Kent
    task3.test.js
    19SP_INFO_2134_WW - Online - JavaScript II
    Thoendel
    1 April 2020
*/
//write you code between this comment

function convertToMetric(iUnit, cType) { //declaring function convertToMetric that accepts 2 parameters -- one for the number to be converted and the second for the conversion type
    if(Number.isNaN(Number(iUnit))){ //if statement to check if first parameter contains a number -- parameter is converted to a number and checked with Number.isNaN
        throw new Error("Error: The first argument must be a numeric value!"); //throwing error if the parameter is not a number or string containing a number
    }
    let conversion = null; //declaring variable and initializing it to a null value
    switch(cType.toLowerCase()){ //switch statement to select correct conversion type based on argument passed to function -- argument is converted to lower case 
        case "liters": //if argument is "liters"
            conversion = iUnit / 0.26417; // calculation is performed on iUnit value and stored in variable conversion
            return parseFloat(conversion.toFixed(2)); //returning value of conversion variable -- with only 2 decimal points and parsed from a string to a float if necessary
        case "meters": //if argument is "meters"
            conversion = iUnit / 3.2808; // calculation is performed on iUnit value and stored in variable conversion
            return parseFloat(conversion.toFixed(2)); //returning value of conversion variable -- with only 2 decimal points and parsed from a string to a float if necessary
        default: //in the case that the argument supplied does not contain "liters" or "meters" as the second argument
        throw new Error("Error: Second argument must be 'liters' or 'meters' only"); //creating and throwing error to correct second argument
    }
}

//and this comment
//do not modify any code beneath this line

test("Let's convert 10 gallons to liters", ()=> {
    expect(convertToMetric(10, "liters")).toBe(37.85);
});
test ("Let's convert 10 feet to meters", ()=>{
    expect(convertToMetric(10, "meters")).toBe(3.05);

});
test("Let's make sure we get an error if we pass a value other than a number in as the first argument", ()=> {
    expect(()=> {
        convertToMetric("Test", "Meters");
    }).toThrowError("Error: The first argument must be a numeric value!");
});
test("Let's make sure we get an error if we pass a value other than 'liters' or 'meters' as the second argument", ()=>{
    expect(()=> {
        convertToMetric(43, "test");
    }).toThrowError("Error: Second argument must be 'liters' or 'meters' only");
});
test("Let's make sure our conversion works if we input a string containing a number as the first argument", ()=>{
    expect(convertToMetric("10", "meters")).toBe(3.05);
});