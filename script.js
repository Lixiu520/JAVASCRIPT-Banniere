console.log('connecté!');
console.log("Hello!");
// const cookies= document.getElementsByClassName("cookies");
// const boutonSucces = document.getElementsByClassName("btn-success");
// console.log(boutonSucces);
// boutonSucces.addEventListener('click',function(){
// console.log("bouton cliqué");
// cookies.style.opacity="0";
// });
// const boutonDeny = document.getElementsByClassName("btn-deny");
// console.log(boutonDeny);

// boutonDeny.addEventListener('click',function(){
//     console.log("bouton cliqué");
//     cookies.style.opacity="0";
// });

const btnSuccess = document.querySelector('.btn-success'); 
const btnDeny=document.querySelector('.btn-deny');
const cookies=document.querySelector('.cookies');
function disparaitre(){
    cookies.style.opacity="0";
}
btnSuccess.addEventListener('click',function(){
    disparaitre();
})
btnDeny.addEventListener('click',function(){
    disparaitre();
});
