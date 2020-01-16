function addFunctionality() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    let name = document.getElementsByClassName("userName");
    let comment = document.getElementById("userComment");
    console.log("Submitting...");

    if (name[0].value == "") {
      alert("Proporciona tu nombre");
      return false;
    }
    if (comment.value == "") {
      alert("Proporciona tu comentario");
      return false;
    }
    let section = document.getElementsByClassName("seccionComments");
    let newElement = document.createElement("div");
    let heading = document.createElement("h2");
    let com = document.createElement("p");

    heading.innerText = name[0].value;
    com.innerText = comment.value;

    newElement.appendChild(heading);
    newElement.appendChild(com);
    section[0].appendChild(newElement);

    name[0].value = "";
    comment.value = "";
  });
}

function init() {
  addFunctionality();
}

init();
