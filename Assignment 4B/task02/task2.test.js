/*
    Tucker Kent
    task2.test.js
    19SP_INFO_2134_WW - Online - JavaScript II
    Thoendel
    1 April 2020
*/
//DO NOT MODIFY THE CODE BETWEEN THIS COMMENT
function calculateMyWeightOnAnotherPlanet(myWeight, otherPlanet) {
    myWeight = parseFloat(myWeight);
    if(isNaN(myWeight)) throw new Error ("Error: first argument must be a numeric value!");
    otherPlanet = otherPlanet.toUpperCase().trim();
    switch(otherPlanet) {
        case "MERCURY":
            return Number((myWeight * .38).toFixed(2));
        case "VENUS":
            return Number((myWeight * .91).toFixed(2));
        case "MARS":
            return Number((myWeight * .38).toFixed(2));
        case "JUPITER":
            return Number((myWeight * 2.34).toFixed(2));
        case "SATURN":
            return Number((myWeight * .93).toFixed(2));
        case "URANUS":
            return Number((myWeight * .92).toFixed(2));
        case "NEPTUNE":
            return Number((myWeight * 1.12).toFixed(2));
        default:
            throw new Error("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only.");
    }
}
//AND THIS COMMENT
//WRITE YOUR TESTS BELOW

test("170 pounds on Mercury should be 64.60", () => { //test for 170 pounds on mercury
    expect(calculateMyWeightOnAnotherPlanet(170, "MERCURY")).toBe(64.60); //expect and toBe methods used for jest
});

test("170 pounds on Venus should be 154.70", () => { //test for 170 pounds on venus
    expect(calculateMyWeightOnAnotherPlanet(170, "VENUS")).toBe(154.70); //expect and toBe methods used for jest
});

test("170 pounds on Mars should be 64.60", () => { //test for 170 pounds on mars
    expect(calculateMyWeightOnAnotherPlanet(170, "MARS")).toBe(64.60); //expect and toBe methods used for jest
});

test("170 pounds on Jupiter should be 397.80", () => { //test for 170 pounds on jupiter
    expect(calculateMyWeightOnAnotherPlanet(170, "JUPITER")).toBe(397.80); //expect and toBe methods used for jest
});

test("170 pounds on Saturn should be 158.10", () => { //test for 170 pounds on saturn
    expect(calculateMyWeightOnAnotherPlanet(170, "SATURN")).toBe(158.10); //expect and toBe methods used for jest
});

test("170 pounds on Uranus should be 156.40", () => { //test for 170 pounds on uranus
    expect(calculateMyWeightOnAnotherPlanet(170, "URANUS")).toBe(156.40); //expect and toBe methods used for jest
});

test("170 pounds on Neptune should be 190.40", () => { //test for 170 pounds on neptune
    expect(calculateMyWeightOnAnotherPlanet(170, "NEPTUNE")).toBe(190.40); //expect and toBe methods used for jest
});

test("Should throw an exception if second argument does not contain one of the Planets - Mercury, Venus, Mars, Jupiter, Saturn, Uranus, or Neptune", () => { //test to ensure function throws an error if second argument doesn't contain a planet name
    () => { //using anonymous function because of the toThrowError method
        expect(calculateMyWeightOnAnotherPlanet(170, "Hendrix")).toThrowError("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only."); //using expect and toThrowError method to test function with invalid planet name
    };
});

test("Should throw an exception if first argument is not an integer value", () => { //test to ensure the first argument contains a numerical value
    () => { //using an anonymous function because of the toThrowError method
        expect(calculateMyWeightOnAnotherPlanet("twenty five", "Mercury")).toThrowError("Error: first argument must be a numeric value!"); //using expect and toThrowError methods with first input as a non numerical string value
    };
});

test("String value of '170' and lowercase second argument 'neptune' should be 190.40", () => { //test to ensure that a numerical string and lowercase planet string will be converted correctly and function will execute correctly
    expect(calculateMyWeightOnAnotherPlanet("170" , "neptune")).toBe(190.40); //expect and toBe methods used with numerical string and lowercase planet
});