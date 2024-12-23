

var x = document.getElementById("myP").isContentEditable;

console.log(x);






document.getElementById ('content').contentEditable = "true";

var y = document.getElementById("content").isContentEditable;

console.log(y);




sampleData;
function edit(){
document.getElementById('content').classList.add('invalid');

document.getElementById('content').contentEditable = "true";
}

function save(){
this.sampleData= document.getElementById('content').innerText;
console.log()
}





const hero = (<HTMLDivElement>document.querySelector('.hero'));
const text = hero.querySelector('h1');
const walk = 500; // 500px

function shadow(e) {
const { offsetWidth: width, offsetHeight: height } = hero;
let { offsetX: x, offsetY: y } = e;

if (this !== e.target) {
x = x + e.target.offsetLeft;
y = y + e.target.offsetTop;
}

const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((y / height * walk) - (walk / 2));

text.style.textShadow = `
${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
`;

}

hero.addEventListener('mousemove', shadow);