# Group Feedback Synthesis — Chặng 6

> **Nhóm thực hiện:** Trần Thị Kiều Trang (2A202601498) & Nguyễn Quý Dũng (2A202601200)  
> **Facilitation:** Cả Trang và Dũng đều trực tiếp test A/B/C với tester ngoài nhóm; bảng dưới đây tổng hợp các phiên của cả hai.
> **Dữ liệu nguồn:** 3 phiên thử nghiệm người dùng độc lập tại [prototype-feedback-note.md](./prototype-feedback-note.md)  
> **Mục tiêu:** Tổng hợp các mẫu hành vi (Patterns), đúc kết bằng chứng đối nghịch với kỳ vọng ban đầu, chốt quyết định thay đổi sản phẩm kế tiếp (Group Next Change) và xác định các giả định vẫn chưa được chứng minh (Still Unproven).

---

## 1. Bảng tổng hợp dữ liệu 3 Tester

| Tiêu chí | Tester 1 (Vũ Đình Huy) | Tester 2 (Nguyễn Minh Quân) | Tester 3 (Đào Văn Đạt) |
|---|---|---|---|
| **Relevant Context** | Có (bị phân tâm nhắn tin team build, ngẩng lên thì mất dấu bài). | Có (đi mua nước ra ngoài, quay lại bị lỡ đoạn giảng quan trọng). | Không (chưa từng gặp hoặc không nhận diện rõ). |
| **Thứ tự test** | A → B → C | B → A → C | A → B → C |
| **Option chọn cuối cùng** | **Option C** (Nấc 2 - Đề xuất) | **Option B** | **Option C** (Nấc 1 - 1 slide) |
| **Hành động đầu tiên** | Bấm xem bản đồ kiến thức, thử bấm các node. | Bấm bắt đầu chẩn đoán, trả lời câu hỏi. | Bấm xem bản đồ, đọc context bài học. |
| **Điểm khựng lại / Mơ hồ** | Tưởng Option A là sơ đồ cây; lo sợ AI hallucinate. | Khựng lại ở chỗ đọc giải thích của Option B; flow hơi ngắn. | Do dự ở nút "Không dùng AI" vs "Dùng AI" ở Option C. |
| **Hành vi Sửa / Recovery** | Bấm chuyển đổi giữa các node ở Option A. | Bấm "Đổi phạm vi" kéo lại slider ở Option C. | Bấm "Đổi phạm vi" ở Option C; bấm quay lại bài ở Option A. |
| **Phân chia việc Người – AI** | Tự đọc slide đối soát, AI làm chatbot trả lời nhanh. | Tự highlight keyword, AI tóm tắt & định nghĩa keyword. | Tự chọn slide/từ khóa, AI tạo bộ câu hỏi kiểm tra độ hiểu. |
| **Trade-off chấp nhận** | Chấp nhận tóm tắt có thể thiếu chi tiết để bắt kịp nhanh. | Chấp nhận trả lời câu hỏi để AI đưa đúng bài ôn. | Chấp nhận rủi ro tóm tắt ngắn để tiết kiệm tối đa thời gian. |

---

## 2. Phân tích Các Pattern (Mẫu Hành Vi & Nhận Thức Phổ Biến)

### Pattern 1: Tốc độ và Sự tức thì là ưu tiên số 1 khi bị lỡ bài giảng
- **Mô tả hành vi:** Khi học viên bị lỡ nhịp bài học, tâm lý chung là muốn một giải pháp **nhanh gọn, có kết quả ngay lập tức** để bắt kịp lớp học trong vòng 1–2 phút.
- **Biểu hiện thực tế:** Cả Tester 1 và Tester 3 đều chọn Option C (Nút "Bắt kịp") vì lý do *"vừa đọc slide vừa xem tóm tắt cảm thấy hiệu quả hơn"* và *"tối ưu hóa thời gian học"*.
- **Tác động đến thiết kế:** Option A (Bản đồ kiến thức tĩnh) hoàn toàn thất bại vì đòi hỏi học viên phải tự mày mò, tự click từng node và tự đọc nội dung dài, gây mất thêm thời gian khi đang trong tình thế cấp bách.

