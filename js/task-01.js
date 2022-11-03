const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

const animalsElementsTitle = document.querySelectorAll('.item h2');


const animalsElementsList = [...animalsElementsTitle].map(element => {
    console.log(`Category: ${element.textContent}`), 
    console.log(`Elements: ${element.nextElementSibling.children.length}`)
 });


