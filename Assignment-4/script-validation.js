


function validateFirstName(fnameObject) {

    var regExName = /^[a-zA-Z]+$/;
    const errorBlockID = "errorFirstName";

    if(!fnameObject.value.trim().match(regExName)) {
        fnameObject.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        fnameObject.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};

function validateLastName(object) {

    var regExLastName = /^[a-zA-Z]+$/;
    const errorBlockID = "errorLastName";

    if(!object.value.trim().match(regExLastName)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validateEmail(object) {

    const regExEmail = /^\w+([\.-]?\w+)*@northeastern.edu$/;

    const errorBlockID = "errorEmail";

    if(!object.value.trim().match(regExEmail)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validatePhone(object) {

    const phoneRegex = '^[0-9]{3}-[0-9]{3}-[0-9]{4}$';
    const errorBlockID = "errorphonenumber";

    if(!object.value.trim().match(phoneRegex)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }

};


function validateZipCode(object) {

    var regExZip = /^([0-9]{5})$/;

    const errorBlockID = "errorzipcode";

    if(!object.value.trim().match(regExZip)) {
        object.style.border = "2px solid red";
        document.getElementById(errorBlockID).style.display = "block";
    } else {
        object.style.border = "";
        document.getElementById(errorBlockID).style.display = "none";
    }


};

document.getElementById("submit").onclick = onSubmit;


function onSubmit() {


    const isValidate = checkIfAllRequiredFieldsAreSet();
    const checkNoErrorBlocks = checkIfAllErrorBlocksAreCleared();
    if (isValidate) {
        alert("Please fill all the required details marked as asterisk.");
    } else if(checkNoErrorBlocks){
        alert("Please resolve all errors");
    } else {
        // proceed with execution

        //add rows to table

        var table = document.getElementById("resultTable");

        var row1 = table.insertRow(-1);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        cell1.innerText = "Full Name";
        cell2.innerText = document.getElementsByName("firstName")[0].value + " " + document.getElementsByName("lastName")[0].value;


        var row2 = table.insertRow(-1);
        var cell2A = row2.insertCell(0);
        var cell2B = row2.insertCell(1);
        cell2A.innerText = "Email";
        cell2B.innerText = " " +  document.getElementsByName("emailId")[0].value;


        var row3 = table.insertRow(-1);
        var cell3A = row3.insertCell(0);
        var cell3B = row3.insertCell(1);
        cell3A.innerText = "Phone No";
        cell3B.innerText = " " + document.getElementsByName("phoneNumber")[0].value;

        var row4 = table.insertRow(-1);
        var cell4A = row4.insertCell(0);
        var cell4B = row4.insertCell(1);
        cell4A.innerText = "streetAddress1";
        cell4B.innerText = document.getElementById("streetAddress1").value + "  "; 

        var row5 = table.insertRow(-1);
        var cell5A = row5.insertCell(0);
        var cell5B = row5.insertCell(1);
        cell5A.innerText = "streetAddress2";
        cell5B.innerText = document.getElementById("streetAddress2").value + "  "; 
        
        var row6 = table.insertRow(-1);
        var cell6A = row6.insertCell(0);
        var cell6B = row6.insertCell(1);
        cell6A.innerText = "city";
        cell6B.innerText = document.getElementById("city").value + " ";
        
        var row7 = table.insertRow(-1);
        var cell7A = row7.insertCell(0);
        var cell7B = row7.insertCell(1);
        cell7A.innerText = "state";
        cell7B.innerText = document.getElementById("state").value + "  ";
    
        var row8 = table.insertRow(-1);
        var cell8A = row8.insertCell(0);
        var cell8B = row8.insertCell(1);
        cell8A.innerText = "zipcode";
        cell8B.innerText = document.getElementById("zipcode").value + "  ";
        

        var row9 = table.insertRow(-1);
        var cell9A = row9.insertCell(0);
        var cell9B = row9.insertCell(1);
        cell9A.innerText = "Drink Information";
        cell9B.innerText = validateDrinkName();


        var row10 = table.insertRow(-1);
        var cell10A = row10.insertCell(0);
        var cell10B = row10.insertCell(1);
        cell10A.innerText = "Source";
        cell10B.innerText = validateSource();


        var row11 = table.insertRow(-1);
        var cell11A = row11.insertCell(0);
        var cell11B = row11.insertCell(1);
        cell11A.innerText = "Comments";
        cell11B.innerText = document.getElementById("comments").value;

        // display true
        table.style.display = "block";

        // ends with reset 
        onReset()

    }
   

}

function checkIfAllErrorBlocksAreCleared() {

   var divCollection = document.getElementsByTagName("main")[0].getElementsByTagName("div");
   var isErrorVisible = false;
   for (var i = 0; i < divCollection.length; i++) {
    if (divCollection[i].style.display === "block") {
        isErrorVisible = true;
        return true;
    }
   }
   return isErrorVisible;


}


function onReset() {

    //reseting alues

    resetTitle();
    document.getElementsByName("firstName")[0].value = "";
    document.getElementsByName("lastName")[0].value = "";
    document.getElementsByName("emailId")[0].value = "";
    document.getElementsByName("phoneNumber")[0].value = "";
    document.getElementsByName("zipcode")[0].value = "";
  
    document.getElementById("streetAddress1").value = "";
    document.getElementById("streetAddress2").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zipcode").value = "";
    resetSource();
    document.getElementById("comments").value = "";
    document.getElementById("coffee").selectedIndex = -1;
    resetCoffeeSize();
    document.getElementById("additionalInstructions").value = "";


    //restting error blocks
    
    document.getElementById('errorTitle').style.display = 'none';
    document.getElementById('errorFirstName').style.display = 'none';
    document.getElementById('errorLastName').style.display = 'none';
    document.getElementById('errorEmail').style.display = 'none';
    document.getElementById('errorphonenumber').style.display = 'none';
    document.getElementById('errorzipcode').style.display = 'none';
    8
 


}

function checkIfAllRequiredFieldsAreSet() {

    try {
        var title = validateTitle();
        var firstname = document.getElementsByName("firstName")[0].value;
        var lastname = document.getElementsByName("lastName")[0].value;
        var emailAddress = document.getElementsByName("emailId")[0].value;
        var phone = document.getElementsByName("phoneNumber")[0].value;
        var zipcode = document.getElementsByName("zipcode")[0].value;
      
        var addinfo =  document.getElementById("streetAddress1").value;
        //var addinfo1 =  document.getElementById("streetAddress2").value;
        var city =  document.getElementById("city").value;
        var state =  document.getElementById("state").value;
        var zipcode =  document.getElementById("zipcode").value;
        var source = validateSource();
        var comments =  document.getElementById("comments").value;
        var drinkName = validateDrinkName();
    
        console.log(title, state, zipcode, source, comments, firstname, lastname, emailAddress, phone, addinfo, source);
        if(title =="" || firstname ==""|| lastname ==""|| emailAddress ==""|| phone ==""|| zipcode ==""||
        addinfo =="" || city =="" || state =="" || source == "" || drinkName == ""){
            return true;
        } else {
            return false;
        }
    }
 catch (e) {
    console.log(e);
    return true;
   
 }   
}

function validateDrinkName() {

    var drinkname = document.getElementById("coffee").value;
    var size = checkCoffeeSize();
    var addInst = document.getElementById("additionalInstructions").value;

    if(drinkname == "" || size == "" || addInst == "") {
        alert("please fill drink details correctly");
        return "";
    } else {
        return drinkname + " " + size + " " + addInst;
    }

}

function checkCoffeeSize() {

 
    const inputSourceCollection = document.getElementsByName('coffeSize');
    var isAnyTitleChecked = "";

    for (var i =0; i<inputSourceCollection.length; i++) {
        var isChecked = inputSourceCollection[i].checked;
        if (isChecked) {
            isAnyTitleChecked = inputSourceCollection[i].value;
            break;
        }
    }


    return isAnyTitleChecked;


}

function afterDropdownSelectEvent() {

    var selectedIndex = document.getElementById("coffee").selectedIndex;

    if(selectedIndex > 0) {
        document.getElementById("coffeeExpanded").style.display = "block";
        document.getElementById("errorCoffeeSize").style.display = "block";
    } else {
        document.getElementById("coffeeExpanded").style.display = "none";
   
    }
}


function validateCoffeeSize(inputObj) {
    if (inputObj.checked) {
        document.getElementById("cofeeSizeExpanded").style.display = "block";
        document.getElementById("errorCoffeeSize").style.display = "none";
        document.getElementById("errorAddInstructions").style.display = "block";

        
    } else {
        document.getElementById("cofeeSizeExpanded").style.display = "none";
    }


}

function validateAddInst() {

    if (document.getElementById("additionalInstructions").value.length === 0) {
        document.getElementById("errorAddInstructions").style.display = "block";

    } else {
        document.getElementById("errorAddInstructions").style.display = "none";


    }



}
function validateAddComments() {

    if (document.getElementById("comments").value.length === 0) {
        document.getElementById("errorAddComments").style.display = "block";

    } else {
        document.getElementById("errorAddComments").style.display = "none";


    }



}
function validateForm() {

    
    var titleValid = validateTitle();
    


}

function validateTitle() {

    const inputTitleCollection = document.getElementsByName('title');
    var isAnyTitleChecked = "";

    for (var i =0; i<inputTitleCollection.length; i++) {
        var isChecked = inputTitleCollection[i].checked;
        if (isChecked) {
            isAnyTitleChecked = inputTitleCollection[i].value;
            break;
        }
    }


    return isAnyTitleChecked;
}

function resetTitle() {

    const inputSourceCollection = document.getElementsByName('title');

    for (var i =0; i<inputSourceCollection.length; i++) {
        inputSourceCollection[i].checked = false;
    }


}


function validateSource() {

    const inputSourceCollection = document.getElementsByName('source');
    var isAnyTitleChecked = "";

    for (var i =0; i<inputSourceCollection.length; i++) {
        var isChecked = inputSourceCollection[i].checked;
        if (isChecked) {
            isAnyTitleChecked = inputSourceCollection[i].value;
            break;
        }
    }


    return isAnyTitleChecked;
}

function resetSource() {

    const inputSourceCollection = document.getElementsByName('source');

    for (var i =0; i<inputSourceCollection.length; i++) {
        inputSourceCollection[i].checked = false;
    }


}

function resetCoffeeSize() {

    const inputSourceCollection = document.getElementsByName('coffeSize');

    for (var i =0; i<inputSourceCollection.length; i++) {
        inputSourceCollection[i].checked = false;
    }


}


