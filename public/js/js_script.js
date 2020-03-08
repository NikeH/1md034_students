let orderButton = document.getElementById('orderButton');

const myFunction = function() {
    let name = document.getElementById('name');
    let mail = document.getElementById('email');
    //let streetname = document.getElementById('streetname');
    //let housenr = document.getElementById('housenr');
    let payment = document.getElementById('payment');
    let genders = document.getElementsByName('gender');

    let gender;
    for (let element in genders) {
        if (genders[element].checked == true) {
            gender = genders[element];
        }
    }

    let answer = [name.value, mail.value, payment.value, gender.value];
    console.log(answer);

}

/*orderButton.addEventListener("click", myFunction);*/