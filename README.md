# Track 1 - Day 18 — Multiple Prototypes - Human–AI design

## Chặng 1 — Tổng hợp evidence

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

Prototype A/B/C chạy độc lập bằng HTML/CSS/JavaScript và dùng chung context, task, fixture `Application Layer vs Foundation Model`. Mở prototype tại [prototype-link.md](./prototype-link.md).

- **Option A:** User tự chọn khái niệm trên bản đồ kiến thức.
- **Option B:** User trả lời hai câu hỏi và quyết định có chấp nhận giả thuyết của AI hay không.
- **Option C:** User chủ động bấm “Bắt kịp”, đọc tóm tắt và có thể mở slide gốc.

Annotation dành cho người facilitate nằm tại [prototype-annotations.md](./prototype-annotations.md), không đưa cho tester xem.
