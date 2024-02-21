var n = prompt('entrer le nombre des etudiants:'),
dev104 = [n], i;

    for (i=0;i<n;i++){
        dev104[i] =  prompt(" entrer un nom:");
    }
    dev104.unshift('hi');
    dev104.push('bye');
    alert(dev104);


