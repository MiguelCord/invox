/* NAME: Miguel Cordero
   COURSE: MMP 310
   DATE: 11/6/2016
*/

/*------- Open and close modal. ------*/

var modal = document.getElementById('myModal');
var btn = document.getElementById("container-floating");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*--------- Input and load image -------- */
function main () {
    
    var inputFileToLoad = document.getElementById("modal-input");
    inputFileToLoad.type = "file";
    inputFileToLoad.id = "inputFileToLoad";
    document.getElementById("POST").appendChild(inputFileToLoad);
    
    var buttonLoadFile = document.getElementById("load-input");
    buttonLoadFile.onclick = loadImageFileAsURL;
    buttonLoadFile.textContent = "Load File";
    document.getElementById("POST").appendChild(buttonLoadFile);
}

function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.createElement("img");
                imageLoaded.src = fileLoadedEvent.target.result;
                document.getElementById("POST").appendChild(imageLoaded);
                imageLoaded.className += "inputFileToLoad";
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}

main();

