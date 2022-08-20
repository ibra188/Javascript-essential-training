/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

//this classes are made by ebrima sonko

class Ilsaspar {
    constructor(
        operator,
        salary,
        weeks,
        packingZone,
        breakTime,
        enviroment
    ){
        this.operator = operator;
        this.salary = salary;
        this.weeks = weeks;
        this.packingZone = packingZone;
        this.breakTime = breakTime;
        this.enviroment = {
            cold: enviroment,
            hot: enviroment,
        };
    }

    // Add methods like normal functions:
    daysOfTheWeeks(productive){
        this.weeks = productive;
    }
    highestSalaryLowestSalary (primary, secondary){
        this.salary.person1 = primary;
        this.salary.person2 = secondary;
    }

}
export default Ilsaspar;