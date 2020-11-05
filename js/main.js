let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

input.addEventListener('change', () => {
    let files = input.files;
    let firstFile = files[0];
    if (files.length == 0) return;
    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        console.log(lines)
        textarea.value=lines.join('\n');
    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(firstFile, "UTF-8");

    readTextFile('./단어장.csv');
});



function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}