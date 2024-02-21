var manza = document.getElementById('tb');


    var students = [
        {
            name: 'Abdurrahman',
            age: 18 ,
            year: 2004,
        },
        {
            name: 'Yahya',
            age: 20 ,
            year: 2002,
        },
        {
            name: 'Taha',
            age: 17 ,
            year: 2005,
        },
        {
            name: 'Moughit',
            age: 16 ,
            year: 2007,
        },
        {
            name: 'Sanda5',
            age: 17 ,
            year: 2006,
        }
    ];
     for(st of students){
        manza.innerHTML += `<tr>        
                                <td>${st.name} </td>  
                                <td>${st.age} </td> 
                                <td>${st.year} </td>      
                            </tr>`
     }