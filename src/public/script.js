function createdivs(data){
    let posts = String(data)
    posts = (posts.split(', '))
    for (var i of posts){
        if (i == 'None'){
            continue;
        }
        let div = document.createElement('div')

        
    }
    
}


function refresh(){
    fetch('https://saywhatserver.lamaqdahodwala.repl.co/newestposts')
    .then(response => response.text())
    .then(data => createdivs(data))
}

function post(){
    
}