### Pattern 2: Nghịch lý Gánh nặng nhận thức (Cognitive Load) ở luồng Chẩn đoán (Option B)
- **Mô tả hành vi:** Học viên cảm thấy việc phải trả lời câu hỏi trắc nghiệm khi bản thân vừa mới "bỏ lỡ bài / chưa hiểu" tạo thêm sự căng thẳng và mệt mỏi nhận thức.
- **Biểu hiện thực tế:** Tester 2 phản hồi rằng: *"Nên giải thích keyword/slide trước, rồi sau đó cho bộ câu hỏi ngắn để xác nhận user hiểu chưa"*. Tester 3 cũng đề xuất luồng tương tự: *"Tự chọn từ khóa muốn tìm hiểu, sau đó AI mới kiểm tra bài bằng bộ câu hỏi"*.
- **Ý nghĩa nhận thức:** Người học cần được **nạp thông tin (Input/Catch-up)** trước, sau đó mới có khả năng **trả lời kiểm tra (Output/Verify)**.

### Pattern 3: Nhu cầu Đối chứng Slide gốc để chống Hallucination của AI
- **Mô tả hành vi:** Dù học viên đánh giá cao sự tiện lợi của AI tóm tắt, họ không đặt niềm tin tuyệt đối vào câu trả lời của AI và luôn có nhu cầu đối soát với nội dung chính thống của giảng viên.
- **Biểu hiện thực tế:** Tester 1 nói rõ: *"Không tự tin vào câu trả lời, sợ model sai, hallucinate"*; Tester 1 và Tester 2 đều chủ động bấm mở rộng phần "Mở slide gốc để kiểm tra" ở Option C.
- **Ý nghĩa thiết kế:** Mọi bản tóm tắt AI đều bắt buộc phải đính kèm số slide nguồn, trích dẫn nguyên văn và nút mở tài liệu gốc để tạo sự an tâm tuyệt đối cho người học.

### Pattern 4: Mong muốn Phân chia ranh giới rõ ràng giữa Người và AI
- **Mô tả hành vi:** Học viên muốn giữ quyền kiểm soát ở các bước định hướng (chọn slide, chọn keyword cần học) và giao việc nặng nhọc cho AI (cô đọng nội dung, trích xuất định nghĩa, tạo bài tập kiểm tra).
- **Biểu hiện thực tế:** Tester 2 muốn *"Tự highlight keyword, AI làm phần summary & định nghĩa"*. Tester 3 muốn *"Tự chọn slide/từ vựng, AI tạo câu hỏi kiểm tra bài"*.

---

## 3. Bằng chứng Chống lại Kỳ vọng Ban đầu (Evidence Against Prior Expectations)

| Kỳ vọng ban đầu của Nhóm | Bằng chứng thực tế thu thập được | Diễn giải & Đánh giá lại |
|---|---|---|
| **Kỳ vọng 1:** Học viên sẽ thích Option A (Bản đồ kiến thức tĩnh) vì được tự do làm chủ và tự tra cứu theo ý muốn. | **0/3 tester chọn Option A.** Cả 3 người đều lướt qua nhanh hoặc cảm thấy Option A tốn công tự tìm kiếm, không giải quyết được nhu cầu cấp bách khi bị trễ nhịp lớp. | Bản đồ tĩnh chỉ phù hợp cho việc tự học/ôn tập cuối kỳ, không phù hợp cho ngữ cảnh "đang trong buổi học và cần bắt kịp ngay". |
| **Kỳ vọng 2:** Mô hình "Hỏi trước → Chẩn đoán sau" của Option B sẽ giúp người học nhận diện chính xác lỗ hổng kiến thức. | Tester 2 và Tester 3 cảm thấy bị "khựng" khi phải trả lời câu hỏi lúc chưa nắm thông tin, và đề xuất luồng ngược lại. | Không nên bắt người học làm bài kiểm tra khi họ vừa mới bỏ lỡ bài giảng; cần cung cấp tóm tắt trước rồi mới hỏi xác nhận. |
| **Kỳ vọng 3:** Học viên sẽ tin tưởng ngay vào bản tóm tắt ngắn của AI ở Option C. | Tester 1 lo sợ AI hallucinate; Tester 1 & 2 đều bấm mở slide gốc để kiểm chứng lại từng câu chữ. | AI chỉ đóng vai trò bộ lọc sơ cấp (first-pass filter), slide gốc và bằng chứng trích dẫn vẫn là "chân lý" mà người học dựa vào. |

