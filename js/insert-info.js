var insertion_form = document.getElementById('insert-info-form');

var username_input_box = document.getElementById('username-input-box');
var gender_selection_list = document.getElementById('gender-selction-list');
var matric_number_input_box = document.getElementById('matric-number-input-box');

var userDetailsObject = {}



// Listen to input event on matric number input box
matric_number_input_box.addEventListener('input', () => {
	matric_number_input_box.value = matric_number_input_box.value.toUpperCase();
});


insertion_form.addEventListener('submit', (e) => {
	e.preventDefault();

	let matric_number_regex = null;

	userDetailsObject.username = username_input_box.value;
	userDetailsObject.gender = gender_selection_list.value;
	userDetailsObject.matric_number = matric_number_input_box.value;


	let userDetailsObjectJSON = JSON.stringify(userDetailsObject);

	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {

			console.log(this.responseText);

		}
		else {
			// alert(Error-   + xmlhttp.status + ":"  + xmlhttp.statusText);
		}; //end if

	}; //end onreadystate

	xmlhttp.open("POST", "insert-info.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xmlhttp.open("GET", "simpleGreet.php?x=" + obj.table, true);
	xmlhttp.send("newUserDetails=" + userDetailsObjectJSON);

})