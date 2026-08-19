# Track 1 - Day 18 — Multiple Prototypes - Human–AI design

## Thành viên

| Tên | MHV |
| --- | --- |
| Trần Thị Kiều Trang | 2A202601498 |
| Nguyễn Quý Dũng | 2A202601200 |

> Nhóm hiện có hai thành viên được ghi nhận trong repo này. Nếu nhóm có thành viên thứ ba, cần bổ sung tên và MHV trước khi nộp.

## Đóng góp của tôi — Trần Thị Kiều Trang

- Tổng hợp evidence Day 17 liên quan đến các tình huống người học bị vướng khái niệm, chốt Hypothesis Problem và ghi rõ điều vẫn chưa được chứng minh.
- Tham gia phân biệt và review ba solution mechanisms A/B/C, đặc biệt các quyết định về agency, evidence/uncertainty và control/recovery.
- Trực tiếp facilitate/test cả ba option A/B/C với tester ngoài nhóm; ghi nhận first action, điểm do dự, evidence được đọc/bỏ qua, recovery và trade-off.
- Tham gia tổng hợp pattern giữa các feedback và chốt Group Next Change “Tóm tắt trọng tâm trước → Kiểm chứng nguồn → Kiểm tra độ hiểu sau”.

## Chặng 1 — Tổng hợp evidence

Các đầu vào Day 17 được đặt cạnh nhau tại [day17-inputs.md](./day17-inputs.md) để đối chiếu trước khi chốt Hypothesis Problem.

### 1. Evidence Huddle
| Practice Note / Lượt luyện | User đã thực sự làm/nói gì? (Hành vi) | Điều nhóm đang diễn giải |
| --- | --- | --- |
| Lượt Dũng | Bị phân tâm (xem điện thoại) → Bỏ lỡ lời giảng → Tìm Google/AI và hỏi bạn bên cạnh. | Rào cản chính do mất tập trung / bỏ lỡ lời giảng, không hẳn là thiếu kiến thức nền. |
| Lượt Trang (1) | Vướng phần phân biệt capability của model vs giá trị wrapper (mất 20 phút) → Không tham gia thảo luận được → Hỏi trợ giảng. | Học viên thiếu khái niệm nền (foundation model vs application layer) nên không nối được kiến thức mới. |
| Lượt Trang (2 - Đối chứng) | Vướng phần policy layer → Hiểu ngay khi nhận được một ví dụ về kiểm soát quyền truy cập. | Rào cản là thiếu ví dụ minh họa, không phải thiếu cả chuỗi kiến thức nền. |

* Hành vi xuất hiện nhiều nhất: Học viên gặp khó khi giải thích khái niệm trừu tượng và chọn cách hỏi người khác hoặc tra AI/Google bên ngoài.

* Điều bất ngờ: Nhiều trường hợp "chưa hiểu" không hẳn do thiếu kiến thức nền (Hypothesis A), mà do bỏ lỡ lời giảng hoặc thiếu ví dụ thực tế (Hypothesis B).

* Hypothesis Problem đủ cụ thể: Nhóm vẫn giữ Hypothesis A làm gốc theo đúng yêu cầu đề bài để làm giải thuyết thiết kế cho Day 18.

### 2. Chốt Hypothesis Problem

**Hypothesis Problem nhóm tiếp tục:**
Khi đang học và gặp một đoạn giải thích hoặc bài tập chưa hiểu (situation), học viên (user) gặp khó khăn trong việc tiếp tục bài học (job) vì không xác định được khái niệm nền nào mình đang thiếu hoặc hiểu sai (barrier), dẫn đến phải đọc lại/tìm nhiều nguồn/hỏi người khác, làm mất thời gian, gián đoạn nhịp học và có thể bỏ qua phần chưa hiểu hoặc dừng bài (consequence).

**Evidence ban đầu hỗ trợ giả thuyết:** 
Trải nghiệm của user trong lượt phỏng vấn của Trang: tốn 20 phút vướng khái niệm, bị gián đoạn không tham gia thảo luận được cho đến khi được trợ giảng giải thích rõ khái niệm nền.

