var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

// tính độ dài cảu progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //cắm cờ
var innitialClientX;
var initialValue = 0;
var value;

var handleUpdateCalue = function (value) {
  progress.style.width = `${value}%`;
};
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    innitialClientX = e.clientX;
    isDrag = true;
    handleUpdateCalue(value);
  }
});
// muốn chống nổi bọt đầu tiên(cùng hàm sự kiện)
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    innitialClientX = e.clientX;
  }
});
document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - innitialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;
    if (value < 0) {
      value = 0;
    }
    if (value > 100) {
      value = 100;
    }
    handleUpdateCalue(value);
  }
});
document.addEventListener("mouseup", function (e) {
  isDrag = false;
  initialValue = value;
});

// xay dựng trình phát nhạc
var audio = document.querySelector(".audio");
var durationEl = progressBar.nextElementSibling;
var currentEl = progressBar.previousElementSibling;
var playBtn = document.querySelector(".play-btn");

// hàm lắng nghe sự kiện load xong nhạc

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);
  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  currentEl.innerText = getTime(audio.currentTime);
  var value = (audio.currentTime * 100) / audio.duration;
  handleUpdateCalue(value);
});
