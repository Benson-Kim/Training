function ValidateTextBox() {
    if (document.getElementById("txtName").value.trim() == "") {
        alert("Please enter Name!");
        return false;
    }
};

function checkMouseHover() {
    console.log('Mouse hovered');
}