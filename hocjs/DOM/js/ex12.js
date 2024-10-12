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

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
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

// karaoke
var karaoke = document.querySelector(".karaoke");
var karaokeInner = karaoke.querySelector(".karaoke-inner");
var karaokeContent = karaoke.querySelector(".karaoke-content");
var closeBtn = karaoke.querySelector(".close");
var karaokePlay = karaoke.querySelector(".play");
var playerWrap = document.querySelector(".player-wrap");

karaokePlay.addEventListener("click", function () {
  karaoke.classList.add("show");
  playerWrap.classList.add("bottom");
});

closeBtn.addEventListener("click", function () {
  karaoke.classList.remove("show");
  playerWrap.classList.remove("bottom");
});

var currentScreen;

//Lắng nghe sự kiện timeupdate của audio
audio.addEventListener("timeupdate", function () {
  var currentTime = Math.floor(audio.currentTime * 1000);

  var index = lyric.findIndex(function (sentence) {
    sentence = sentence.words;
    return (
      currentTime >= sentence[0].startTime &&
      currentTime <= sentence[sentence.length - 1].endTime
    );
  });

  //Hiển thị 2 câu đầu tiên nếu lời trước 5 giây
  var firstTime = lyric[0].words[0].startTime;
  var firstRange = currentTime - firstTime;
  if (firstRange > -5000 && firstRange < 0) {
    index = 0;
  }

  if (index !== -1) {
    handleColor(currentTime);

    var screen = Math.floor(index / 2 + 1);

    if (screen !== currentScreen) {
      var offset = (screen - 1) * 2;

      if (index >= offset && index < offset + 2) {
        var pTag = "";
        for (var i = offset; i < offset + 2; i++) {
          var sentence = lyric[i].words
            .map(function (item) {
              return item.data;
            })
            .join(" ");
          pTag += `<p 
          data-start-time="${lyric[i].words[0].startTime}"
          data-end-time="${lyric[i].words[lyric[i].words.length - 1].endTime}"
          data-words=${JSON.stringify(lyric[i].words)}
          >${sentence}<span>${sentence}</span>
          </p>`;
        }

        karaokeContent.innerHTML = pTag;
      }

      currentScreen = screen;
    }
  }
});

var handleColor = function (currentTime) {
  var sentencesEl = karaokeContent.children;
  Array.from(sentencesEl).forEach(function (sentence) {
    var startTime = sentence.dataset.startTime;
    var endTime = sentence.dataset.endTime;

    if (startTime && endTime && currentTime >= startTime) {
      //So sánh current với startTime của từng từ -> Biết được đang hát tới từ nào trong 1 câu
      var words = JSON.parse(sentence.dataset.words);
      console.log(words);

      var result = words[0];

      words.forEach(function (item, index) {
        if (currentTime >= item.startTime) {
          result = words[0];
        }
        if (currentTime > item.startTime && currentTime < item.endTime) {
          result = words[index];
        }
        if (currentTime <= item.endTime) {
          result = words[words.length - 1];
        }
      });

      var endTimeResult = result.endTime;

      //Tính tổng thời gian của cả câu
      var sentenceTime = endTime - startTime;

      //Tính thời gian của từ với thời gian bắt đầu của câu
      var time = endTimeResult - startTime;
      // console.log(endTimeResult, endTime);

      var rate = (time * 100) / sentenceTime;

      sentence.children[0].style.width = `${rate}%`;
      sentence.children[0].style.transition = `width ${
        result.endTime - result.startTime
      }ms linear`;
      console.log(result);
    }
  });
};
/*
có arr = [1,2,3,4,5,6,7,8,9,10]
screen1: index =0 ,index = 1
screen2: index =2 ,index = 3
screen3: index =4 ,index = 5
Công thức screen = index / 2 + 1
*/
