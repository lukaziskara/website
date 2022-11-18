let addButton;
const languages = ["ქართული", "ინგლისური", "რუსული"];
const inputWordProperties = ["unWord", "trWord", "wordType", "comment"];
const game = document.getElementsByClassName('game');
const aButton = document.getElementById("aButton");
aButton.addEventListener('click', ()=>{
    // ენის ღილაკების დამატება
    addLanguages(languages);
    document.getElementById('alphabet').className = "game1";
    document.getElementById('aButton').style.display= "none";
    document.getElementById('dictionary').style.display = "none";
    for(let i=0; i<inputNames.length; i++){
        // Create a form dynamically
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");

        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("name", "FullName");
        inputElement.setAttribute("placeholder", inputNames[i]);
        inputElement.setAttribute("className", "game1");
        form.appendChild(inputElement);
        document.getElementById("alphabet").appendChild(form);
    }
    // Create button element
    addButton = document.createElement('BUTTON');
    addButton.innerHTML = "დამატება";
    addButton.className = "add-button";
    alphabet.appendChild(addButton);
});
//dButton.addEventListener('click', );
addButton.addEventListener('click', ()=>{

});

function addLanguages(Lan) {
    for(let i=0;i<Lan.length;i++) {
        addButton = document.createElement('BUTTON');
        addButton.innerHTML = Lan[i];
        addButton.className = "add-button";
        alphabet.appendChild(addButton);
        console.log(addButton.className);
    }
}