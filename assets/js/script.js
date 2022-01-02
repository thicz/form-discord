function validation() {
    let email = document.querySelector('.email--phone input').value;
    let password = document.querySelector('.password input').value;

    if(email == '') {
        document.querySelector('.email--phone input').style.border = '1px solid #f74e4e';
        document.querySelector('.email--phone p').style.color = '#f74e4e';
        document.querySelector('.email--phone p').innerHTML = `<b>EMAIL</b> - <i>This field is required</i>`;
    } else {
        document.querySelector('.email--phone input').style.border = '1px solid #242629';
        document.querySelector('.email--phone p').style.color = '#b9bbbe';
        document.querySelector('.email--phone p').innerHTML = `<b>PASSWORD</b>`;
    }

    if(password.length <= 7) {
        document.querySelector('.password input').style.border = '1px solid #f74e4e';
        document.querySelector('.password p').style.color = '#f74e4e';
        document.querySelector('.password p').innerHTML = `<b>PASSWORD</b> - <i>This field is required</i>`;
    } else {
        document.querySelector('.password input').style.border = '1px solid #242629';
        document.querySelector('.password p').style.color = '#b9bbbe';
        document.querySelector('.password p').innerHTML = `<b>PASSWORD</b>`;
    }

}

document.querySelector('.submit').addEventListener('click', validation)