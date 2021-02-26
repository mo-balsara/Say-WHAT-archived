function createdivs(data){
    let posts = String(data)
    posts = (posts.split(', '))
    for (var i of posts){
        if (i == 'None'){
            continue;
        }
        let div = document.createElement('div')

        
    }
    console.log('request sent')
    
}


function refresh(){
    fetch('https://saywhatserver.lamaqdahodwala.repl.co/newestposts')
    .then(response => response.text())
    .then(data => createdivs(data))
}

function post(){
    unhide('postscreen')
    hide('thingstodo')
    hide('title')
}

function hide(element){
    document.getElementById(element).hidden = true
}

function unhide(element){
    document.getElementById(element).hidden = false
}