var retrieve_button = document.getElementById('retrieve-button');
var retrieval_form = document.getElementById('retrieval-form');
var students_name_field = document.getElementById('students-name');
var sql_result_div = document.getElementById('sql-result-div')

retrieval_form.onsubmit = (e) => {
  e.preventDefault();
  // return false;
  // alert(students_name_field.value);
  // console.log(typeof (students_name_field.value));

  processInfoWithName(students_name_field.value);
}



function processInfoWithName(name) {
  sql_result_div.innerHTML = '';

  let obj = { "username": name };
  let yy = JSON.stringify(obj);

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let filteredPersonInfo = JSON.parse(this.responseText);

      // console.log(filteredPersonInfo);
      if (filteredPersonInfo.length > 0) {
        let filteredPersonInfoObject = filteredPersonInfo[0];
        for (let i in filteredPersonInfoObject) {
          sql_result_div.innerHTML += '<h4>' + filteredPersonInfoObject[i] + '</h4>';
        }
      }
      else {
        sql_result_div.innerHTML += '<h4>' + 'Student Information not found' + '</h4>';
        setTimeout(() => {
          sql_result_div.innerHTML = '';
        }, 3500)
      }


    } else {
      // alert(Error-   + xmlhttp.status + ":"  + xmlhttp.statusText);
    }; //end if

  }; //end onreadystate

  xmlhttp.open("POST", "php/retrieve-info.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //xmlhttp.open("GET", "simpleGreet.php?x=" + obj.table, true);
  xmlhttp.send("uname=" + yy);
}



function ciEquals(a, b) {
  return typeof a === 'string' && typeof b === 'string'
    ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
    : a === b;
}