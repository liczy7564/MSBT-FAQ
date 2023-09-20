
//四選一
function btntype(num) {
  let i;
  let munutype = document.getElementsByClassName("munutype");
  for (i = 0; i < munutype.length; i++) {
    munutype[i].style.display = "none"; 
  }
  munutype[num-1].style.display = "block";  
  munutype[num-1].style.animation = "munedown .5s";
  munutype[num-1].style.height = "350px";   
}
//點擊空白處關閉
document.body.onclick = offall;
function offall(){
  let i;
  let munutype = document.getElementsByClassName("munutype");
  for (i = 0; i < munutype.length; i++) {
    munutype[i].style.display = "none"; 
  }
};
//碰到第二行文字關閉
function offbtntype(){
  let i;
  let munutype = document.getElementsByClassName("munutype");
  for (i = 0; i < munutype.length; i++) {
    munutype[i].style.display = "none"; 
  }
}

//離開分支關閉
let menucollapse = document.querySelector('.menucollapse');
menucollapse.addEventListener('mouseleave',function(){
  let i;
  let munutype = document.getElementsByClassName("munutype");
  for (i = 0; i < munutype.length; i++) {
    munutype[i].style.display = "none"; 
  }
},false);

//Collection分支
function Collectiontype(num) { 
  let i;
  let Collectionmunu = document.getElementsByClassName("Collectionmunu");
  let Collectionimg = document.getElementsByClassName("Collectionimg");   
  for (i = 0; i < Collectionimg.length; i++) {
    Collectionmunu[i].style.display = "none"; 
    Collectionimg[i].style.display = "none";
  }
  Collectionmunu[num].style.display = "block"; 
  Collectionimg[num].style.display = "block"; 
}

//bar開關

let barFunction=document.querySelector('.barFunction');
barFunction.addEventListener('click',function(){
  let element = document.getElementById("navbarmainMenu");
  element.classList.toggle("navbarmainMenu");
},false);
// function barFunction() {
//   let element = document.getElementById("navbarmainMenu");
//   element.classList.toggle("navbarmainMenu");
// }
//找窗簾層層開關
function labZebra(m) {
  let x;
  let y = document.getElementsByClassName("Zebra");
  const z = document.getElementsByClassName("z1").length;
    x=z*60+1;
    
    
    // alert(x);
  if(y[m].style.display == "block"){
    y[m].style.display = "none";
  }else{
    y[m].style.display = "block";
    y[m].style.height = x + "px";
    y[m].style.transition = "height 0.3s";   
    // y[m].style.transition = "display 1s";   
  }


  // if(y[m].style.display == "block" ){
  //   y[m].style.display = "none";
  // }else{
  //   y[m].style.display = "block";
  // }
}

//灰色區域按鈕
let greylt=document.querySelector('.greylt');
greylt.addEventListener('click',function(){
  document.getElementById('greywidth').style.margin = '0 0 0 0';
},false);

let greyrt=document.querySelector('.greyrt');
greyrt.addEventListener('click',function(){
  document.getElementById('greywidth').style.margin = '0 0 0 -111px';
},false);


// ---------------------瀏覽品項 ---------------------

let rightorleft;
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  if(rightorleft<0){
  x[slideIndex-1].style.animation = "fadenumr .5s"; 
  x[slideIndex-1].style.display = "block";  
  }else{
    x[slideIndex-1].style.animation = "fadenuml .5s"; 
    x[slideIndex-1].style.display = "block";  
  }
}

//phone
let leftorright;
let slideIndexa = 1;
showDiv(slideIndexa);

function plusDiv(m) {
  leftorright = m ;
  showDiv(slideIndexa += m);
}

function showDiv(m) {
  let j;
  let y = document.getElementsByClassName("mySlidesa");
  if (m > y.length) { slideIndexa = 1 };
  if (m < 1) {slideIndexa = y.length};
  for (j = 0; j < y.length; j++) {
     y[j].style.display = "none"; 
  }
  if(leftorright<0){
    y[slideIndexa-1].style.animation = "fadenumr .5s"; 
    y[slideIndexa-1].style.display = "block";  
  }else{
    y[slideIndexa-1].style.animation = "fadenuml .5s"; 
    y[slideIndexa-1].style.display = "block";  
  } 
}


