const element =  document.querySelector('.animated.fadeIn');

element.addEventListener('animationend', function() { 
    document.getElementById("arrow").className = 'animated infinite bounce';
})



// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }