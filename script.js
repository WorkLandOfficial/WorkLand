function copy()
{
    var element = document.getElementById("ip");
    var prevText = element.innerText;
    navigator.clipboard.writeText(element.innerText);
    element.innerText = "Скопировано!"

    var timeout = setTimeout(() => {
        element.innerText = prevText;
        clearTimeout(timeout);
    }, 2000)
}