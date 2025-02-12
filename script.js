document.addEventListener('DOMContentLoaded', () => {
    if (document.location.href.includes("ip.html")) {
        fetch("https://super-heavily-krill.ngrok-free.app", {method: 'GET', redirect: 'follow'}).then((response) => {
            if (response.ok) {
                document.getElementById("status").innerText = "ВКЛЮЧЕН"
                document.getElementById("status").style = "color: green;"
            }

            else {
                document.getElementById("status").innerText = "ВЫКЛЮЧЕН"
                document.getElementById("status").style = "color: red;"
            }
        }).catch((error) => {
            if (error) {
                document.getElementById("status").innerText = "ВЫКЛЮЧЕН"
                document.getElementById("status").style = "color: red;"
            }
        })
    }
});

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