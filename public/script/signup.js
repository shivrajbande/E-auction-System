document.getElementById("submit").addEventListener('click',fun);



function fun()
{
const password = document.getElementById("Password").value;
console.log(password);
console.log("hii");

const confirm_password = document.getElementById("confirm").value;
console.log(confirm_password);
if(password!=confirm_password)
{
    const p = document.getElementById("write");
    p.innerText = "wrong password";
}

}
