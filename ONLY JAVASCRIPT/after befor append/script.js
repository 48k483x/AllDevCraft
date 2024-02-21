let after = document.getElementById('after');
let before = document.getElementById('before');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');

after.onclick = function(){
    container.after(content)
}
before.onclick = function(){
    container.before(content)
}
append.onclick = function(){
    container.append(content)
}

