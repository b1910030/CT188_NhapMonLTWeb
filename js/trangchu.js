
    var index = 1;
    changeImage = function() {
    var imgs = ["images/10.png","images/11.png","images/12.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == 3) index = 0;
    }
    setInterval(changeImage,2000);