// function btntype(aa) {
//   let q;
//   let r = document.getElementsByClassName("munutype");
//   for (q = 0; q < r.length; q++) {
//     r[q].style.display = "none"; 
//   }
//   r[aa-1].style.display = "block";  
//   r[aa-1].style.animation = "munedown .5s";
//   r[aa-1].style.height = "350px";   
// }

// function labZebra1() {
//   let element = document.getElementById("Zebra1");
//   element.classList.toggle("labcontentthreeopen");
// }
// function labZebra1() {
//   let y = document.getElementsByClassName("Zebra1");
//   if(y[0].style.display == "block" ){
//   y[0].style.display = "none"; 
//   //y[0].style.animation = "munedown .5s";//transition: height 0.3s;
// }else{ y[0].style.display = "block";}
// }

//四項問題

let fmajorShopping1 = document.getElementById('fmajorShopping1');
const Shopping1h = document.getElementById('Shopping1');
const height = Shopping1h.clientHeight;
Shopping1h.addEventListener('click', Shop1);
function Shop1() {
  fmajorShopping1.classList.toggle('Shopping1h');
}
let fmajorShopping2 = document.getElementById('fmajorShopping2');
let Shopping2h = document.getElementById('Shopping2');
Shopping2h.addEventListener('click', Shop2);
function Shop2() {
  fmajorShopping2.classList.toggle('Shopping2h');
}
let fmajorShopping3 = document.getElementById('fmajorShopping3');
let Shopping3h = document.getElementById('Shopping3');
Shopping3h.addEventListener('click', Shop3);
function Shop3() {
  fmajorShopping3.classList.toggle('Shopping3h');
}
let fmajorShopping4 = document.getElementById('fmajorShopping4');
let Shopping4h = document.getElementById('Shopping4');
Shopping4h.addEventListener('click', Shop4);
function Shop4() {
  fmajorShopping4.classList.toggle('Shopping4h');
}

let fmajorinstall1 = document.getElementById('fmajorinstall1');
let install1h = document.getElementById('install1');
install1h.addEventListener('click', ins1);
function ins1() {
  fmajorinstall1.classList.toggle('install1h');
}
let fmajorinstall2 = document.getElementById('fmajorinstall2');
let install2h = document.getElementById('install2');
install2h.addEventListener('click', ins2);
function ins2() {
  fmajorinstall2.classList.toggle('install2h');
}
let fmajorinstall3 = document.getElementById('fmajorinstall3');
let install3h = document.getElementById('install3');
install3h.addEventListener('click', ins3);
function ins3() {
  fmajorinstall3.classList.toggle('install3h');
}
let fmajorInformation1 = document.getElementById('fmajorInformation1');
let Information1h = document.getElementById('Information1');
Information1h.addEventListener('click', Infor1);
function Infor1() {
  fmajorInformation1.classList.toggle('Information1h');
}
let fmajorInformation2 = document.getElementById('fmajorInformation2');
let Information2h = document.getElementById('Information2');
Information2h.addEventListener('click', Infor2);
function Infor2() {
  fmajorInformation2.classList.toggle('Information2h');
}

let fmajorservice1 = document.getElementById('fmajorservice1');
let service1h = document.getElementById('service1');
service1h.addEventListener('click', serv1);
function serv1() {
  fmajorservice1.classList.toggle('service1h');
}

let fmajorservice2 = document.getElementById('fmajorservice2');
let service2h = document.getElementById('service2');
service2h.addEventListener('click', serv2);
function serv2() {
  fmajorservice2.classList.toggle('service2h');
}

let fmajorservice3 = document.getElementById('fmajorservice3');
let service3h = document.getElementById('service3');
service3h.addEventListener('click', serv3);
function serv3() {
  fmajorservice3.classList.toggle('service3h');
}