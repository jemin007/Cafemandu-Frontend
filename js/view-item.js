(function ($){


$(document).ready(function(){

	$.getJSON('http://localhost:8080/foods', function(res){
		var foods ="";
				foods+="<div class='col-md-4 col-sm-6'>";
				foods+="<div class='single-food'>";
				foods+="<div class='food-img'>";
			$.each(res,function(index) {
				foods+="<img src='http://localhost:8080/upload/"+res[index].image+" class='img-fluid shop-item-image' alt='imgFood'>";
				foods+="</div>";
				foods+="<div class='food-content'>";
				foods+="<div class='d-flex justify-content-between'>";
				foods+="<h5 class='shop-item-title'>"+res[index].name +"</h5>";
				foods+=" <span class='style-change shop-item-price'>" +res[index].price+"</span></div>";
				foods+="<button class='btn btn-primary shop-item-button' type='button' value="+res[index]._id+">Order</button>";
			})
			$('#menu').append(foods);
	})
})
})