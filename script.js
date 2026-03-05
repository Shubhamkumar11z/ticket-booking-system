let totalSeats = 100
let locked = false

const output = document.getElementById("output")

function print(text){
output.textContent += text + "\n"
}

print("node booking-system.js")
print("Booking system running on port 3000")

function bookTicket(){

let tickets = parseInt(document.getElementById("tickets").value)

if(locked){
print("Seat currently locked. Try again...")
return
}

locked = true

setTimeout(()=>{

if(tickets <= totalSeats){

totalSeats -= tickets

let bookingId = Date.now()

print("POST //api/book 200")
print("{")
print(` "success": true,`)
print(` "bookingId": ${bookingId},`)
print(` "remaining": ${totalSeats}`)
print("}")

}else{

print("POST //api/book 400")
print("{ 'success': false, 'message': 'Not enough seats' }")

}

locked = false

},500)

}

function simulateLoad(){

for(let i=0;i<5;i++){

setTimeout(()=>{
document.getElementById("tickets").value = 1
bookTicket()
},i*200)

}

}