---

## 4. Quyết định Thay đổi Kế tiếp (Group Next Change)

### Quyết định Cốt lõi của Nhóm:
> **Chuyển đổi toàn bộ kiến trúc sản phẩm từ 3 Option rời rạc thành một luồng trải nghiệm hợp nhất duy nhất: "Tóm tắt Trọng tâm Trước → Kiểm chứng Nguồn → Kiểm tra Độ hiểu Sau" (Summarize, Ground & Verify Flow).**

### Thiết kế Chi tiết cho Vòng lặp Sản phẩm Kế tiếp (Next Iteration Design):

```text
[Học viên bị lỡ bài] 
       ↓ 
[Bước 1: Fast Catch-up] → Tự chọn phạm vi (Slider 1–3 slide) → AI tóm tắt 2–3 ý cốt lõi + keyword chính
       ↓ 
[Bước 2: Grounding & Trust] → Đính kèm trích dẫn nguyên văn & link mở trực tiếp Slide gốc để đối soát chống Hallucination
       ↓ 
[Bước 3: Active Verification] → AI tạo 1–2 câu hỏi tương tác nhanh để học viên tự xác nhận mức độ hiểu trước khi quay lại bài
```

### Các hành động cụ thể cho phiên bản tiếp theo:
1. **Loại bỏ Option A dạng bản đồ độc lập:** Tích hợp cấu trúc khái niệm trực tiếp vào các thẻ keyword trong bản tóm tắt.
2. **Cải tiến Option C làm giao diện mặc định:** Giữ lại thanh slider chọn phạm vi tóm tắt (1 slide / 3 slide / toàn bài) vì được người học đánh giá rất cao về tính linh hoạt.
3. **Đưa cơ chế câu hỏi chẩn đoán của Option B xuống cuối:** Biến các câu hỏi chẩn đoán thành tính năng *"Kiểm tra độ hiểu nhanh"* sau khi người học đã đọc xong bản tóm tắt, giúp củng cố kiến thức mà không tạo áp lực nhận thức.
4. **Bổ sung ví dụ thực tế (Concrete Examples):** Tích hợp thêm 1 ví dụ thực tế ngắn gọn (như case study Thin Wrapper vs Vertical AI) vào mỗi bản tóm tắt theo đề xuất của Tester 2.

---

## 5. Những điều Vẫn chưa được Chứng minh (Still Unproven)

1. **Hành vi trong môi trường thực tế (Live Class Context):** 
   - *Câu hỏi:* Trong một buổi học trực tiếp với áp lực thời gian thực và giảng viên đang nói liên tục, liệu học viên có thực sự dừng lại 2–3 phút để đọc tóm tắt và làm câu hỏi kiểm tra, hay họ chỉ nhìn lướt qua rồi tắt đi?
2. **Độ sâu kiến thức thực tế (Learning Depth vs Superficial Catch-up):**
   - *Câu hỏi:* Liệu việc đọc bản tóm tắt 3 ý của AI có giúp học viên thực sự hiểu sâu và giải quyết được các bài tập thực hành/thảo luận nâng cao sau đó, hay chỉ mang lại cảm giác an tâm giả tạo (*illusion of competence*)?
3. **Mức độ phụ thuộc vào AI (Over-reliance):**
   - *Câu hỏi:* Nếu tính năng tóm tắt quá nhanh và tiện lợi, liệu học viên có hình thành thói quen chủ quan, ỷ lại và dễ mất tập trung hơn trong giờ học vì biết luôn có AI "bắt kịp" hộ phía sau không?
4. **Tỷ lệ sử dụng tính năng kiểm tra (Verification Feature Adoption):**
   - *Câu hỏi:* Sau khi đọc xong tóm tắt, bao nhiêu phần trăm học viên sẽ thực sự chủ động bấm vào nút làm câu hỏi kiểm tra độ hiểu so với việc bấm ngay nút "Quay lại bài học"?
