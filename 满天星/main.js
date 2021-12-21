window.onload = () => {
    let starsCount = 800; //星星数量
    let distance = 800;//间距
    let parentStarts = document.getElementById("stars");
    for (let i = 0; i < starsCount; i++) {
        let childStart = document.createElement("div");
        childStart.setAttribute("class", 'star');
        parentStarts.appendChild(childStart);
    }
    for (let i = 0; i < starsCount; i++) {
        let item = parentStarts.children[i];
        let speed = 0.2 + (Math.random() * 1);
        let thisDistance = distance + (Math.random() * 300);
        item.style.transformOrigin = "0 0 " + thisDistance + "px";
        item.style.transform = "translate3d(0,0,-" + thisDistance + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + speed + "," + speed + ")";
    }
}



