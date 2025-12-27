const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");

let state = {
    morality: 0,
    trust: 0,
    obedience: 0,
    curiosity: 0
};

let currentScene = "start";

function startGame() {
    showScene(currentScene);
}

function showScene(sceneKey) {
    const scene = story[sceneKey];
    textElement.textContent = scene.text;
    choicesElement.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => selectChoice(choice);
        choicesElement.appendChild(button);
    });
}

function selectChoice(choice) {
    if (choice.effect) {
        for (let key in choice.effect) {
            state[key] += choice.effect[key];
        }
    }

    currentScene = choice.next;
    showScene(currentScene);
}

startGame();