# Three-Option Design Sheet

## Thông tin chung

- **Case:** AI Tutor — hỗ trợ học viên bắt kịp bài học
- **Hypothesis Problem:** Khi đang học và gặp một đoạn giải thích hoặc bài tập chưa hiểu, học viên gặp khó khăn trong việc tiếp tục bài học vì không xác định được khái niệm nền nào mình đang thiếu hoặc hiểu sai, dẫn đến phải đọc lại, tìm nhiều nguồn hoặc hỏi người khác, làm mất thời gian, gián đoạn nhịp học và có thể bỏ qua phần chưa hiểu hoặc dừng bài.
- **Content/data fixture dùng chung:** Khái niệm `Application Layer` và `Foundation Model`.

## 1. Quyết định chung cho A/B/C

| Thành phần | Quyết định chung |
|---|---|
| Target user | Học viên đang tham gia khóa học và muốn bắt kịp bài giảng |
| Situation | Đang học và gặp một đoạn giải thích hoặc bài tập chưa hiểu hoặc chưa kịp hiểu |
| Task | Xác định điểm vướng và lấy lại đủ kiến thức cần thiết để tiếp tục bài hiện tại |
| Desired outcome | Tiếp tục bài học nhanh chóng mà không bị mất nhịp hoặc mơ hồ |
| Content/data fixture | Application Layer vs Foundation Model; các slide liên quan trong bài học hiện tại |

## 2. Ba solution options

| Thành phần | Option A — Bản đồ kiến thức tĩnh | Option B — AI chẩn đoán qua câu hỏi | Option C — Nút “Bắt kịp” |
|---|---|---|---|
| Solution mechanism | Bản đồ kiến thức để user tự tìm khái niệm đang thiếu | AI hỏi 2–3 câu để cùng user xác định điểm vướng | AI tóm tắt nhanh 1–3 slide gần nhất mà user có thể đã bỏ lỡ |
| User làm gì? | Mở bản đồ, tự chọn khái niệm và xem nội dung liên quan | Trả lời câu hỏi, có thể bỏ qua hoặc sửa câu trả lời | Chủ động bấm “Bắt kịp”, đọc tóm tắt, mở slide gốc hoặc bỏ qua |
| AI làm gì? | Không chẩn đoán; hiển thị nội dung theo khái niệm user chọn | Đặt câu hỏi, tổng hợp câu trả lời và đưa ra đề xuất ôn tập | Trích xuất ý chính, tạo tóm tắt và ví dụ từ các slide gần nhất |
| Trigger | User bấm “Xem bản đồ kiến thức” | User bấm “Chẩn đoán cùng AI” | User bấm “Bắt kịp” trên giao diện bài học |
| Trade-off chính | User có quyền kiểm soát cao nhưng phải tự tìm và có thể chọn sai | Cá nhân hóa hơn nhưng tốn 1–2 phút và có thể chẩn đoán sai | Nhanh và ít công sức nhưng có thể bỏ sót chi tiết hoặc nguyên nhân thật sự |

## 3. Distance check

- **A khác B vì:** Option A để user tự tìm lỗ hổng trên bản đồ tĩnh, còn Option B dùng hỏi–đáp để AI và user cùng xác định điểm vướng.
- **B khác C vì:** Option B cố gắng chẩn đoán nhu cầu học qua câu trả lời của user, còn Option C khôi phục nhanh nội dung slide vừa bỏ lỡ mà không chẩn đoán cá nhân.
- **A khác C vì:** Option A không để AI suy luận và yêu cầu user tự điều hướng, còn Option C để AI chủ động tạo tóm tắt sau khi user kích hoạt.

## 4. Human–AI Design Pass

### Option A — Bản đồ kiến thức tĩnh

#### Expectation

- User được thông báo đây là bản đồ tham khảo, không phải kết quả chẩn đoán cá nhân.
- Hệ thống chỉ giúp user xem quan hệ giữa các khái niệm và nội dung liên quan.

#### Role and Agency

- User tự chọn khái niệm cần kiểm tra, ví dụ `Foundation Model` hoặc `Application Layer`.
- Hệ thống chỉ hiển thị nội dung đã được liên kết; không tự kết luận user đang thiếu kiến thức nào.
- Ở critical moment, AI ở trạng thái **Don't Act** trong việc chẩn đoán.

#### Evidence and Uncertainty

- Mỗi khái niệm hiển thị slide hoặc nội dung bài học liên quan.
- Không hiển thị điểm tin cậy vì hệ thống không đưa ra suy luận cá nhân.
- Cần ghi rõ: “Bạn đang tự chọn nội dung để kiểm tra; bản đồ không xác định chắc chắn điểm bạn chưa hiểu.”

#### Control and Recovery

- User có thể đổi khái niệm, đóng phần giải thích hoặc quay lại bản đồ.
- User có thể mở lại bài học ban đầu mà không mất vị trí.

### Option B — AI chẩn đoán qua câu hỏi

#### Expectation

- Trước khi bắt đầu, user biết AI sẽ hỏi 2–3 câu để đưa ra một giả thuyết về điểm chưa hiểu.
- AI không khẳng định chẩn đoán là đúng tuyệt đối.

#### Role and Agency

- User trả lời câu hỏi, có thể bỏ qua, sửa câu trả lời hoặc tự chọn chủ đề khác.
- AI đặt câu hỏi, tổng hợp câu trả lời và đưa ra đề xuất ôn tập để user xem xét.
- Ở critical moment, AI **Ask** trước khi đưa ra đề xuất; không tự thay đổi tiến trình học.

#### Evidence and Uncertainty

