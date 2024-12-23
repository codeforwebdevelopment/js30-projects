var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");  // not in the ui
var count = 0;
// 3
function inputLength() {
    return input.value.length;
}

//
function listLength() {
    return item.length;
}

// 4
function createListElement() {
    // 4-1
    count++;



    var li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    li.style.color = 'red';
    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field

    // var li1 = document.createElement("span"); // creates an element "li"
    // li1.appendChild(document.createTextNode(count)); //makes text from input field the li text
    // li.appendChild(li1); //adds li to ul

    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    // 4-2
    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH


    // 4-3
    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);

    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD CLASS DELETE


    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("update"));
    li.appendChild(dBtn);

    dBtn.addEventListener("click", updateListItem);

    function updateListItem(event) {
        li.id = "editor";
        li.contentEditable = true;
        // li.innerText = 'fvgsd';
    }

    li.addEventListener("click", updateUi);

    function updateUi() {
        if (document.getElementById("editor")) {
            document.getElementById("editor").addEventListener("input", function () {
                console.log("input event fired");
            }, false);
        }
    }


    li.addEventListener('blur', updateUi2);

    function updateUi2() {
        console.log('updateUi2')
        li.contentEditable = false;
    }
    //END ADD CLASS DELETE
}

// 2
function addListAfterClick() {
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}

// 22
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createListElement();
    }
}

// 1
enterButton.addEventListener("click", addListAfterClick);

// 1-1
input.addEventListener("keypress", addListAfterKeypress);


