
var paragraph = document.getElementsByTagName("p");
alert(paragraph.length);
var bgColors=["red","yellow","green"];
var txtColors=["grey","orange","brown"];
for (var index = 0; index < paragraph.length; index++) {

    paragraph[index].style.backgroundColor = bgColors[index];
    paragraph[index].style.color = txtColors[index];
    paragraph[index].style.fontSize = "40px";
}


