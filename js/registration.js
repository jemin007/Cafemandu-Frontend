window.onload = function () {
	// Login
	const url = 'http://localhost:3000/signup';
	const registerBtn = document.getElementById('registrationBtn');
	registerBtn.addEventListener('click', userRegistration);

	async function userRegistration(event){
		const fullName = document.getElementById('signName').value;
		const email = document.getElementById('signEmail').value;
		const address = document.getElementById('signAddress').value;
		const phone = document.getElementById('signPhone').value;
		const password = document.getElementById('signPassword').value;
		const image = document.getElementById('signImage').value;

		// console.log(fullName, email, telephone, address, gender, password);

		const data = await fetch(url,{
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				image: "",
				fullName: fullName,
				email: email,
				address: address,
				phone: phone,
				password: password
			})
		})
		const json = await data.json();
		console.log(json);
		if(json.status == "Signup success!"){
			alert("Signup Succesfull!");
		}else{
			alert("Sign up failed!");
		}
	}
}