// $(document).ready(function(){
//     $(".burger").click(function(event){
//         $(".burger, .menu").toggleClass("active")
//     });
// });
let burger = document.querySelector('.burger');

burger.onclick = function() {
    
    if(burger.classList.contains('active')){
        burger.classList.remove('active');
    }
    else{
        burger.classList.add('active');
    }
}