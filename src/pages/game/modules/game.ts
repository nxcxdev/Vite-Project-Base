
let deadPlayersList = [];
let eliminatedListDisplay = document.getElementById("dead_players_list");

function starRound(){

    let randomNumber = Math.floor(Math.random() * playerList.length);

    let randomPlayer = playerList[randomNumber];

    deadPlayersList.push(randomPlayer);

    eliminatedListDisplay.innerHTML += `

    <li class="player__list>
    ${randomPlayer.name}
    </li>`;

    document.getElementById(`player-${randomPlayer.name}`)?.remove();
    playerList.splice(randomNumber, 1);
}