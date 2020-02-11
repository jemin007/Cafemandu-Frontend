window.onload = function () {
	// Login
	const url = 'http://localhost:3000/login';
	const loginBtn = document.getElementById('loginBtn');
	loginBtn.addEventListener('click', userLogin);
	
	async function userLogin(event){
		const email = document.getElementById('loginEmail').value;
		const password = document.getElementById('loginPassword').value;

		const data = await fetch(url,{
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
		console.log(json);
		if(json.status == "Login success!"){
			
			// for Giving Current path
			var href = location.href.split('/');
			href.pop();
			href = href.join('/') + '/';
			console.log(href);
			
			// // for opening another page
			window.open(href+"menu.html","_self");

			alert("Login Succesfull!");


		}else{
			alert("Username or Password is incorrect!");
		}
	}

	
}