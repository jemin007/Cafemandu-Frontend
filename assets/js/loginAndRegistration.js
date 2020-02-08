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

		// console.log(fullName, email, telephone, address, gender, password);

		const data = await fetch({
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				image: "",
				fullName: fullName,
				email: email,
				telephone: telephone,
				address: address,
				phone: phone,
				password: password
			})
		})
		const json = await data.json();
		console.log(json);
		if(json.isSuccess == true){
			alert(json.message);
		}else{
			alert(json.message);
		}
	}
}