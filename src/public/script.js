function refresh(){
    fetch('https://saywhatserver.lamaqdahodwala.repl.co')
    .then(response => response.json())
    .then(data => console.log(data))
}