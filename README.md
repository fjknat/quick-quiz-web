# Quiz Web Server

Đây là một Node.js web server đơn giản để phục vụ các file HTML quiz.

## Cách chạy

1. Đảm bảo bạn đã cài đặt Node.js.
2. Trong thư mục này, chạy:
   ```
   npm start
   ```
3. Server sẽ chạy trên `http://localhost:3000`.

## Endpoints

- `/quiz/golang`: Trả về nội dung của file `quizzes/golang-basic-quiz.html`.
- Tương lai, có thể thêm `/quiz/{type}` cho các quiz khác, với file tương ứng `quizzes/{type}-basic-quiz.html`.

## Mở rộng

Để thêm quiz mới:
1. Tạo file HTML mới trong thư mục `quizzes`, ví dụ `quizzes/java-basic-quiz.html`.
2. Server sẽ tự động phục vụ qua `/quiz/java`.