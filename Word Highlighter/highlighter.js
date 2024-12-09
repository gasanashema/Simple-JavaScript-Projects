let getParagraph = document.getElementById('myParagraph');
let paragraph = getParagraph.innerText.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');

const counterArr = {};
let counted = paragraph.map(item=>{Object.hasOwn(counterArr,item)?counterArr[item]+=1:counterArr[item]=1;});

const sortObj = Object.entries(counterArr).sort(function(a, b) {return a[1] - b[1];});

let updatedParagraph=getParagraph.innerHTML;

let lastFive = sortObj.slice(sortObj.length-5,sortObj.length);

for (let i = 0; i < lastFive.length; i++) {
    let word = lastFive[i][0];  
    updatedParagraph = updatedParagraph.replaceAll(word,`<span class='highlighted'>${word}</span>`);
}


getParagraph.innerHTML = updatedParagraph;

document.querySelectorAll('.highlighted').forEach(element => {
    element.style.backgroundColor = 'yellow';
});

