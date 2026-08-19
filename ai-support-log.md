# AI Support Log

## AI Support Log — Nguyễn Quý Dũng

### AI đã giúp tôi ở đâu?

- Hỗ trợ vibecode xây dựng toàn bộ mã nguồn micro-prototype (HTML, CSS, JavaScript cho cả 3 Options × 3 States).
- Tạo template làm việc chuẩn hóa cho nhóm, gồm tài liệu kịch bản kiểm thử (`test-plan.md`) và biểu mẫu ghi nhận phản hồi (`prototype-feedback-note.md`).
- Chỉnh sửa câu cú, trau chuốt wording cho các phần mô tả bài học, định nghĩa khái niệm và trích dẫn chuyên gia.
- Lên kế hoạch triển khai (planning), phân rã các đầu việc và thiết lập các test case chi tiết cho từng phương án.

### AI sai, hời hợt hoặc làm các options giống nhau ở đâu?

- Đưa vào nhiều chi tiết rườm rà, giải thích dài dòng không cần thiết làm loãng tương tác chính của prototype.
- Vibecode bị lỗi tương tác (lỗi bắt sự kiện click trên các phần tử con trong button, chưa xử lý cache trình duyệt khiến một số nút không phản hồi).
- Ban đầu đi sai định hướng khi tạo các option có nội dung na ná nhau, thiếu chiều sâu phân biệt giữa cơ chế Người tự làm vs AI hỗ trợ.

### Tôi đã tự sửa hoặc quyết định lại điều gì?

- Wording lại toàn bộ các nhãn nút bấm, câu hỏi chẩn đoán và nội dung giải thích để bám sát ngôn ngữ tự nhiên của người học.
- Điều hướng lại định hướng thiết kế của cả 3 Option: ép AI mở rộng Option A thành 3 nodes khái niệm theo bài học, Option B chẩn đoán linh hoạt theo từng câu trả lời, và Option C có thanh slider 3 nấc phạm vi.
- Tự kiểm tra, tối ưu lại mã nguồn JavaScript (bổ sung cache-busting, chuẩn hóa selector và các cơ chế fallback an toàn).

---

## AI Support Log — Trần Thị Kiều Trang

### AI đã giúp tôi ở đâu?

- Gợi ý cách rà soát A/B/C theo cơ chế và cách phân chia việc giữa User với AI, để nhóm không chỉ thay đổi layout hoặc wording.
- Hỗ trợ sắp xếp cấu trúc feedback note, các câu hỏi compare và cách tách `Observed`, `Interpreted`, `Decided — Next Change` và `Still Unproven`.
- Hỗ trợ rà soát wording cho context, task và các nhãn capability/limit trong prototype.

### AI sai, hời hợt hoặc làm các options giống nhau ở đâu?

- Một số gợi ý ban đầu dài và thiên về mô tả giao diện, chưa làm rõ khác biệt cơ chế User-led, User–AI co-create và AI-led.
- Một số đề xuất diễn đạt kết quả như thể solution đã đúng hoặc user đã xác nhận, trong khi dữ liệu chỉ là interaction breakdown và trade-off của từng tester.
- AI không thể thay nhóm tạo observation/quote; các phần feedback phải dựa trên phiên test thật.

### Tôi đã tự sửa hoặc quyết định lại điều gì?

- Giữ nguyên evidence và cách diễn đạt thận trọng, không biến feedback thành claim “solution đã validated”.
- Chốt ba option khác nhau về mechanism, bổ sung control/recovery và nguồn đối chứng để tester có thể kiểm tra hoặc quay lại.
- Dựa trên feedback thật để ủng hộ Next Change “Tóm tắt trước → Kiểm chứng nguồn → Kiểm tra độ hiểu sau”, đồng thời giữ các câu hỏi Still Unproven cho vòng test tiếp theo.
