function refresh(){
    fetch('https://saywhatserver.lamaqdahodwala.repl.co/newestposts')
    .then(response => response.text())
    .then(data => console.log(data))
}