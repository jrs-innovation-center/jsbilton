console.log("Hello")

function sendRequest (event) {
  event.preventDefault()
  var el = event.target
  var msg = document.getElementById("requestMsg")

  server("72.215.25.1", 80, msg.value)
  console.log(msg.value)
}

function sendResponse (event) {
  event.preventDefault()
  var msg = document.getElementById("serverRequest")
  console.log(msg.value)
 if (msg.value.indexOf ("GET") > -1 ) {
   var response = document.getElementById ("serverResponse")
   console.log(response.value)
   console.log("192.168.0.20", 80000, response.value)
 }
}

document
  .getElementById("request")
  .addEventListener("submit", sendRequest)

document
  .getElementById("server")
  .addEventListener("submit", sendResponse)

function server (ip, port, msg) {
  if(ip === "72.215.25.1") {
   console.log("Got Message")
   console.log(msg)
   document.getElementById("serverRequest")
    .value = msg
  return
 }
  console.log("404 Not Found")
}


function client (ip, port, msg){
  if(ip === "192.168.0.20"){
    console.log("got response")
    console.log(response)
    document.getElementById("clientResponse")
      .value = response
    return
  }
  console.log("404 NOT FOUND")
}


