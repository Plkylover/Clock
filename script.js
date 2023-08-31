//Defining dates
let dateobj =  new Date()
let date = dateobj.getDate()
let hrs = dateobj.getHours()
let mins = dateobj.getMinutes()
let sec = dateobj.getSeconds()
let month = dateobj.getMonth() + 1
let year = dateobj.getFullYear()
//defining DOM Objects
let h4 = document.getElementsByTagName("h4")
let h1 = document.getElementsByTagName("h1")[0]
//Time updating
setInterval(function() {
 dateobj =  new Date()
 date = dateobj.getDate()
 hrs = dateobj.getHours()
 mins = dateobj.getMinutes()
 sec = dateobj.getSeconds()
 month = dateobj.getMonth() + 1
 year = dateobj.getFullYear()
 h1.innerHTML = `${hrs}:${mins}:${sec}`
 h4[0].innerHTML = `Date - ${date}/${month}/${year}`
},1000)