/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

//practice done by ebrima sonko
//practicing objects
const myHouse = {
    name: "sleepingRoom",
    computer: "macbook",
    colorHouse: "white",
    accesorries: {
        phone: "phone",
        bike: "moutainBike",
    },
    clearn: false,
    houseClearn: function(houseStatus){
        this.clearn = houseStatus;
    },
    bedRooms: 2
};

/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

//Making method in objects
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};
console.log(backpack.newStrapLength);
console.log(10,30);
