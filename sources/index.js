let toggler = document.getElementById('toggler'),
    toggled = document.getElementById('toggle').style.display

function toggle(){
   if(toggled == "flex"){
      toggled = "none";
   }else{
      toggled = "flex"
   }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
toggler.addEventListener('click', toggle)          