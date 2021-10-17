'use strict'
document.body.style.padding = '0px';
document.body.style.margin = '0px';
// create container 
var myContainer = document.createElement('div');

myContainer.className = 'Container';
document.body.appendChild(myContainer);
// style container 
myContainer.style.height = '100vh';
myContainer.style.width = '100%';
myContainer.style.backgroundImage = 'url(images/background.png)';
myContainer.style.backgroundPosition = 'center';
myContainer.style.backgroundSize = 'cover';
myContainer.style.paddingLeft = '5%';
myContainer.style.paddingRight = '5%';
myContainer.style.boxSizing = 'border-box';
myContainer.style.position = 'relative';

// crate navbar
 var mynavbar = document.createElement('div');
 mynavbar.className = 'navbar'
 mynavbar.style.width = '100%';
 mynavbar.style.height = '15vh';
 mynavbar.style.margin = 'auto';
 mynavbar.style.display = 'flex';
 mynavbar.style.alignItems = 'center';

// creat img
var myIMG = document.createElement('img');
var myAtt = document.createAttribute('src');
 
myAtt.value = "images/logo.png";
myIMG.setAttributeNode(myAtt);
mynavbar.appendChild(myIMG);


myIMG.style.width = '160px';


myContainer.appendChild(mynavbar);
// craete nav
 var mynav = document.createElement('nav');


 var myList = document.createElement('ul');
 const text = ["Home" , "About" , "Category" , "collaction"];
 var myLi;
 text.forEach(element => {
     myLi= document.createElement('li');
     var txt = document.createTextNode(element);
     myLi.appendChild(txt);
     myList.appendChild(myLi);
     myLi.style.display = 'inline-block';
     myLi.style.margin = '0px 20px';
     myLi.style.color = 'rgb(44, 41, 41)';
 });


 mynavbar.appendChild(mynav);
 mynav.appendChild(myList);

 //style list
 mynav.style.flex = '1';
 mynav.style.paddingLeft ='30px';

 // creat imageCart

 var myCart = document.createElement('img');
 var myAttCart = document.createAttribute('src');
 myCart.className = 'cart';
 myAttCart.value = "images/cart.png";
 myCart.setAttributeNode(myAttCart);
mynavbar.appendChild(myCart);

myCart.style.width = '40px';


// craete content 
 var myContent = document.createElement('div');

 myContent.classNama = 'content';
 document.body.appendChild(myContent);
 
 myContent.style.marginLeft='10%';
 myContent.style.marginTop='10%';
 // create alink
 var myLinke = document.createElement('a');
 var textLinke = document.createTextNode('2020 collection');

 myLinke.appendChild(textLinke);
 myContent.appendChild(myLinke);

 myLinke.style.display = 'inline-block';
 myLinke.style.background = 'linear-gradient(45deg, #87adfe , #ff77cd';
 myLinke.style.border = '6px';
 myLinke.style. padding ='10px 20px';
 myLinke.style.boxSizing ='border-box';
 myLinke.style.textDecoration='none';
 myLinke.style.color='#fff';
 myLinke.style.boxShadow='3px 8px 22px rgba(94, 28, 68, 0.15)';

 // create h1 and its text

 var myH1 =document.createElement('h1');
 var textH1 = document.createTextNode('You are always pretty');

 myH1.appendChild(textH1);
 myContent.appendChild(myH1);

 myH1.style.fontSize = '60px';
 myH1.style.fontWeight= '100';
 myH1.style.marginBottom = '15px';
 myH1.style.marginTop = '24px'
 myH1.style.color = '#232d60';

 // create paraghraph
  var myP =document.createElement('p');
  var textP =document.createTextNode('Clothes that are sure to heat up with winter') ;
  myP.appendChild(textP);
  myContent.appendChild(myP);
  myP.style.fontSize="20px";
  myP.style.color='#6a7199';
 myContainer.appendChild(myContent);

 //create featured-img
 var myFeatured = document.createElement('img');
 var myAttFeatured = document.createAttribute('src');
 myFeatured.className = 'featured-img';
 myAttFeatured.value = "images/img.png";
 myFeatured.setAttributeNode(myAttFeatured);
 myContent.appendChild(myFeatured);


 myFeatured.style.height= "90%";
 myFeatured.style.position = 'absolute';
 myFeatured.style.bottom ='0';
 myFeatured.style.right ='160px';

 // arrow-icons
  var mydiv = document.createElement('div');
  mydiv.className = 'arrow-icons';

  var back = document.createElement('img');
  var myAttback = document.createAttribute('src');
  myAttback.value = "images/back-arrow.png";
  back.setAttributeNode(myAttback);
  mydiv.appendChild(back);

  var next = document.createElement('img');
  var myAttnext = document.createAttribute('src');
  myAttnext.value = "images/next-arrow.png";
  next.setAttributeNode(myAttnext);
  mydiv.appendChild(next);
  mydiv.style.marginTop ='40px';
  mydiv.style.display='flex';
  
  back.style.width='40px';
  back.style.marginRight='25px';
  next.style.width='40px';
  next.style.marginRight='25px';

  myContent.appendChild(mydiv);



  

 

 
 
 
 
