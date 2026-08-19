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

- **We expect the tester to:** Mở bản đồ, tự chọn một trong 3 khái niệm (Foundation Model, Thin Wrapper, Vertical AI) và quyết định có xem tiếp khái niệm khác hay quay lại bài học.
- **Watch for:** Tester có hiểu đây là bản đồ tham khảo không; chọn node nào trước; có đọc source và quote trích dẫn; có cần facilitator chỉ ra node không.
- **Do not explain:** Ý nghĩa của các node hoặc việc nên chọn node nào.

## Option B

- **We expect the tester to:** Bắt đầu chẩn đoán, trả lời hai câu hỏi (hoặc chọn chưa chắc) và đọc giả thuyết tương ứng cùng phần giải thích ngắn gọn, quyết định chấp nhận hoặc sửa câu trả lời.
- **Watch for:** Tester có hiểu AI chỉ đưa ra giả thuyết không; có đọc phần giải thích ngắn gọn khi chọn câu chưa chắc; có đọc evidence và confidence; có thử recovery bằng nút "Sửa câu trả lời" không.
- **Do not explain:** Vì sao AI đưa ra kết quả hoặc câu trả lời “đúng” nào nên được chọn.

## Option C

- **We expect the tester to:** Chủ động bấm “Bắt kịp”, thử điều chỉnh thanh slider 3 nấc phạm vi (1 slide / 3 slide đề xuất / toàn bộ bài), bấm “Tạo bản tóm tắt”, đọc nội dung, kiểm tra slide gốc hoặc đổi phạm vi.
- **Watch for:** Tester có hiểu ý nghĩa 3 nấc slider; có đọc nguồn và nhãn badge; có nhận ra tóm tắt ngắn có thể bỏ sót chi tiết so với tóm tắt toàn bài; có thử bấm "Đổi phạm vi" để kéo slider lại không.
- **Do not explain:** Tác dụng của từng nấc slider hoặc vị trí của nút mở slide gốc.

## Common facilitation

- Dùng cùng task: “Hãy tìm cách hiểu đủ hai khái niệm để giải thích: Một ứng dụng AI khác gì so với foundation model?”
- Không narrate hoặc giải thích icon.
- Nếu tester hỏi cách hoạt động, hỏi lại: “Theo bạn, nó nên hoạt động như thế nào?”
- Reset về common context trước mỗi option.
