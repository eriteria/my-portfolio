function changeBackground(){
    const bg = ["5-dots.png", "webb-dark.png", "y-so-serious.png"];
    document.body.style.backgroundImage = `url('img/${bg[Math.floor(Math.random() * bg.length)]}')`;
}