showNotes();
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("add-text");
    let addTitle = document.getElementById("addTitle");
    let alert = document.getElementById("alert");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value,
    }
    if (validateTitle(myObj) && validateText(myObj)) {
        notesObj.push(myObj);
        alert.innerHTML = `<div class="fixed-top alert alert-primary" role="alert">
                 Note added!!
    </div>`
    }
    else if (!validateTitle(myObj)) {
        alert.innerHTML = `<div class="fixed-top alert alert-danger" role="alert">
            Note title cannot be empty</div>`

    }
    else {
        alert.innerHTML = `<div class="fixed-top alert alert-danger" role="alert">
                             Note cannnot be empty!!
                            </div>`
    }
    setTimeout(() => {
        alert.innerHTML = ""
    }, 3000);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${index + 1}. ${element.title.toUpperCase()} </h5>
                  <p class="card-text">${element.text}</p>
                  <button id=${index}  class="btn btn-danger" onclick="handleDelete(this.id)">Delete Note</button>
              </div>
          </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `No To-Do`;
    }
}

function handleDelete(index) {
    //   console.log("deleted");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
        // console.log(typeof arr)
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById("searchTxt")
search.addEventListener("input", function () {
    let inputVal = search.value;
    //   console.log("input eventfired" + " " + inputVal);
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt)
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});
function validateTitle(myObj) {
    // let alert = document.getElementById("alert")
    if ((myObj.title.length) > 0) {
        return true
    }
    else {
        return false
    }

}
function validateText(myObj) {
    // let alert = document.getElementById("alert")
    if ((myObj.text.length) > 0) {
        return true
    }
    else {
        return false
    }

}
