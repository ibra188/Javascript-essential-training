//modify classes, attributes and styles
// Assign image element
const img = document.querySelector('img');

img.hasAttribute('src');                // returns true
img.getAttribute('src');                // returns "A red Tyrannosaurus Rex"
img.removeAttribute('src');             // remove the src attribute and value

// Select the second div by class name
const activeDiv = document.querySelector('.active');

activeDiv.classList.add('hidden');                // Add the hidden class
activeDiv.classList.remove('hidden');             // Remove the hidden class
activeDiv.classList.toggle('hidden');             // Switch between hidden true and false
activeDiv.classList.replace('active', 'warning'); // Replace active class with warning class

// Select div
const div = document.querySelector('div');

// Apply style to div
div.setAttribute('style', 'text-align: center');
div.style.height = '100px';
div.style.width = '100px';
div.style.border = '2px solid black';

// Make div into a circle and vertically center the text
div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';

//creating and element and adding it attributes
const main = document.querySelector('myMainContain');

const newArticle = document.createElement('article');
      newArticle.classList.add('backpack');
      newArticle.setAttribute('id', 'everyday');
    
main.innerHTML = newArticle;      

