// GO!
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
// TASK 1 -- Show/Hide Nav
var navBarTrick = document.querySelector(".answer-box button").addEventListener('click', function(){
var navBarEvent = document.querySelector('.nav-menu')
var magic = 'nav-menu-hidden'
// you can also use the .toggle() method to switch between the 'nav-menu-hidden' class on every click
// .toggle appears to be the easier way and with less code to decihper through, takese css properties and toggles displays//
   if (navBarEvent.classList.contains(magic) !== true)
      {navBarEvent.classList.add(magic)}
    else
      {navBarEvent.classList.remove(magic)}
})
// TASK 2 -- Select an Icon
var selectedOrNot = document.querySelectorAll(".wish-list div")

   forEach(selectedOrNot, function(elementSelected, index, array){
   elementSelected.addEventListener("click", function(evnt){
      var clicked = "option selected"
      var notClicked = "option"
      if(evnt.currentTarget.className !== clicked){
         evnt.currentTarget.className = clicked
      } else {
         evnt.currentTarget.className = notClicked
      }
   })
})
// TASK 3 -- Move Item From List to List

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
