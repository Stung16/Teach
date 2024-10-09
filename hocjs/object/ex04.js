var posts = [
  {
    title: "Tiêu đề bài viết 1",
    excerpt: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae, modi rem deserunt dolores, laborum quod suscipit sed
            commodi dignissimos nulla! Sit quae facere repellendus cumque quo
            amet reprehenderit nisi tempora saepe distinctio tempore deleniti
            quis, blanditiis minus! Illum veritatis cupiditate reprehenderit.
            Velit cupiditate explicabo error quod fugiat iste atque?`,
    thumbnail:
      "https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU",
  },
  {
    title: "Tiêu đề bài viết 2",
    excerpt: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae, modi rem deserunt dolores, laborum quod suscipit sed
            commodi dignissimos nulla! Sit quae facere repellendus cumque quo
            amet reprehenderit nisi tempora saepe distinctio tempore deleniti
            quis, blanditiis minus! Illum veritatis cupiditate reprehenderit.
            Velit cupiditate explicabo error quod fugiat iste atque?`,
    thumbnail:
      "https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU",
  },
  {
    title: "Tiêu đề bài viết 3",
    excerpt: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae, modi rem deserunt dolores, laborum quod suscipit sed
            commodi dignissimos nulla! Sit quae facere repellendus cumque quo
            amet reprehenderit nisi tempora saepe distinctio tempore deleniti
            quis, blanditiis minus! Illum veritatis cupiditate reprehenderit.
            Velit cupiditate explicabo error quod fugiat iste atque?`,
    thumbnail:
      "https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU",
  },

  {
    title: "Tiêu đề bài viết 3",
    excerpt: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae, modi rem deserunt dolores, laborum quod suscipit sed
            commodi dignissimos nulla! Sit quae facere repellendus cumque quo
            amet reprehenderit nisi tempora saepe distinctio tempore deleniti
            quis, blanditiis minus! Illum veritatis cupiditate reprehenderit.
            Velit cupiditate explicabo error quod fugiat iste atque?`,
    thumbnail:
      "https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU",
  },
  {
    title: "Tiêu đề bài viết 3",
    excerpt: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae, modi rem deserunt dolores, laborum quod suscipit sed
            commodi dignissimos nulla! Sit quae facere repellendus cumque quo
            amet reprehenderit nisi tempora saepe distinctio tempore deleniti
            quis, blanditiis minus! Illum veritatis cupiditate reprehenderit.
            Velit cupiditate explicabo error quod fugiat iste atque?`,
    thumbnail:
      "https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU",
  },
  {
    title: "Tiêu đề bài viết 3",
    excerpt: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae, modi rem deserunt dolores, laborum quod suscipit sed
            commodi dignissimos nulla! Sit quae facere repellendus cumque quo
            amet reprehenderit nisi tempora saepe distinctio tempore deleniti
            quis, blanditiis minus! Illum veritatis cupiditate reprehenderit.
            Velit cupiditate explicabo error quod fugiat iste atque?`,
    thumbnail:
      "https://fastly.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU",
  },
];

var html = `<div class="posts">
${posts
  ?.map?.(function (item, index) {
    return `<div class="post-item ${index % 2 !== 0 && "post-right"}">
  <img src="${item?.thumbnail}" alt="" />
        <div>
          <h2>${item?.title}</h2>
          <p>
            ${item?.excerpt}
          </p>
        </div>
  </div>`;
  })
  .join("")}
    </div>`;
document.write(html);
