function refresh()
{
    const request = new Request("https://api.mcstatus.io/v2/status/java/living-dns.gl.at.ply.gg:1486",{
        method: "GET",
        redirect: 'follow'
    });

    fetch(request).then(response => response.json()).then((response) => {
        if (response != null && response.online !== false) {
            document.getElementById("online").innerText = "Игроков: "+response.players.online+"/20";
            return true;
        }
        else {
            return false;
        }
    });
}

function list()
{
    if (refresh() === false) return false;

    let list = document.getElementById("players");

    const request = new Request("https://api.mcstatus.io/v2/status/java/living-dns.gl.at.ply.gg:1486",{
        method: "GET",
        redirect: 'follow'
    });

    fetch(request).then(response => response.json()).then((response) => {
        if (response != null && response.online !== false) {
            let players = response.players.list;
            if (players != null) {
                let playersCount = players.length;

                if (playersCount > 0) {
                    for (let i = 0; i < playersCount; i++)
                    {
                        var h2 = document.createElement("h3");
                        h2.innerText = players[i].name_clean;

                        var li = document.createElement("li");
                        li.appendChild(h2);

                        list.appendChild(li);
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.location.href.includes("ip.html")) {
        fetch("https://super-heavily-krill.ngrok-free.app", {method: 'GET', redirect: 'follow'}).then((response) => {
            if (response.ok) {
                document.getElementById("status").innerText = "ВКЛЮЧЕН"
                document.getElementById("status").style = "color: green;"

                refresh();
                document.getElementById("online").style = "visibility: visible;"
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

    else if (document.location.href.includes("players.html")) {
        list();
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