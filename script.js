let score = 0;
let clickPower = 1;
let perSecond = 0;
let totalClicks = 0;

let clickUpgradeCost = 50;
let autoCost = 100;
let factoryCost = 1000;
let rocketCost = 5000;

const scoreEl = document.getElementById("score");
const perSecondEl = document.getElementById("perSecond");
const clickPowerEl = document.getElementById("clickPower");
const totalClicksEl = document.getElementById("totalClicks");

function updateUI(){

    scoreEl.innerText = Math.floor(score);

    perSecondEl.innerText = perSecond;

    clickPowerEl.innerText = clickPower;

    totalClicksEl.innerText = totalClicks;

    document.getElementById("clickUpgradeCost").innerText = clickUpgradeCost;

    document.getElementById("autoCost").innerText = autoCost;

    document.getElementById("factoryCost").innerText = factoryCost;

    document.getElementById("rocketCost").innerText = rocketCost;

}

document.getElementById("clickBtn").addEventListener("click",()=>{

    score += clickPower;

    totalClicks++;

    updateUI();

});

function buyClickUpgrade(){

    if(score >= clickUpgradeCost){

        score -= clickUpgradeCost;

        clickPower++;

        clickUpgradeCost = Math.floor(clickUpgradeCost * 1.7);

        updateUI();

    }

}

function buyAuto(){

    if(score >= autoCost){

        score -= autoCost;

        perSecond += 1;

        autoCost = Math.floor(autoCost * 1.8);

        updateUI();

    }

}

function buyFactory(){

    if(score >= factoryCost){

        score -= factoryCost;

        perSecond += 10;

        factoryCost = Math.floor(factoryCost * 2);

        updateUI();

    }

}

function buyRocket(){

    if(score >= rocketCost){

        score -= rocketCost;

        perSecond += 50;

        rocketCost = Math.floor(rocketCost * 2.5);

        updateUI();

    }

}

function resetGame(){

    if(confirm("Точно сбросить прогресс?")){

        score = 0;
        clickPower = 1;
        perSecond = 0;
        totalClicks = 0;

        clickUpgradeCost = 50;
        autoCost = 100;
        factoryCost = 1000;
        rocketCost = 5000;

        updateUI();

    }

}

setInterval(()=>{

    score += perSecond / 10;

    updateUI();

},100);

updateUI();