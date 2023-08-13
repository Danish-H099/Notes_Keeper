
showNotes();

let addBtn = document.getElementById("addbtn");


addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

//Notes to show from local Storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index){
        html += ` 
            <div class="crd">
                <h3>Note ${index+1}</h3>
                <p>
                    ${element}
                </p>
                <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
            </div>
        ` // cancatination of string
    });

    let notesElm=document.getElementById("notes");

    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML="<h3>Empty... Nothing to show.</h3>"
    }
}


function deleteNote(id){

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(id,1);
    
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();

}
