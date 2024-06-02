var mybutton = document.querySelector("#clear-btn");

mybutton.addEventListener("click", function(event) {
    var elements = document.getElementsByClassName("dot");
    for (var index = elements.length - 1; index >= 0; index--) {
        elements[index].parentNode.removeChild(elements[index]);
    }
    event.stopPropagation();
});
addEventListener("click", function(event) {
    if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'LABEL') {
        var dot = document.createElement("div");
        var color = document.getElementById("color").value;
        var size = document.getElementById("size").value;
        dot.className = "dot";
        dot.style.left = (event.pageX - size / 2) + "px";
        dot.style.top = (event.pageY - size / 2) + "px";
        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.backgroundColor = color;
        document.body.appendChild(dot);
    }
});