**Điều vẫn chưa được chứng minh:** 
Liệu việc ôn lại kiến thức nền có thực sự giúp đa số học viên tiếp tục ngay bài học hay họ chỉ cần một ví dụ khác / nghe lại đoạn giải thích bị bỏ lỡ?

## Chặng 2 — Chọn ba Solution Options

| Thành phần | Quyết định chung cho A/B/C |
| --- | --- |
| Target user | Học viên đang tham gia khóa học, đang muốn catchup với bài giảng|
| Situation | Đang học và gặp một đoạn giải thích hoặc bài tập chưa hiểu hoặc chưa kịp hiểu |
| Task | Xác định điểm vướng và lấy lại đủ kiến thức cần thiết để tiếp tục bài hiện tại |
| Desired outcome | Tiếp tục bài học nhanh chóng mà không bị mất nhịp hay mơ hồ |
| Content/data fixture | Khái niệm: Application Layer vs Foundation Model |

| Thành phần | Option A | Option B | Option C |
| --- | --- | --- | --- |
| Solution mechanism | Bản đồ kiến thức tĩnh (thủ công) | AI chẩn đoán qua 2–3 câu hỏi | Nút "Bắt kịp": AI tóm tắt nhanh 1–3 slide gần nhất |
| User làm gì? | Tự xem sơ đồ, chọn phần bị hổng | Trả lời câu hỏi chẩn đoán của AI | Bấm "Bắt kịp", xem tóm tắt ngắn & ví dụ minh họa |
| AI làm gì? | Hiển thị nội dung theo User chọn | Đặt câu hỏi & đưa bài ôn phù hợp | Tự trích xuất & tóm tắt ý chính các slide vừa qua |
| Trigger | Bấm "Xem bản đồ kiến thức" | Bấm "Chẩn đoán cùng AI" | Bấm nút "Bắt kịp" trên giao diện bài học |
| Trade-off chính | Tốn công tự tìm, dễ chọn sai | Tốn 1–2 phút làm chẩn đoán | Tóm tắt quá ngắn có thể bỏ lỡ chi tiết chuyên sâu |

Distance check
Hoàn thành ba câu mà không nhắc màu, layout hoặc wording:

**A khác B** vì Option A để user tự tìm lỗ hổng trên sơ đồ tĩnh, còn Option B dùng AI hỏi - đáp để cùng chẩn đoán điểm vướng.
**B khác C** vì Option B tập trung đào sâu ôn kiến thức nền, còn Option C tập trung khôi phục nội dung slide vừa bỏ lỡ.
**A khác C** vì Option A user làm chủ hoàn toàn không có AI can thiệp, còn Option C AI tự động cô đọng và tóm tắt sẵn nội dung.

## Chặng 3 — Human–AI Design Pass

Chi tiết thiết kế Human–AI, Human–AI Decision Table, critical interaction và Gate 3 self-check nằm trong [three-option-design-sheet.md](./three-option-design-sheet.md).

## Chặng 4 — Build 3 Micro-prototypes

