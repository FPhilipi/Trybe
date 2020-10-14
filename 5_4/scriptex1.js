window.onload = function() {

    // document.body.style.backgroundColor = localStorage.getItem("BgColor");
    // document.body.style.font = localStorage.getItem("FontColor");
    // document.body.style.fontSize = localStorage.getItem("FontSize");
}

function changeBackgroundColor() {
    let newBackgroundColor = document.getElementById("input-background-color").value;
    document.body.style.backgroundColor = `${newBackgroundColor}`;
    
    localStorage.setItem("BgColor", newBackgroundColor);
}

function changeFontColor() {
    let newFontColor = document.getElementById("input-font-color").value;
    console.log(newFontColor);
    document.body.style.color = `${newFontColor}`;

    localStorage.setItem("FontColor", newFontColor);
}

function changeFontSize() {
    let newFontSize = `${document.getElementById("input-font-size").value}px`;
    document.body.style.fontSize = newFontSize;

    localStorage.setItem("FontSize", newFontSize);
}