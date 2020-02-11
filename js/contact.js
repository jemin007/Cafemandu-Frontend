window.onload = function () {
	// Login
	const url = 'http://localhost:3000/contacts';
	const contactBtn = document.getElementById('contactBtn');
	contactBtn.addEventListener('click', contactSubmit);

	async function contactSubmit(event){
		const contactEmail = document.getElementById('contactEmail').value;
		const contactText = document.getElementById('contactText').value;
		const data = await fetch(url,{
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				
				email: contactEmail,
				description: contactText
			})
		})
		const json = await data.json();
		console.log(json);
		if(json.status == "Succesfully added"){
			console.log("here");
			alert("Contact has been added!");
		}else{
			alert("Failed to post your contact!");
		}
	}
}