window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 153, 0)",
        "rgb(94, 255, 0)",
        "rgb(0, 255, 179)",
        "rgb(195, 0, 255)",
        "rgb(255, 0, 76)"
    ]
    // sound here
    console.log(sounds[0]);
    pads.forEach((pad, index) => { 
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    // animation bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    };
});


