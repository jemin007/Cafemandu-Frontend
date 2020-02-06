window.onload = function () {
	// Login
	const url = 'http://localhost:3000/user';
	const loginBtn = document.getElementById('loginBtn');
	loginBtn.addEventListener('click', userLogin);
	
	async function userLogin(event){
		const email = document.getElementById('loginEmail').value;
		const password = document.getElementById('loginPassword').value;

		const data = await fetch(url+'/login',{
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				email: email,
				password: password
			})
		})
		const json = await data.json();
		// console.log(json);
		if(json.isSuccess == true){
			
			// for Giving Current path
			var href = location.href.split('/');
			href.pop();
			href = href.join('/') + '/';
			console.log(href);
			
			// for opening another page
			window.open(href+"contact.html","_self");

			alert(json.message);


		}else{
			alert(json.message);
		}
	}

	// Registration
	const registerBtn = document.getElementById('registrationBtn');
	registerBtn.addEventListener('click', userRegistration);

	async function userRegistration(event){
		const fullName = document.getElementById('signupName').value;
		const email = document.getElementById('signupEmail').value;
		const telephone = document.getElementById('signupTelephone').value;
		const address = document.getElementById('signupAddress').value;
		const gender = document.getElementById('gender').value;
		const password = document.getElementById('signupPassword').value;

		// console.log(fullName, email, telephone, address, gender, password);

		const data = await fetch(url+'/',{
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
				gender: gender,
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