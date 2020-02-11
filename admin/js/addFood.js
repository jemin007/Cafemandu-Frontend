window.onload = function () {

	const url = 'http://localhost:3000/foods';
	const foodSubmit = document.getElementById('foodSubmit');
	foodSubmit.addEventListener('click', addFood);

	async function addFood(event){
		const foodName = document.getElementById('foodName').value;
		const foodPrice = document.getElementById('foodPrice').value;
	
		const data = await fetch(url,{
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				image: "",
				name: foodName,
				price: foodPrice
				
			})
		})
		const json = await data.json();
		console.log(json);
		if(json.status == "succesfully uploaded"){
			alert("Food has been succesfully added!");
		}else{
			alert("Failed to add food.");
		}
	}
}