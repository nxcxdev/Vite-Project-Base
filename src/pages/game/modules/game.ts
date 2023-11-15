import Player from "./player.ts"

const players = [
    {
        name: 'Juan'
    },
    {
        name: 'nico'
    }
]

const playerGame = document.getElementById('players')

let currentPlayers: Player[] = [];

function app(){
    players.forEach( player=>{
        const newPlayer = new Player(player.name)
        currentPlayers.push(newPlayer)
        playerGame.innerHTML += `
        <li>${player.name}</li>
        `
    })
    // console.log(currentPlayers)
    let i = currentPlayers[Math.floor(Math.random() * currentPlayers.length)]
     window.alert(i.name);

    // printPlayers();
}
app()

// function printPlayers(){
// }