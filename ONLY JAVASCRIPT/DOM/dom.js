//let img = document.getElementById('manzakin');
//img.setAttribute('alt' , 'inawamalkkk');
//img.setAttribute('title' , 'ser 9awed');
//img.id = 'hmar';
//img.removeAttribute('id');
//img.removeAttribute('src');
//img.removeAttribute('class');
//img.removeAttribute('alt');
//console.log(img);

//let element = document.getElementById('p2');

//console.log(element.parentElement);

//let hl = document.getElementById('hl');

//hl.innerHTML = '<b>Hello</b>'
//hl.style.backgroundColor = '#444';
//hl.style.color = '#fa0'
//hl.style.padding = '20px';
//hl.style.borderLeft = '15px solid #fa0'

//hl.style.cssText = 'background: #444 ; color: #fa0; padding: 20px; border-left: 15px solid #fa0; font-font-family: ;'
//hl.style.removeProperty('borderLeft');
//hl.style.setProperty('color', 'blue');

//                    html in <js>   1     \\\\
//let container = document.createElement('div');
//let txt = document.createElement('h1');
//let img = document.createElement('img');
//                    html in <js>   2    \\\\
//let tl = document.createTextNode('hello world')
//txt.appendChild(tl);
//img.src = '1.jpg'
//                    html in <js>   3    \\\\
//container.appendChild(txt);
//container.appendChild(img);
//console.log(container);
//document.body.appendChild(container)

//           CREATE CARDS              \\\\
let names = ['Abdu','taha','yahya','Mou4it'];
let ages = ['18 Years old','17 Years old','20 Years old','16 Years old'];
let cont = document.createElement('div');
document.body.appendChild(cont);
cont.style.textAlign = 'center';
 
function element(names,ages){
    let cards = document.createElement('div');
    let name = document.createElement('h1');
    let age = document.createElement('h5');
    let img = document.createElement('img');
    
    img.src = '2.png';
    let nm = document.createTextNode(names);
    let gg = document.createTextNode(ages);
    name.appendChild(nm);
    age.appendChild(gg);

    cards.appendChild(name);
    cards.appendChild(age);
    cards.appendChild(img);


    cont.appendChild(cards); 
    cards.style.width = '200px';
    cards.style.backgroundColor = '#444';
    cards.style.color = '#fa0';
    cards.style.padding = '12px';
    cards.style.margin = '12px';
    cards.style.display = 'inline-block';
    
    

    img.style.width = '100%';
 }
 

 for(let i = 0 ; i < 4 ;i++){
    element(names[i],ages[i]);
 }
//           CREATE CARDS              \\\\

 