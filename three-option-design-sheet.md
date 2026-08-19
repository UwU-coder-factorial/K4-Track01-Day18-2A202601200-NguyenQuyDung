# Three-Option Design Sheet (Human–AI Design Pass)

## 1. Thiết kế chi tiết cho từng Option

### Option A — Bản đồ kiến thức tĩnh (User tự tra cứu)

* **Kỳ vọng (Expectation):** Báo rõ cho người học đây là sơ đồ khái niệm tra cứu chung, không phải AI tự chẩn đoán cá nhân.
* **Vai trò & Quyền hạn (Role & Agency):** 
  * User tự chọn khái niệm cần xem trong 3 khái niệm: `Foundation Model`, `Thin Wrapper` hoặc `Vertical AI`.
  * AI ở trạng thái **Don't Act** (không tự can thiệp hay phỏng đoán lỗ hổng kiến thức).
* **Bằng chứng & Độ tin cậy (Evidence & Uncertainty):** Hiển thị slide bài học và trích dẫn chuyên gia tương ứng với khái niệm được chọn. Không hiện độ tin cậy vì hệ thống không đưa ra suy luận.
* **Khôi phục & Kiểm soát (Control & Recovery):** User tùy ý đổi khái niệm, đóng phần giải thích hoặc quay lại bài học bất kỳ lúc nào.

---

### Option B — AI chẩn đoán qua 2 câu hỏi (Kết quả chẩn đoán động)

* **Kỳ vọng (Expectation):** Học viên biết trước AI sẽ hỏi 2 câu ngắn để cùng khoanh vùng điểm vướng và đưa ra chẩn đoán phù hợp kèm giải thích ngắn gọn, không khẳng định đúng tuyệt đối.
* **Vai trò & Quyền hạn (Role & Agency):** 
  * User trả lời câu hỏi, có thể chọn "chưa chắc/chưa biết" hoặc để trống.
  * AI ở trạng thái **Ask** (hỏi và đưa ra 1 trong 3 kịch bản chẩn đoán + giải thích ngắn gọn, không tự tiện đổi tiến trình học).
* **Bằng chứng & Độ tin cậy (Evidence & Uncertainty):** Gắn nhãn *"Giả thuyết từ AI"* kèm độ chắc chắn (Thấp/Vừa/Cao) và giải thích ngắn gọn dựa trên tín hiệu câu trả lời của User.
* **Khôi phục & Kiểm soát (Control & Recovery):** User có thể sửa câu trả lời, từ chối gợi ý bài ôn hoặc bấm quay về bài gốc.

---

### Option C — Nút "Bắt kịp" (AI tóm tắt slide theo 3 nấc phạm vi)

* **Kỳ vọng (Expectation):** User biết nút này cho phép chọn 3 nấc phạm vi tóm tắt (1 slide / 3 slide đề xuất / toàn bộ bài học) để bắt kịp nhịp học, có thể bỏ sót chi tiết chuyên sâu.
* **Vai trò & Quyền hạn (Role & Agency):** 
  * User chủ động bấm nút "Bắt kịp", kéo slider chọn 1 trong 3 nấc phạm vi.
  * AI ở trạng thái **Act** (tóm tắt ý chính tương ứng với phạm vi đã chọn) *ngay sau khi* User bấm nút "Tạo bản tóm tắt"; không tự nhảy bài.
* **Bằng chứng & Độ tin cậy (Evidence & Uncertainty):** Hiển thị rõ nguồn tóm tắt theo từng nấc (Slide 4, Slide 4–6, hoặc toàn bộ Slide 1–7). Cung cấp mục mở slide gốc tương ứng để đối chứng.
* **Khôi phục & Kiểm soát (Control & Recovery):** User có thể bấm "Đổi phạm vi" để kéo lại slider, mở slide gốc xem chi tiết, đóng tóm tắt hoặc quay lại bài học hiện tại dễ dàng.

---

## 2. Bảng tổng hợp quyết định Human–AI (Decision Table)

| Human–AI decision | Option A | Option B | Option C |
|---|---|---|---|
| User làm gì? AI làm gì? | User tự chọn 1 trong 3 khái niệm; hệ thống hiển thị bài tương ứng | User trả lời 2–3 câu; AI đưa giả thuyết & bài ôn | User kéo slider chọn 1 trong 3 nấc phạm vi; AI tóm tắt theo phạm vi đó |
| AI Act / Ask / Don't Act? Vì sao? | **Don't Act** (User tự tìm, AI không phỏng đoán cá nhân) | **Ask** (Hỏi trước khi gợi ý bài ôn, không tự đổi tiến trình) | **Act** (Tóm tắt ngay sau khi User chọn phạm vi và bấm nút) |
| User hiểu capability/limit bằng gì? | Nhãn: *"Sơ đồ tra cứu, không chẩn đoán cá nhân"* | Nhãn: *"Gợi ý dựa trên câu trả lời của bạn"* | Nhãn: *"Tóm tắt theo phạm vi chọn, có thể thiếu chi tiết"* |
| Evidence/uncertainty được thể hiện thế nào? | Slide liên quan đến khái niệm User chọn | Tín hiệu từ câu trả lời + độ chắc chắn (Thấp/Vừa) | Trích dẫn số slide nguồn tương ứng với từng nấc (Slide 4, Slide 4–6, Slide 1–7) |
| User kiểm soát và recovery thế nào? | Đổi khái niệm, đóng cửa sổ, về bài học | Sửa câu trả lời, bỏ qua, chọn chủ đề khác | Bấm "Đổi phạm vi", mở slide gốc xem chi tiết, đóng tóm tắt |

---

## 3. Phản hồi & Quản lý dữ liệu

* Dùng chung dữ liệu fixture bài `Application Layer vs Foundation Model`.
* Câu trả lời ở Option B chỉ lưu trong phiên học hiện tại, không tự ghi nhớ gây phiền phức về sau.
* Slider ở Option C cho phép điều chỉnh linh hoạt 3 mức độ tóm tắt mà không lưu lại cấu hình gây ràng buộc.
* User có thể từ chối gợi ý, tắt bảng hỗ trợ hoặc quay lại bài gốc bất cứ lúc nào.
* Prototype không dùng dữ liệu cá nhân nhạy cảm.

---

## 4. Kịch bản kiểm thử trọng yếu (Critical Interaction)

| Option | Ngữ cảnh chung | Hành động trọng yếu (Critical Interaction) | Kết quả / Quyết định của User |
|---|---|---|---|
| **A** | Đang học bài `Application Layer vs Foundation Model`, bị vướng | User mở bản đồ kiến thức, tự bấm xem 1 trong 3 khái niệm | Đọc bài liên quan hoặc đổi sang khái niệm khác |
| **B** | Đang học bài `Application Layer vs Foundation Model`, bị vướng | User bấm "Chẩn đoán cùng AI", làm 2–3 câu trắc nghiệm ngắn | Nhận gợi ý bài ôn, có thể chấp nhận, từ chối hoặc làm lại |
| **C** | Đang học bài `Application Layer vs Foundation Model`, bị lỡ nhịp | User bấm nút "Bắt kịp", kéo slider 3 nấc phạm vi và bấm "Tạo bản tóm tắt" | Đọc tóm tắt tương ứng với nấc đã chọn, đổi phạm vi, mở slide gốc hoặc tiếp tục học |

