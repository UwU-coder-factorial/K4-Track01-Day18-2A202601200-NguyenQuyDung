# Three-Option Design Sheet (Human–AI Design Pass)

## 1. Thiết kế chi tiết cho từng Option

### Option A — Bản đồ kiến thức tĩnh (User tự tra cứu)

* **Kỳ vọng (Expectation):** Báo rõ cho người học đây là sơ đồ khái niệm tra cứu chung, không phải AI tự chẩn đoán cá nhân.
* **Vai trò & Quyền hạn (Role & Agency):** 
  * User tự chọn khái niệm cần xem (`Foundation Model` hoặc `Application Layer`).
  * AI ở trạng thái **Don't Act** (không tự can thiệp hay phỏng đoán lỗ hổng kiến thức).
* **Bằng chứng & Độ tin cậy (Evidence & Uncertainty):** Hiển thị slide bài học tương ứng với khái niệm được chọn. Không hiện độ tin cậy vì hệ thống không đưa ra suy luận.
* **Khôi phục & Kiểm soát (Control & Recovery):** User tùy ý đổi khái niệm, đóng phần giải thích hoặc quay lại bài học bất kỳ lúc nào.

---

### Option B — AI chẩn đoán qua 2–3 câu hỏi

* **Kỳ vọng (Expectation):** Học viên biết trước AI sẽ hỏi 2–3 câu ngắn để cùng khoanh vùng điểm vướng, không khẳng định đúng tuyệt đối.
* **Vai trò & Quyền hạn (Role & Agency):** 
  * User trả lời câu hỏi, có thể bỏ qua hoặc tự chọn chủ đề khác.
  * AI ở trạng thái **Ask** (hỏi và gợi ý bài ôn, không tự tiện đổi tiến trình học).
* **Bằng chứng & Độ tin cậy (Evidence & Uncertainty):** Gắn nhãn *"Giả thuyết từ AI"* kèm độ chắc chắn (Thấp/Vừa) dựa trên câu trả lời của User.
* **Khôi phục & Kiểm soát (Control & Recovery):** User có thể sửa câu trả lời, từ chối gợi ý bài ôn hoặc bấm quay về bài gốc.

---

### Option C — Nút "Bắt kịp" (AI tóm tắt slide)

* **Kỳ vọng (Expectation):** User biết nút này chỉ tóm tắt 1–3 slide vừa qua để bắt kịp nhịp học, có thể bỏ sót chi tiết giảng giải chuyên sâu.
* **Vai trò & Quyền hạn (Role & Agency):** 
  * User chủ động bấm nút "Bắt kịp".
  * AI ở trạng thái **Act** (tóm tắt ý chính + ví dụ) *ngay sau khi* User bấm nút; không tự nhảy bài.
* **Bằng chứng & Độ tin cậy (Evidence & Uncertainty):** Hiển thị rõ nguồn tóm tắt (ví dụ: *"Dựa trên slide 4–6"*). Nếu thiếu dữ liệu sẽ báo rõ thay vì đoán mò.
* **Khôi phục & Kiểm soát (Control & Recovery):** User mở được slide gốc đầy đủ, đóng tóm tắt hoặc quay lại bài học hiện tại dễ dàng.

---

## 2. Bảng tổng hợp quyết định Human–AI (Decision Table)

| Human–AI decision | Option A | Option B | Option C |
|---|---|---|---|
| User làm gì? AI làm gì? | User tự chọn khái niệm; hệ thống hiển thị bài tương ứng | User trả lời 2–3 câu; AI đưa giả thuyết & bài ôn | User bấm nút; AI tóm tắt 1–3 slide gần nhất |
| AI Act / Ask / Don't Act? Vì sao? | **Don't Act** (User tự tìm, AI không phỏng đoán cá nhân) | **Ask** (Hỏi trước khi gợi ý bài ôn, không tự đổi tiến trình) | **Act** (Tóm tắt ngay sau khi User kích hoạt nút) |
| User hiểu capability/limit bằng gì? | Nhãn: *"Sơ đồ tra cứu, không chẩn đoán cá nhân"* | Nhãn: *"Gợi ý dựa trên câu trả lời của bạn"* | Nhãn: *"Tóm tắt nhanh, có thể thiếu chi tiết"* |
| Evidence/uncertainty được thể hiện thế nào? | Slide liên quan đến khái niệm User chọn | Tín hiệu từ câu trả lời + độ chắc chắn (Thấp/Vừa) | Trích dẫn số slide nguồn (vd: Slide 4–6) |
| User kiểm soát và recovery thế nào? | Đổi khái niệm, đóng cửa sổ, về bài học | Sửa câu trả lời, bỏ qua, chọn chủ đề khác | Mở slide gốc xem chi tiết, đóng tóm tắt |

---

## 3. Phản hồi & Quản lý dữ liệu

* Dùng chung dữ liệu fixture bài `Application Layer vs Foundation Model`.
* Câu trả lời ở Option B chỉ lưu trong phiên học hiện tại, không tự ghi nhớ gây phiền phức về sau.
* User có thể từ chối gợi ý, tắt bảng hỗ trợ hoặc quay lại bài gốc bất cứ lúc nào.
* Prototype không dùng dữ liệu cá nhân nhạy cảm.

---

## 4. Kịch bản kiểm thử trọng yếu (Critical Interaction)

| Option | Ngữ cảnh chung | Hành động trọng yếu (Critical Interaction) | Kết quả / Quyết định của User |
|---|---|---|---|
| **A** | Đang học bài `Application Layer vs Foundation Model`, bị vướng | User mở bản đồ kiến thức, tự bấm xem khái niệm vướng | Đọc bài liên quan hoặc đổi sang khái niệm khác |
| **B** | Đang học bài `Application Layer vs Foundation Model`, bị vướng | User bấm "Chẩn đoán cùng AI", làm 2–3 câu trắc nghiệm ngắn | Nhận gợi ý bài ôn, có thể chấp nhận, từ chối hoặc làm lại |
| **C** | Đang học bài `Application Layer vs Foundation Model`, bị lỡ nhịp | User bấm nút "Bắt kịp" trên thanh công cụ | Đọc tóm tắt slide vừa qua, mở slide gốc hoặc tiếp tục học |

