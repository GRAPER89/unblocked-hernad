// games.js

// Array of popular unblocked games with their names and links
const unblockedGames = [
    { name: "Agar.io", link: "https://agar.io" },
    { name: "Google Pacman", link: "https://www.google.com/pacman" },
    { name: "Little Alchemy 2", link: "https://littlealchemy2.com" },
    { name: "Slither.io", link: "https://slither.io" },
    { name: "Tetris", link: "https://tetris.com" },
    { name: "WormsZone.io", link: "https://wormszone.io" },
    { name: "Krunker.io", link: "https://krunker.io" },
    { name: "Minecraft Classic", link: "https://www.classicminecraft.net" },
    { name: "Among Us", link: "https://amongus.play" },
    { name: "Famous Paintings", link: "https://famouspaintings.com" },
    { name: "Cut The Rope", link: "https://cuttherope.net" },
    { name: "Super Mario Bros", link: "https://supermariobros.com" },
    { name: "Run 3", link: "https://run3.io" },
    { name: "Peppa Pig: Fun Fair", link: "https://peppapig.com" },
    { name: "Fortnite", link: "https://www.fortnite.com" },
    { name: "Poptropica", link: "https://www.poptropica.com" },
    { name: "Bubble Shooter", link: "https://bubbleshooter.com" },
    { name: "Candy Crush Saga", link: "https://www.candycrushsaga.com" },
    { name: "Bike Race", link: "https://bikerace.com" },
    { name: "Paper.io", link: "https://paper.io" },
    { name: "Sonic the Hedgehog", link: "https://sonic.com" },
    { name: "Super Mario 64", link: "https://supermario64.com" },
    { name: "Halo: Combat Evolved", link: "https://halo.com" },
    { name: "Temple Run", link: "https://templerun.com" },
    { name: "Happy Wheels", link: "https://happywheels.com" },
    { name: "Run 2", link: "https://run2.io" },
    { name: "Geometry Dash", link: "https://geometrydash.com" },
    { name: "Terraria", link: "https://terraria.com" },
    { name: "Duck Life", link: "https://ducklife.com" },
    { name: "Totally Accurate Battle Simulator", link: "https://tabsgame.com" },
    { name: "Roblox", link: "https://roblox.com" },
    { name: "World's Biggest Pac-Man", link: "https://www.worldsbiggestpacman.com" },
    { name: "Cubis Creatures", link: "https://cubis.com" },
    { name: "Crazy Taxi", link: "https://crazytaxi.com" },
    { name: "Super Stickman Golf", link: "https://superstickmangolf.com" },
    { name: "Bike Champ", link: "https://bikechamp.com" },
    { name: "Mini Golf King", link: "https://minigolfking.com" },
    { name: "Gartic Phone", link: "https://garticphone.com" },
    { name: "Lemonade Tycoon", link: "https://lemonadetycoon.com" },
    { name: "Zelda Classic", link: "https://zeldaclassic.com" },
    { name: "The Impossible Game", link: "https://theimpossiblegame.com" },
    { name: "Bloxorz", link: "https://bloxorz.com" },
    { name: "Realm of the Mad God", link: "https://rotmg.com" },
    { name: "Super Motherload", link: "https://supermotherload.com" },
    { name: "Seedling", link: "https://seedling.com" },
    { name: "Bloons Tower Defense 5", link: "https://bloons.com" },
    { name: "Cooking Mama", link: "https://cookingmama.com" },
    { name: "Mario Kart", link: "https://mariokart.com" },
    { name: "Street Fighter II", link: "https://streetfighter.com" },
    { name: "Duck Hunt", link: "https://duckhunt.com" },
    { name: "Fishing Life", link: "https://fishinglife.com" },
    { name: "Skate 3", link: "https://skate3.com" },
    { name: "Angry Birds", link: "https://angrybirds.com" },
    { name: "Hobo Series", link: "https://hoboseries.com" },
    { name: "Snail Bob", link: "https://snailbob.com" }
];

// Function to search games by name
function searchGames(query) {
    return unblockedGames.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
}

// Function to generate game cards
function generateGameCards(games) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Clear existing cards
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `<h3>${game.name}</h3><a href='${game.link}' target='_blank'>Play Now</a>`;
        gameContainer.appendChild(card); // Add card to container
    });
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', (event) => {
    const query = event.target.value;
    const results = searchGames(query);
    generateGameCards(results);
});

// Initial render of all game cards
generateGameCards(unblockedGames);