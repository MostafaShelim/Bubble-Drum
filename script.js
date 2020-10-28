const app = function(){
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const color = [
        "#b31818",
        "#18b320",
        "#2218b3",
        "#b3186d",
        "#b31818",
        "#801111"
    ];
    pads.forEach((pad, idx) => {
        pad.addEventListener('click', function(){
            sounds[idx].currentTime = 0;
            sounds[idx].play();
            createBubles(idx);
        });
    });
    const createBubles = (idx)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[idx];
        bubble.style.animation = 'jump 1s ease'; 
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    }
};

app();