Prototype A/B/C chạy độc lập bằng HTML/CSS/JavaScript và dùng chung context, task, fixture `Application Layer vs Foundation Model`. [Mở prototype trên GitHub Pages](https://uwu-coder-factorial.github.io/K4-Track01-Day18-2A202601200-NguyenQuyDung/prototype/) hoặc xem hướng dẫn và link dự phòng tại [prototype-link.md](./prototype-link.md).

- **Option A:** User tự chọn khái niệm trên bản đồ kiến thức.
- **Option B:** User trả lời hai câu hỏi và quyết định có chấp nhận giả thuyết của AI hay không.
- **Option C:** User chủ động bấm “Bắt kịp”, đọc tóm tắt và có thể mở slide gốc.

Annotation dành cho người facilitate nằm tại [prototype-annotations.md](./prototype-annotations.md), không đưa cho tester xem.

## Chặng 5 — Chuẩn bị test

Kế hoạch test gồm relevant context, outcome task, observation focus, opening script, compare script, timeline và luật facilitation nằm trong [test-plan.md](./test-plan.md).

## Chặng 5 — Chuẩn bị kịch bản Test (Test Plan & Test Cases)

### 1. Ngữ cảnh thử nghiệm (Context Setup)
> *"Bạn đang học bài 'Application Layer và Foundation Model' nhưng vừa bị bỏ lỡ một đoạn giảng giải quan trọng. Bạn cần nhanh chóng lấy lại kiến thức để có thể tiếp tục hoàn thành bài học."*

### 2. Nhiệm vụ chung cho Tester (Common Task)
> *"Hãy dùng thử từng phương án để tìm hiểu và giải thích được câu hỏi: 'Một ứng dụng AI (Application Layer) khác gì so với Foundation Model?'"*

### 3. 5 Điểm quan sát trọng yếu (Observation Points)
1. **Hành động đầu tiên:** Tester bấm vào đâu đầu tiên khi mở giao diện (nút bấm chính, tab chuyển đổi hay đọc nội dung bài học)?
2. **Điểm khựng/Mất thời gian:** Tester dừng lại lâu nhất ở bước nào (đọc bản đồ, trả lời câu hỏi chẩn đoán hay xem tóm tắt)?
3. **Độ hiểu về AI Capability & Limitation:** Tester có nhận ra sự khác biệt giữa sơ đồ tĩnh (Option A), gợi ý suy luận từ AI (Option B) và tóm tắt nhanh (Option C) không?
4. **Hành vi Sửa sai & Kiểm soát (Control & Recovery):** Tester có thử bấm đổi khái niệm, từ chối giả thuyết AI hoặc mở lại slide gốc không?
5. **Cảm nhận sự tin tưởng & Tốc độ:** Tester cảm thấy phương án nào giúp họ tự tin giải thích lại bài học nhanh nhất?

### 4. Bảng Test Cases chi tiết cho từng Option

| Test Case ID | Option | Thao tác kỳ vọng (Test Steps) | Kết quả mong đợi (Expected Outcome) | Tiêu chí Đạt (Pass Criteria) |
|---|---|---|---|---|
| **TC-A01** | **Option A** | 1. Bấm "Xem bản đồ kiến thức"<br>2. Chọn node 01 "Foundation Model"<br>3. Chọn node 02 "Thin Wrapper"<br>4. Chọn node 03 "Vertical AI"<br>5. Bấm "Quay lại bài học" hoặc "Đổi khái niệm" | Hiển thị đầy đủ nội dung, trích dẫn quote và nguồn tương ứng với 3 khái niệm; Tester chủ động chuyển đổi tra cứu giữa 3 lựa chọn. | Tester hiểu đây là sơ đồ tham khảo tĩnh, tự lựa chọn và so sánh 3 khái niệm để giải thích sự khác biệt giữa model, wrapper và vertical AI. |
| **TC-B01** | **Option B** | 1. Bấm "Chẩn đoán cùng AI"<br>2. Thử các tổ hợp câu trả lời khác nhau (ví dụ: chọn nhầm tính năng, chọn thiếu ví dụ, hoặc chọn chưa chắc/chưa biết)<br>3. Xem 3 kết quả chẩn đoán động, độ chắc chắn (Cao/Vừa/Thấp) và phần giải thích ngắn gọn<br>4. Bấm nút hành động ôn bài hoặc "Sửa câu trả lời" | AI đưa ra chẩn đoán chính xác theo từng tổ hợp, kèm giải thích ngắn gọn và lý do (evidence); Tester nhận diện được đây là giả thuyết gợi ý của AI. | Tester hiểu AI đưa ra giả thuyết dựa trên câu trả lời, biết đọc phần giải thích và có thể chấp nhận hoặc sửa câu trả lời. |
| **TC-C01** | **Option C** | 1. Bấm nút "Bắt kịp nội dung vừa bỏ lỡ"<br>2. Kéo slider thử 3 nấc (Nấc 1: 1 slide, Nấc 2: 3 slide đề xuất, Nấc 3: Toàn bài)<br>3. Bấm "Tạo bản tóm tắt" tương ứng từng nấc<br>4. Bấm "Mở slide gốc" để kiểm chứng hoặc "Đổi phạm vi" để kéo lại slider | AI sinh ra bản tóm tắt, bullet points và nguồn trích dẫn tương ứng với nấc phạm vi đã chọn; Tester mở được slide gốc đối chứng. | Tester hiểu nút này cho phép chủ động kiểm soát phạm vi tóm tắt của AI và biết cách mở slide gốc để kiểm tra chi tiết. |

---

## Chặng 6 — Khung ghi nhận kết quả Test (Feedback Note & Next Change)

Biểu mẫu ghi nhận chi tiết cho từng người học nằm tại [prototype-feedback-note.md](./prototype-feedback-note.md).  
Báo cáo phân tích chuyên sâu các Pattern, Group Next Change và Still Unproven nằm tại [group-feedback-synthesis.md](./group-feedback-synthesis.md).

### 1. Bảng ghi nhận phản hồi 3 Tester (Feedback Notes)

| Tester | Option yêu thích nhất | Điểm họ khựng lại / Mơ hồ | Gợi ý / Phản hồi từ Tester |
|---|---|---|---|
| **Tester 1** (Vũ Đình Huy) | **Option C** (Nấc 2) | Tưởng Option A là sơ đồ dạng cây; lo ngại model AI có thể hallucinate khi đọc tóm tắt. | Vừa đọc slide vừa xem tóm tắt trực quan giúp bắt kịp nhanh nhất; cần có nguồn slide gốc đối chứng. |
| **Tester 2** (Nguyễn Minh Quân) | **Option B** | Khựng lại ở phần đọc giải thích của Option B; flow hơi ngắn chưa đủ ví dụ. | AI giải thích nhanh, đỡ tốn công tìm kiếm; đề xuất nên giải thích keyword trước rồi mới hỏi câu trắc nghiệm kiểm tra. |
| **Tester 3** (Đào Văn Đạt) | **Option C** (Nấc 1) | Do dự ở nút "Không dùng AI" vs "Dùng AI"; khựng lại ở bước Critical Interaction của Option A & B. | Chọn C để tối ưu thời gian; mong muốn tự chọn từ khóa/slide và để AI tạo bộ câu hỏi kiểm tra lại mức độ hiểu. |

### 2. Thay đổi tiếp theo cho sản phẩm (Group Next Change)
* **Thay đổi chính nhóm chốt sau bài Test:** Hợp nhất ưu điểm tốc độ của **Option C (Tóm tắt nhanh theo phạm vi)** với cơ chế kiểm tra độ hiểu của **Option B (Hỏi - đáp xác nhận)** thành luồng thống nhất: **"Tóm tắt trọng tâm trước → Kiểm tra độ hiểu sau" (Summarize & Verify Flow)**.
* **Hành động cụ thể:**
  1. Cung cấp nút tóm tắt 1–3 slide gần nhất kèm định nghĩa keyword và ví dụ trực quan ngay khi học viên bị lỡ nhịp.
  2. Giữ nguyên liên kết mở slide gốc trực tiếp bên dưới bản tóm tắt để người học đối soát chống hallucination.
  3. Sau khi đọc tóm tắt, cung cấp tùy chọn cho AI tạo 1–2 câu hỏi trắc nghiệm ngắn để học viên tự kiểm tra xem mình đã hiểu đúng hay chưa trước khi quay lại bài học.

---

## Nhật ký sử dụng AI (AI Support Log)

Chi tiết nhật ký sử dụng AI của 2 thành viên nhóm (Nguyễn Quý Dũng & Trần Thị Kiều Trang) được ghi nhận đầy đủ tại [ai-support-log.md](./ai-support-log.md).

Đầu vào Day 17 được đặt cạnh nhau tại [day17-inputs.md](./day17-inputs.md), gồm ba Practice Notes, Solution Parking Lot và Conversation Guide tham chiếu.
