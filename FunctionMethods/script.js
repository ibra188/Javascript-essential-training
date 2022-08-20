/**
 * working with functions
 */


  //Function declaration
function doSomeMath(a, b){
  let c = a + b;
  return c; 
}

//Function expression
const domMoreMath = function (a, b){
  let c = a * b;
  return c;
};

console.log("do so math", doSomeMath(5,6));
console.log("do more math", domMoreMath(5, 6));

 


/**
 * 
 * //Immediately Invoked function expression (IIFE)
(Function (){
  let a = 5;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
 * 
 */


const bluePack = {
  name: "laptop bag",
  color: "blue",
  volume: 8,
  pocketNum: 3,
};

//function expression
const addpack = function(currentPack){
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h2>${currentPack.name}</h2>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};
const theArticle = addpack(bluePack);
console.log(theArticle)

const main = document.querySelector("main");
main.append(addpack(bluePack));


//Arrow Function
const addpack1 = (currentPack) => {
  const newArticle1 = document.createElement("div");
  newArticle1.innerHTML = `
    <h2>${currentPack.name}</h2>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle1;
};

const theArticle1 = addpack1(bluePack);
console.log(theArticle1)

const main1 = document.querySelector("main");
main1.append(addpack(bluePack));

//passing data to function throug parameters

const tipCalculator = (sum, percentage, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
     Sum before tip: ${currency} ${sum}
     tip percentage: ${percentage}%
     tip: ${currency} ${tip.toFixed(2)}
     total: ${currency} ${total.toFixed(2)}  
  `);
};

tipCalculator(29.95, 18);
