function ht(){
    var q = parseInt(prompt("entrer la quantite ")),
    pu= parseFloat(prompt("entrer le prix unitaire : ")),
     ht;
     ht = pu*q;
     ht = ht.toFixed(2)
     alert("le prix hors tax : " + ht);
  }function tva(){
    var q = parseInt(prompt("entrer la quantite ")),
    pu= parseFloat(prompt("entrer le prix unitaire : ")),
     tva;
     tva = pu*q*0.2;
     tva = tva.toFixed(2)
     alert("TVA : " + tva);
  }
  function ttc(){
    var q = parseInt(prompt("entrer la quantite ")),
    pu= parseFloat(prompt("entrer le prix unitaire : ")),
    ttc;
    ttc = pu*q*1.2;
    ttc = ttc.toFixed(2)
    alert("le prix touts taxe comris : " + ttc);
  }
  function erreur(){
   alert("erreur de choix, svp choisissez(h, t ou c)");
  }
  var c = prompt("choisir entre(h, t ou c)"),i,n;
  n = prompt("entrer le nombre des produits:");
  for (i = 0; i < n; i++){
  switch (c) {
   case 'H': case 'h':
   ht();
   break;
   
  
   case 'C':case 'c': 
   ttc();
   break;
  
   case 'T':case 't':
   tva();
   break;
   default : erreur();
   break;
   
  }
  
  }
  