- Kết quả hiển thị câu trả lời hoặc tín hiệu đã dẫn tới đề xuất.
- Dùng nhãn “Giả thuyết của AI” và mức chắc chắn `Thấp / Vừa` thay vì khẳng định.
- Ví dụ: “AI nghĩ bạn có thể đang cần ôn Foundation Model vì bạn chọn rằng phần định nghĩa này chưa rõ.”

#### Control and Recovery

- User có thể sửa câu trả lời, từ chối đề xuất, chọn chủ đề khác hoặc làm lại phiên chẩn đoán.
- Sau khi từ chối, user quay về bài học ban đầu hoặc mở bản đồ kiến thức.

### Option C — Nút “Bắt kịp”

#### Expectation

- User biết nút này sẽ tóm tắt 1–3 slide gần nhất, không kiểm tra toàn bộ lỗ hổng kiến thức.
- Tóm tắt có thể ngắn và bỏ sót chi tiết chuyên sâu.

#### Role and Agency

- User chủ động bấm “Bắt kịp”, đọc kết quả và quyết định có mở nội dung gốc hay không.
- AI trích xuất ý chính và tạo ví dụ từ nội dung slide gần nhất.
- Ở critical moment, AI **Act** sau khi user chủ động kích hoạt; không tự chạy hoặc tự chuyển bài.

#### Evidence and Uncertainty

- Kết quả ghi rõ tóm tắt dựa trên slide nào, ví dụ: “Dựa trên slide 4–6”.
- Nếu dữ liệu không đủ, hiển thị cảnh báo thay vì tạo nội dung chắc chắn.
- User có thể mở nội dung đầy đủ để kiểm tra tóm tắt.

#### Control and Recovery

- User có thể mở slide gốc, xem phần đầy đủ, đóng tóm tắt hoặc quay lại bài học.
- Nếu tóm tắt không đúng, user tiếp tục task ban đầu bằng đường mở nội dung gốc.

## 5. Human–AI Decision Table

| Human–AI decision | Option A | Option B | Option C |
|---|---|---|---|
| User làm gì? AI làm gì? | User tự chọn khái niệm; hệ thống hiển thị nội dung liên quan | User trả lời 2–3 câu; AI đưa ra giả thuyết điểm vướng và đề xuất ôn tập | User bấm “Bắt kịp”; AI tóm tắt các slide vừa bỏ lỡ |
| AI Act / Ask / Don't Act? Vì sao? | Don't Act trong chẩn đoán; chỉ phản hồi khi user chọn | Ask trước, sau đó đưa đề xuất; không tự khẳng định | Act sau khi user chủ động bấm nút; không tự chạy |
| User hiểu capability/limit bằng gì? | Nhãn “Bản đồ tham khảo, không chẩn đoán cá nhân” | Mô tả “AI đưa ra phỏng đoán dựa trên câu trả lời” | Mô tả “Tóm tắt nội dung gần đây, có thể bỏ sót chi tiết” |
| Evidence/uncertainty thể hiện thế nào? | Hiển thị slide hoặc nội dung liên quan đến khái niệm được chọn | Hiển thị tín hiệu/câu trả lời dẫn tới đề xuất và mức chắc chắn | Hiển thị slide nguồn và cảnh báo khi dữ liệu không đủ |
| User kiểm soát và recovery thế nào? | Đổi khái niệm, đóng nội dung, quay lại bài học | Sửa câu trả lời, bỏ qua, từ chối đề xuất, chọn chủ đề khác | Mở slide gốc, xem bản đầy đủ, đóng tóm tắt, quay lại bài học |

## 6. Feedback và dữ liệu

- Cả ba option chỉ sử dụng nội dung của bài học hiện tại và các slide liên quan.
- Câu trả lời chẩn đoán của Option B chỉ ảnh hưởng phiên hiện tại, không tự động ghi nhớ cho lần sau.
- User có thể từ chối đề xuất, đóng hỗ trợ hoặc quay lại nội dung gốc.
- Prototype không dùng dữ liệu nhạy cảm và không tự động gửi nội dung ra ngoài phiên học.

## 7. Critical interaction cần prototype

| Option | Common context | Critical interaction | Result / User decision |
|---|---|---|---|
| A | User đang ở bài Application Layer vs Foundation Model và không hiểu một đoạn | User mở bản đồ và tự chọn khái niệm cần xem | User đọc nội dung liên quan, đổi khái niệm hoặc quay lại bài |
| B | Cùng context và cùng fixture | User bắt đầu phiên chẩn đoán, trả lời câu hỏi và xem giả thuyết của AI | User chấp nhận đề xuất, sửa câu trả lời, từ chối hoặc chọn chủ đề khác |
| C | Cùng context và cùng fixture | User bấm “Bắt kịp” để xem tóm tắt slide gần nhất | User đọc tóm tắt, mở slide gốc, đóng tóm tắt hoặc tiếp tục bài |

## 8. Gate 3 — Human control self-check

- [x] Mỗi option nói rõ user và AI làm gì.
- [x] Mỗi option nêu rõ AI ở trạng thái Act, Ask hoặc Don't Act.
- [x] Mỗi option mô tả capability và limit trước khi AI/hệ thống hoạt động.
- [x] Mỗi option chỉ ra evidence hoặc nguồn dữ liệu được sử dụng.
- [x] Mỗi option có ít nhất một đường kiểm soát hoặc phục hồi khi kết quả không phù hợp.

> Đây là design hypothesis để đưa vào prototype và kiểm thử, chưa phải bằng chứng rằng option nào hiệu quả hoặc phù hợp nhất.
