
Quill.register("modules/imageUploader", ImageUploader);

let imgUrl = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

var quill = new Quill( "#quillEditor", {
    theme: "snow", // 模板
    modules: {
        imageResize: {
            displaySize: true
        },
        imageUploader: {
            upload: (file) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(imgUrl);
                }, 3500);
              });
            }
        }, 
        toolbar: [
            // 工具列列表
            ['bold', 'italic', 'underline', 'strike'], // 粗體、斜體、底線和刪節線
            ['blockquote', 'code-block'], // 區塊、程式區塊
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // 標題
            [{ 'header': 1 }, { 'header': 2 }], // 標題1、標題2
            ['link', 'image', 'video'], // 連結、圖片、影片
            [{ 'list': 'ordered'}, { 'list': 'bullet' }], // 清單
            [{ 'script': 'sub'}, { 'script': 'super' }], // 上標、下標
            [{ 'indent': '-1'}, { 'indent': '+1' }], // 縮排
            [{ 'direction': 'rtl' }], // 文字方向
            [{ 'size': ['small', false, 'large', 'huge'] }], // 文字大小
            [{ 'color': [] }, { 'background': [] }], // 顏色
            [{ 'font': [] }], // 字體
            [{ 'align': [] }], // 文字方向
            [ 'clean' ] // 清除文字格式
        ]
    }
}); 