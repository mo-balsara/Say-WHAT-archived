function createdivs(data){
    data = data.split(',')
    console.log(new Map(JSON.parse(JSON.stringify(Object.entries(data)))))
    console.log(data)
    for (var i in posts){
        if (i == 'None'){
            continue;
        }
        let div = document.createElement('div')
        console.log(i)
        
    }
    console.log('request sent')
    
}

function sendtoserver(){
    let data = {
        title: document.getElementsByTagName('textarea')[0].value,
        author: document.getElementsByTagName('textarea')[1].value,
        story: document.getElementsByTagName('textarea')[2].value
    }
    
    var map = new Map(Object.entries(JSON.parse(JSON.stringify(data))))
    try{
        for (var i of map.values()){
            if (i.length < 10){
                throw new Error()
            }
        }
    } catch {
        alert('One of your text boxes is too short.')
        return;
    }
    
    fetch('https://saywhatserver.lamaqdahodwala.repl.co/post', {
        method: "POST", 
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        cache: 'no-cache',
        body: JSON.stringify(data)
        
    })
    .then(alert('Post created!'))
}

function refresh(){
    
    fetch('https://saywhatserver.lamaqdahodwala.repl.co/newestposts')
    .then(response => response.text())
    .then(data => createdivs(data))

}

function poststory(){
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