let num11 = 0, num12 = 0, num21 = 0, num22 = 0, num23 = 0, num24 = 0, num25 = 0, num26 = 0
let count = 0, interval, blockFlag = false
let type1num11 = document.getElementById("type1num11")
let type1num12 = document.getElementById("type1num12")
let type1num13 = document.getElementById("type1num13")
let type1num21 = document.getElementById("type1num21")
let type1num22 = document.getElementById("type1num22")
let type1num23 = document.getElementById("type1num23")

let type2num11 = document.getElementById("type2num11")
let type2num12 = document.getElementById("type2num12")
let type2num21 = document.getElementById("type2num21")
let type2num22 = document.getElementById("type2num22")
let type2num31 = document.getElementById("type2num31")
let type2num32 = document.getElementById("type2num32")
let type2num41 = document.getElementById("type2num41")
let type2num42 = document.getElementById("type2num42")
let type2num51 = document.getElementById("type2num51")
let type2num52 = document.getElementById("type2num52")
let type2num61 = document.getElementById("type2num61")
let type2num62 = document.getElementById("type2num62")

function quay()
{
    count++
    if(count%2 == 0)
    {
        document.getElementById("quay").innerHTML = "QUAY"
        clearInterval(interval)
        document.getElementById("music").pause()
    } 
    else 
    {
        document.getElementById("quay").innerHTML = "CHỐT"
        interval = setInterval(select,10)
        document.getElementById("music").play()
    }
}
function select()
{
    num11 = Math.floor(Math.random() * 1000)
    num12 = Math.floor(Math.random() * 1000)
    num21 = Math.floor(Math.random() * 56)
    num22 = Math.floor(Math.random() * 56)
    num23 = Math.floor(Math.random() * 56)
    num24 = Math.floor(Math.random() * 56)
    num25 = Math.floor(Math.random() * 56)
    num26 = Math.floor(Math.random() * 56)
    display()
}
function display()
{
    type1num11.innerHTML = Number.parseInt(num11/100)
    type1num12.innerHTML = Number.parseInt((num11-Number.parseInt(num11/100) * 100)/10)
    type1num13.innerHTML = num11%10
    type1num21.innerHTML = Number.parseInt(num12/100)
    type1num22.innerHTML = Number.parseInt((num12-Number.parseInt(num12/100) * 100)/10)
    type1num23.innerHTML = num12%10

    type2num11.innerHTML = Number.parseInt((num21-Number.parseInt(num21/100) * 100)/10)
    type2num12.innerHTML = num21%10
    type2num21.innerHTML = Number.parseInt((num22-Number.parseInt(num22/100) * 100)/10)
    type2num22.innerHTML = num22%10
    type2num31.innerHTML = Number.parseInt((num23-Number.parseInt(num23/100) * 100)/10)
    type2num32.innerHTML = num23%10
    type2num41.innerHTML = Number.parseInt((num24-Number.parseInt(num24/100) * 100)/10)
    type2num42.innerHTML = num24%10
    type2num51.innerHTML = Number.parseInt((num25-Number.parseInt(num25/100) * 100)/10)
    type2num52.innerHTML = num25%10
    type2num61.innerHTML = Number.parseInt((num26-Number.parseInt(num26/100) * 100)/10)
    type2num62.innerHTML = num26%10
    console.log(num21 + "-" + num22 + "-" + num23 + "-" + num24 + "-" + num25 + "-" + num26)
}
