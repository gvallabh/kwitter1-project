function addUser(){
    people_name=document.getElementById("people_name").value;
 
    localStorage.setItem("people_name",people_name);
    
    window.location="kwitter_room.html";
    


}