var keyword = "lorem";
var content = `abc Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
versions of Lorem Ipsum`;

var posiotion = content
  .toLocaleLowerCase()
  .indexOf(keyword.toLocaleLowerCase());
let result = "";

while (posiotion !== -1) {
  result +=
    content.slice(0, posiotion) +
    `<span>${content.slice(posiotion, posiotion + keyword.length)}</span>`;

  content = content.slice(posiotion + keyword.length);

  posiotion = content.toLocaleLowerCase().indexOf(keyword.toLowerCase());
}

result = result + content;

var title = `<p>Tìm kiếm với từ khóa: <b>${keyword}</b></p>`;
var bottom = `<p>Đã tìm thấy <b>0</b> kết quả với từ khóa <b>${keyword}</b></p>`;
document.write(title + result + bottom);
