//dom selectors
//1.getElementById

//const a=document.getElementById("heading")
//console.log(a);

//2.getElementsByClassName
//const b=document.getElementsByClassName("text1")
//console.log(b);

//3.getElementsByTagName
//const c=document.getElementsByTagName("p")
//console.log(c[1]);

//4.querySelector
//const d=document.querySelector("#heading")
//const d=document.querySelector(".text1")
//const d=document.querySelector("p")
//console.log(d);

//5.querySelectorAll
//const e=document.querySelectorAll("#heading")
//const e=document.querySelectorAll(".text1")
 //const e=document.querySelectorAll("p")
//console.log(e);

//Dom navigation
//const f=document.querySelector(".childnodes")
//console.log(f.previousElementSibling);
//console.log(f.lastElementChild);
//console.log(f.firstElementChild);

//modify element content
//const mod=document.querySelector("#modify")
//console.log(mod.textContent);
//console.log(mod.innerText);
//console.log(mod.innerHTML);

// change name onclick
function changeName(){
    console.log("buttonclicked");
    const n=document.querySelector("#name")
    n.innerText="BEGUM";
}

function increment()
{
    const a=document.querySelector("h4")
    const b=Number(a.innerText)
    const c=b+1;
    a.innerText=c;
}
function decrement()
{
const a=document.querySelector("h4")
const b=Number(a.innerText)
const c=b-1;
a.innerText=c;
}