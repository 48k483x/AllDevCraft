//document.write('Hello World')
//console.log('Hello World')
//window.alert('Hello World')


//document.write('<p> ana manzakon java scriot js </p>')
//document.write('<p> ana manzakon java scriot js </p>')







//let num = 10;




//console.log(Math.floor(10.1))


//let zakah = window.prompt("D5l chhal 5ssk fhad zakkah : " )
//console.log(  0.025 * zakah + ' dirham' )







//let x = 100;
//console.log(typeof x.toString())

//let name = 'omar';
//console.log(name.indexOf("r",2))

//let name = 'omar abdu ana manza';
//console.log(name.slice(2,6))
//console.log(name.substr(2,6))
//console.log(name.substring(2,6))



//let name = 'manzakin da hmad';
//console.log(name.indexOf("d"));
//console.log(name.lastIndexOf("d"));
//console.log(name.includes("d"))
//console.log(name.startsWith("manza"));
//console.log(name.endsWith('n',8));



///                ARRAY                \\\

//let names = ["ana","ahmed","manzakin","omar"]
//names[0] = 'abdurrahman'
//console.log(names.length)

//let names = ["ana","ahmed","manzakin","omar"]
//names.push(0,"abdu", "manzakin")
//names.unshift("inaza","9asseh")
//console.log( names.pop())  
//console.log(names.shift())
//console.log(names)

//let names = ["ana","ahmed","manzakin","omar"]
//names.splice(0,1,"manza")
//console.log(names.slice(0,2))
//console.log(names)

//let names = ["ana","ahmed","manzakin","omar","ila","4ina"]
//console.log(names.indexOf('ahmed', 2))
//console.log(names.includes('ana',1))

//let arr = [5,1,6,3,2,7,4,8,9]
//console.log(arr.reverse())
//console.log(arr.sort())

//let arr1 = ["ana","ahmed","manzakin"]
//let arr2 = ["omar","ila","4ina"]
//arr1 += arr2
//console.log(typeof arr1)
//console.log(arr1.concat(arr2))
//console.log(arr1.join("--") )




///               Conditions                \\\

//let ask_mail = prompt('Enter your school mail : ')
//let mail = 'dev104@ofppt.ma'
//console.log(ask_mail.toLowerCase().trim() == mail)

//let product = 'Samsung-TV';
//let size = 50;
//let price = 5000;
//console.log(price <= 5000 || size != 50)

//let n1 = prompt('Enter your first num : ')
//let n2 = prompt('Enter your second num : ')
//if (n1 <= n2 )
//{
//    console.log(`manzakin_to_this_game`)
//}

//let n1 = prompt('Enter your first num : ')
//let n2 = prompt('Enter your second num : ')
//let nn = n1 + n2
//if(n1 == 100 || n2 == 100  )
//{
//    console.log('True')
//}
//else
//    {
//        console.log('False')
//    }

//let age = prompt('Whats your age : ')
//let result = age > 18? 'Hello User' :age == 18? 'You are 18 now!!!'
//:'sorry you cant access';
//console.log(result)

//let role = prompt('Whats your role : ')
//switch(role)
//{
//    case ('admin') :
//        document.write('read','eat','pipi')
//        break;
//    case ('moniteur'):
//       document.write('read','eat')
//        break;
//    case ('noone'):
//        document.write('read')
//        break;
//    default : 
//    document.write('you do not have any access of these')    
//}






///               Loops                \\\

//for(let i = 0; i <= 3 ; i++)
//{
//    console.log('ahmed ' + i)
//}

let names = ["ana","ahmed","manzakin","inawa"]
let x = 'abdurrahman'

for(i = names.length;i => 0;i--)
{
    console.log(names[i])
}