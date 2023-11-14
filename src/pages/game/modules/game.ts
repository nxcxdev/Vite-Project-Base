import Player from "./player.ts"

const players = [
    {
        name: 'Juan'
    },
    {
        name: 'nico'
    }
]


let currentPlayers: Player[] = [];

function app(){
    players.forEach( player=>{
        const newPlayer = new Player(player.name)
        currentPlayers.push(newPlayer)
    })
    console.log(currentPlayers)
}

app()