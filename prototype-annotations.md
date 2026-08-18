# Prototype annotations — không hiển thị cho tester

## Danh sách 9 trạng thái

| Test state | Option | Nội dung |
|---|---|---|
| A1 | A | Common Context — bài học, đoạn vừa bỏ lỡ và task chung |
| A2 | A | Critical Interaction — user tự chọn khái niệm trên bản đồ |
| A3 | A | Result/User Decision — xem nội dung, đổi khái niệm hoặc quay lại bài |
| B1 | B | Common Context — cùng bài học, đoạn vừa bỏ lỡ và task chung |
| B2 | B | Critical Interaction — user trả lời hai câu hỏi chẩn đoán |
| B3 | B | Result/User Decision — xem evidence, chấp nhận, sửa hoặc từ chối giả thuyết |
| C1 | C | Common Context — cùng bài học, đoạn vừa bỏ lỡ và task chung |
| C2 | C | Critical Interaction — user xem và xác nhận phạm vi tóm tắt |
| C3 | C | Result/User Decision — đọc tóm tắt, kiểm tra slide gốc hoặc quay lại bài |

## Option A

- **We expect the tester to:** Mở bản đồ, tự chọn một khái niệm và quyết định có xem khái niệm còn lại hay quay lại bài học.
- **Watch for:** Tester có hiểu đây là bản đồ tham khảo không; chọn node nào trước; có đọc source; có cần facilitator chỉ ra node không.
- **Do not explain:** Ý nghĩa của hai node hoặc việc nên chọn node nào.

## Option B

- **We expect the tester to:** Bắt đầu chẩn đoán, trả lời hai câu hỏi và quyết định chấp nhận hoặc từ chối giả thuyết của AI.
- **Watch for:** Tester có hiểu AI chỉ đưa ra giả thuyết không; có do dự ở câu hỏi; có đọc evidence và confidence; có thử recovery không.
- **Do not explain:** Vì sao AI đưa ra kết quả hoặc câu trả lời “đúng” nào nên được chọn.

## Option C

- **We expect the tester to:** Chủ động bấm “Bắt kịp”, đọc tóm tắt, kiểm tra slide gốc hoặc đóng tóm tắt.
- **Watch for:** Tester có hiểu phạm vi 1–3 slide; có đọc nguồn; có nhận ra tóm tắt có thể bỏ sót; chọn mở slide gốc hay tiếp tục.
- **Do not explain:** Nội dung tóm tắt hoặc vị trí của nút mở slide gốc.

## Common facilitation

- Dùng cùng task: “Hãy tìm cách hiểu đủ hai khái niệm để giải thích: Một ứng dụng AI khác gì so với foundation model?”
- Không narrate hoặc giải thích icon.
- Nếu tester hỏi cách hoạt động, hỏi lại: “Theo bạn, nó nên hoạt động như thế nào?”
- Reset về common context trước mỗi option.
