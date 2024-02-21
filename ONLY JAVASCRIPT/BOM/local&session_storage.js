localStorage.name = 'abdurrahman';
localStorage.age = 25;


localStorage.person =( 'arrw',   JSON.stringify([1,2,3,4,5,6])   )


localStorage.scolopo =   JSON.stringify( {
    name:'omar',
    age:26,
})


console.log(           JSON.parse( localStorage.scolopo ) )

console.log(localStorage.key(0))


localStorage.removeItem('person')
