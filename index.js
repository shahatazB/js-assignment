//alert("This is Java Script Fundamental Class");
//console.log("Hello World");
//document.write("welcome To The Java");

//var a ;
//var a=100;
//console.log(a);

//var a=100,b='100',c=false,d=null,e;


 //Arithmetic operators;
// +,-,*,/,%

//var a=10;
//var b=20;
//var c=a+b;
//var d= a-b;
//var e= a*b;
//var f=a/b;
//console.log(c,d,e,f);

// comparision operators;
 //<,>,<=,>=,!=,==,===

 //var a=10;
 //var b=20;
 //console.log(a>b);
 //console.log(a<b);
 //console.log(a>=b);
 //console.log(a<=b);
 //console.log(a!=b);
 


//logical operators;
// &&,||,!

  // var a=10, b=20;
 //console.log(a<b || a<5);
 //console.log(!a==b);

  //Array

 //var arr =[100,'100',true,null, undefined];
 //console.log(arr);
 //console.log(arr[0]);
 //console.log(arr[1]);
 //console.log(arr[2]);
 //console.log(arr[3]);
 //console.log(arr[4]);
 //console.log(arr[5]);
//console.log(arr.length)
 //how to store data outside array
  //var newArr=[];
  //newArr[0]=10; 
  //newArr[2]='hello';
  //console.log(newArr);

  //object   

 // var obj={
  //sana:'01',
  //asma:02,
  //basira:true,
  //afifa:null,
  //nida:undefined, 
  //nomaan:[1,2,3,4],
//};



  //console.log(obj ["nomaan"]);
  
  //console.log(obj["basira"]);
  //console.log(obj["afifa"]);
  //console.log(obj.sana);
  //console.log(obj.asma);
  //console.log(obj.basira);
  //console.log(obj.noone);

  //var newObj={
  //  name: 'shahabaz',
    //age: 35,
   // accountnumber:1234567,
    //balance: 20000
  //};
  //console.log(newObj);


    //function
    //syntax
    //functon funtionname(parameterlist){
     // statements
    //}

    //function add(){
      //var a=10;
      //var b=20;
      //var c=a+b;
      //console.log(c);
    //}
    //add();
    //function sumtwonumb(a,b){
      //a=10,b=20;
      //var c=a+b;
      //console.log(c);
    //}
    //sumtwonumb();
    //sumtwonumb(20,30);
    
  //   function calculator(a,b,operator){
    // switch(operator) {
      // case'+': console.log(a+b);
       //break;
       //case'-':console.log(a-b);
       //break;
       //case'*': console.log(a*b);
       //break;
       //case'/': console.log(a/b);
       //break;
       //default:console.log("nothing");
    
     //} 
      //}

      //calculator(30,20,'*');
      //if(3>9){
       // console.log("yes");
      //}
      //else{
        //console.log("no");
      //}
      //var numb=100;
      //switch(numb) {
        //case 200:
          //console.log("1000");
          //break;
         // default: console.log("2000");
           // break;
          
      //}
      //for( var i=10;i>=10;i++){
        //console.log(i);

      //}
      //var a=10;
     // var b=a++;
      //var c=++a;

      //console.log(a,b,c);
      //console.log(a++);
      //console.log(++a);


      //var j=20;

      //while(j<50){
        //console.log(j);
        //j++;
      //}
      //do{
        //++j;
        //console.log(j);
      //} while(j<30);

      //helper methods of array in js

      //var colors=['pink','white','rose','blue'];
      //colors.push('yellow');// adds an item at the end of array
      //colors.pop();//removes an item at the end of the array
      //colors.shift();//removes 0th index element
      //colors.unshift('red');//add 0th index at starting point of an array
      //console.log(colors);


      //slice and splice 
      // slice is used to remove elements to array
       //var students=['mubeen','husna','nida','fatima'];
       //console.log(students);
       // var newstudents=students.slice(3,4);
       //console.log(newstudents);

       //splice is used to add new elements to array
       // var fruits=['banana','orange','mango'];
       //fruits.splice(4,0,'badam','pista');
       // console.log(fruits);
       





//rest and spread operator in array

//rest 
//function addNumbers(a,b,c,...others ){
  //console.log(others)
 //return a+b+c;
//}
//const res=addNumbers(2,3,4,5,6)
//console.log(res)

//spread
 //var names=["armaan","arhaan","azhaan","rehaan"];
 //function getNames(name1,name2,name3,name4){
 // console.log(name1,name2,name3,name4)
 //}
 //getNames(names[0],names[1],names[2])
//getNames(...names)

//In Objects
//var students={
  //name:"azhaan",
  //age:"10",
  //hobbies:["playing","dancing"]

//}

//const age=students.age;
//const {...rest}=students;
//console.log(rest)

//va  r newstudent={
   //...students,
  // age:"15"
//}
//console.log(newstudent)
//selectors in DOM


//console.log(document)

//const worldElement= document.getElementById("wor"):returns a single element
//console.log(worldElement);
//document.getElementsByClassName("text"):returns a collection of elements


//console.log(textArr);

 //let text=document.getElementsByTagName("p");-->returns a collection of elements 
//console.log(text);

//const select=document.querySelector(".result p");-->returns a single element

//console.log(select);

//const select=document.querySelectorAll(".result p");-->returns a collecton of elements
//console.log(select);