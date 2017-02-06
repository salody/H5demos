window.onload = function () {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');

    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];

    audio.addEventListener('ended', function (e) {
        music.className = '';
    }, false);

    // 点击音乐图标，控制音乐播放效果
    /*music.onclick = function () {
        if (audio.paused) {
            audio.play();
            this.style.animationPlayState="running";
        } else {
            audio.pause();
            this.style.animationPlayState="paused";
        }
    };*/
    music.addEventListener('touchstart', function (e) {
        if (audio.paused) {
            audio.play();
            this.style.animationPlayState="running";
        } else {
            audio.pause();
            this.style.animationPlayState="paused";
        }
    });
    page1.addEventListener('touchstart', function (e) {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';
        setTimeout(function () {
            page2.classList.add('fadeOut');
            page3.classList.add('fadeIn');
        }, 4500)
    }, false)
};