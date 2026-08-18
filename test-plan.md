# Test Plan — Chặng 5

## 1. Mục tiêu phiên test

Quan sát cách tester tự sử dụng ba phương án A/B/C để bắt kịp một đoạn bài học chưa hiểu, từ đó phát hiện interaction breakdown, cách tester phân chia công việc với AI và trade-off họ chấp nhận.

Phiên test không nhằm chứng minh solution đã đúng hoặc product value đã được validated.

## 2. Prototype

- **Link:** [Mở prototype A/B/C trên GitHub Pages](https://uwu-coder-factorial.github.io/K4-Track01-Day18-2A202601200-NguyenQuyDung/prototype/)
- **Options:**
  - Option A — Bản đồ kiến thức tĩnh.
  - Option B — AI chẩn đoán qua câu hỏi.
  - Option C — Nút “Bắt kịp”.
- **Cấu trúc:** Mỗi option có đúng ba trạng thái: Common Context → Critical Interaction → Result/User Decision.

## 3. Relevant context

Hỏi trong tối đa hai phút:

> “Gần đây bạn có từng đang học nhưng bỏ lỡ hoặc chưa hiểu một đoạn giải thích, khiến bạn phải đọc lại, tìm nguồn khác hoặc hỏi người khác không?”

### Thông tin cần ghi lại

- Tester đã từng gặp context liên quan: Có / Không.
- Tình huống gần nhất tester mô tả: ............................................................
- Cách tester đã xử lý khi đó: ..................................................................

Nếu tester chưa từng có context liên quan, vẫn tiếp tục test để tìm interaction breakdown, nhưng không dùng phiên đó để đưa ra value claim mạnh.

## 4. Outcome task dùng chung cho A/B/C

Đọc nguyên văn cho tester, không nói nút nào cần bấm:

> “Trong tình huống này, hãy dùng từng phương án để hiểu đủ hai khái niệm và giải thích: Một ứng dụng AI khác gì so với foundation model?”

### Điều phải giữ giống nhau

- Cùng tester context.
- Cùng task.
- Cùng fixture `Application Layer vs Foundation Model`.
- Cùng desired outcome: tiếp tục bài học mà không còn mơ hồ.
- Tester tự thao tác cả A, B và C.

## 5. Observation focus — tối đa năm điểm

| # | Điểm quan sát | Cần chú ý |
|---|---|---|
| 1 | First action | Tester nhìn hoặc thao tác vào đâu đầu tiên? |
| 2 | Hesitation/misunderstanding | Tester dừng, do dự hoặc hiểu sai ở đâu? |
| 3 | Evidence read/ignored | Tester có đọc source, confidence và uncertainty không? |
| 4 | Correction/recovery | Tester sửa câu trả lời, quay lại, từ chối hoặc reset như thế nào? |
| 5 | Option và trade-off | Tester chọn phương án nào và chấp nhận đánh đổi gì? |

## 6. Vai trò trong phiên test

- **Tester:** Tự điều khiển prototype và nói to suy nghĩ.
- **Facilitator:** Đọc task, quan sát, không hướng dẫn thao tác và đặt câu hỏi so sánh ở cuối.
- **Note taker:** Nếu có, ghi hành vi và lời nói gần nguyên văn; không trộn diễn giải vào observation.

Nếu chỉ có một facilitator, ghi chú ngắn ngay trong phiên và hoàn thiện Feedback Note ngay sau khi kết thúc.

## 7. Timeline 20 phút

| Thời gian | Hoạt động |
|---|---|
| 0–2 phút | Làm tester thoải mái, đọc opening và hỏi relevant context |
| 2–6 phút | Tester thực hiện Option A |
| 6–10 phút | Reset, tester thực hiện Option B |
| 10–14 phút | Reset, tester thực hiện Option C |
| 14–18 phút | So sánh A/B/C, hỏi lý do và trade-off |
| 18–20 phút | Facilitator hoàn thành Feedback Note của phiên |

## 8. Opening script

Đọc nguyên văn:

> “Chúng mình đang thử ba cách thiết kế, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn.”

Sau đó đọc Outcome Task ở Mục 4.

## 9. Luật facilitation

- Tester tự điều khiển prototype.
- Dùng cùng một task cho A/B/C.
- Reset về Common Context trước mỗi option.
- Không narrate hoặc giải thích nút, icon hay cách hoạt động.
- Không lấp khoảng im lặng.
- Không hỏi “Bạn có thích không?”.
- Không bảo tester chọn option nào.
- Không sửa hoặc làm đẹp feedback tiêu cực.
- Khi tester hỏi cách hoạt động, hỏi lại: “Theo bạn, nó nên hoạt động như thế nào?”

### Ba câu cứu hộ

Chỉ sử dụng khi cần:

> “Bạn cứ nói to suy nghĩ của mình nhé.”

> “Bạn sẽ làm gì tiếp theo?”

> “Theo bạn, nó nên hoạt động như thế nào?”

## 10. Compare script

Sau khi tester hoàn thành cả A/B/C, hỏi:

> “Trong tình huống này, bạn chọn A, B hay C? Vì sao?”

> “Bạn muốn tự làm phần nào và giao cho AI phần nào?”

> “Điều gì ở phương án đã chọn khiến bạn chưa thoải mái?”

Có thể hỏi tiếp để làm rõ hành vi vừa quan sát:

> “Lúc đó điều gì khiến bạn dừng lại?”

> “Bạn đã dựa vào thông tin nào để quyết định?”

Không chuyển các câu hỏi này thành câu hỏi dẫn dắt hoặc yêu cầu tester khen/chê giao diện.

## 11. Reset checklist

Trước mỗi option:

- [ ] Bấm `Reset prototype`.
- [ ] Xác nhận prototype trở về Option A — State 1, sau đó mở option cần test.
- [ ] Không giải thích trước critical interaction.
- [ ] Giữ nguyên task và content fixture.

Trước tester tiếp theo:

- [ ] Prototype đã reset hoàn toàn.
- [ ] Feedback của tester trước không còn hiển thị.
- [ ] Link vẫn mở được ở cửa sổ ẩn danh.

## 12. Thứ tự test

Thứ tự mặc định cho tất cả phiên:

```text
Option A → Reset → Option B → Reset → Option C
```

Nếu nhóm đổi thứ tự để giảm order bias, phải ghi rõ thứ tự thực tế trong từng Feedback Note và không thay task.

## 13. Sau phiên test

Facilitator điền kết quả thật vào `prototype-feedback-note.md`, gồm:

- Tester/context.
- First action.
- Chỗ dừng, do dự hoặc hiểu sai.
- Evidence được đọc hay bỏ qua.
- Cách tester sửa hoặc lấy lại control.
- Option được chọn, lý do và trade-off.
- Evidence chống lại kỳ vọng của nhóm.
- Observed.
- Interpreted.
- Decided — Next Change.
- Still Unproven.

> Không điền observation, quote hoặc feedback trước khi phiên test thật diễn ra.
