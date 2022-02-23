document.querySelector('input[type="submit"]').addEventListener('click', data)




function data(e) {
	e.preventDefault()
	console.log("ok")
	let nev = document.getElementById('name').value

	let email = document.getElementById('email').value
	let msg = document.getElementById('msg').value
	let myFormObj = document.querySelector('form')


 let pers = []
 pers.nev = nev
 pers.email = email
 pers.msg = msg

 console.log(pers)

 document.querySelector('.reply').innerHTML = `Kedves ${nev} ! <br> Köszönjünk, hogy kapcsolata lépett velünk. `

let myFormData = new FormData(myFormObj)
	console.log(myFormData)
	let liStr = ""
	for(let obj of myFormData) {
		console.log(liStr)
		console.log(obj[0], "-", obj[1])
		liStr += `<li>${obj[0]}, "-", ${obj[1]}</li>`
	}

}