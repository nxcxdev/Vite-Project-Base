let playerlist = [];
let listDisplay = document.getElementById("player_list");



let deadPlayersList = [];
let eliminatedListDisplay = document.getElementById("dead_players_list");


function createNewPlayer(){


    let player ={

        name: document.getElementById("name").value
    }
    playerlist.push(player)

    listDisplay.innerHTML += `

    <li class="player__list-item id="player-${player.name}</li>
    ${player.name}
    </li>
    `;
    //localStorage.setItem(playerlist);

    
   
}




function startRound(){

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

