var toggler = document.getElementById('toggler')

function toggle(){
   var toggled = document.getElementById('toggle').style.display

   if(toggled == "none"){
      console.log(`changing '${toggled} to 'flex'`)
      document.getElementById('toggle').style = "display : flex"
   }
   else{
      console.log(`changing '${toggled} to 'none'`)
      document.getElementById('toggle').style = "display : none"
   }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
toggler.addEventListener('click', toggle)          