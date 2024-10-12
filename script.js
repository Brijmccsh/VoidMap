const blackHoles = [
    { name: "Cygnus A", mass: "2.5 billion", fact: "Could cover the whole solar system", img: "Milkyway/Cygnus%20A%20-%202.5%20billion%20-%20could%20cover%20the%20whole%20solar%20system.png", sizeFactor: 6, x: 0.1, y: 0.2 },
    { name: "GW170817", mass: "2.7 billion", fact: "Can cover Paris", img: "Milkyway/GW170817%20-%202.7%20-%20can%20cover%20Paris.png", sizeFactor: 8, x: 0.25, y: 0.6 },
    { name: "M33X7", mass: "15.65 million", fact: "Can cover Corsica", img: "Milkyway/M33X7%20-%2015.65%20-can%20cover%20Corsica.png", sizeFactor: 3, x: 0.45, y: 0.4 },
    { name: "Messier 87 black hole", mass: "6.5 billion", fact: "First-ever spotted black hole to mankind", img: "Milkyway/Messier%2087%20black%20hole%20-%206.5%20billion%20-%20first%20ever%20spotted%20black%20hole%20to%20mankind.png", sizeFactor: 12, x: 0.6, y: 0.8 },
    { name: "OJ287", mass: "18 billion", fact: "Could easily fit 3+ solar systems inside of it", img: "Milkyway/OJ287%20-%2018%20billion%20-%20could%20easily%20fit%203%2B%20solar%20systems%20inside%20of%20it.png", sizeFactor: 22, x: 0.05, y: 0.3 },
    { name: "Sagittarius A*", mass: "4 million", fact: "At the Center of Milkyway", img: "Milkyway/Sagittarius%20A*%20-%204%20Million%20-%20At%20the%20Center%20of%20Milkyway.png", sizeFactor: 2, x: 0.5, y: 0.5 },
    { name: "TON618", mass: "66 billion", fact: "Largest spotted black hole", img: "Milkyway/TON618%20-%2066%20billion%20-%20largest%20spotted%20blackhole.png", sizeFactor: 30, x: 0.9, y: 0.4 }
];

const infoBox = document.getElementById('info');
const proximityThreshold = 0.12;

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let showInfo = false;

    for (const blackHole of blackHoles) {
        const blackHoleX = blackHole.x * width;
        const blackHoleY = blackHole.y * height;
        const distance = Math.sqrt(Math.pow(clientX - blackHoleX, 2) + Math.pow(clientY - blackHoleY, 2));
        
        if (distance < proximityThreshold * Math.min(width, height)) {
            infoBox.innerHTML = `
                <strong>${blackHole.name}</strong><br>
                Mass: ${blackHole.mass} solar masses<br>
                Fact: ${blackHole.fact}<br>
                <img src="${blackHole.img}" alt="${blackHole.name} Image" style="width: ${blackHole.sizeFactor * 50}px;">
            `;
            
            let boxX = clientX + 15;
            let boxY = clientY + 15;

            const boxWidth = blackHole.sizeFactor * 50 + 30;
            const boxHeight = blackHole.sizeFactor * 50 + 70;
            
            if (boxX + boxWidth > width) boxX = width - boxWidth - 10;
            if (boxX < 0) boxX = 10;
            if (boxY + boxHeight > height) boxY = height - boxHeight - 10;
            if (boxY < 0) boxY = 10;

            infoBox.style.left = `${boxX}px`;
            infoBox.style.top = `${boxY}px`;
            infoBox.style.display = 'block';
            showInfo = true;
            break;
        }
    }

    if (!showInfo) {
        infoBox.style.display = 'none';
    }
});
