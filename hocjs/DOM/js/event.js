// định nghĩa các event cho các element
var inputRangeLists = document.querySelectorAll('input[type="range"]');

var overEvent = new Event("over");
if (inputRangeLists.length) {
  inputRangeLists.forEach(function (input) {
    input.addEventListener("mousemove", function (e) {
      var offsetX = e.offsetX;
      var offsetYY = e.offsetY;
      var value = (offsetX * 100) / input.clientWidth;
      value = value.toFixed(2);
      this.data = "123";
      this.offsetXX = offsetX;
      this.offsetYY = offsetYY;
      this.defau = offsetX;
      input.dispatchEvent(overEvent);
    });
  });
}
