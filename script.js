const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Deadpool",
    "Black Cat",
    "Dr Strange",
    "Thor",
    "Gamora",
    "Ant man",
    "Thor"
];

const initializePlayers = (playersArray) => 
{
    let detailedPlayers = [];
    for (let i = 0; i < playersArray.length; i++)
     {
        detailedPlayers.push({
            name: playersArray[i],
            strength: getRandomStrength(),
            image: `./images/super-${i + 1}.png`,
            type: (i+8)%2 == 0 ? "hero" : "villain"
        });
    }
    return detailedPlayers;
}

const getRandomStrength = () => 
{
    return Math.ceil(Math.random() * 100);
}

const buildPlayerCards = (playersArray, playerType) => 
{
    let fragment = '';
    for (let i = 0; i < playersArray.length; i++) 
    {
        if (playersArray[i].type == playerType) 
        {
            fragment += `<div class="super_${playerType}">
                            <img src="${playersArray[i].image}">
                            <div class="info">
                                <h3>${playersArray[i].name}</h3>
                                <p>${playersArray[i].strength}</p>
                            </div>
                        </div>`;
        }
    }
    return fragment;
}

const viewPlayers = (playersArray) =>
{
    document.getElementById('heroes').innerHTML = buildPlayerCards(playersArray, 'hero');
    document.getElementById('villains').innerHTML = buildPlayerCards(playersArray, 'villain');
}

window.onload = () => 
{
    viewPlayers(initializePlayers(PLAYERS));
}



