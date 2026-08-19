const tabs = document.querySelectorAll('.tab');
const flows = document.querySelectorAll('.option-flow');

function showState(option, state) {
  const flow = document.querySelector(`#option-${option}`);
  flow.querySelectorAll('.state-screen').forEach((screen) => {
    screen.hidden = Number(screen.dataset.state) !== state;
  });
  flow.querySelectorAll('.state-stepper li').forEach((step) => {
    const stepNumber = Number(step.dataset.step);
    step.classList.toggle('active', stepNumber === state);
    step.classList.toggle('complete', stepNumber < state);
  });
}

function showOption(option) {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.option === option));
  flows.forEach((flow) => { flow.hidden = flow.dataset.option !== option; });
  showState(option, 1);
}

tabs.forEach((tab) => tab.addEventListener('click', () => showOption(tab.dataset.option)));

document.querySelectorAll('.next-state').forEach((button) => button.addEventListener('click', () => {
  const flow = button.closest('.option-flow');
  showState(flow.dataset.option, Number(button.dataset.next));
}));

document.querySelectorAll('.previous-state').forEach((button) => button.addEventListener('click', () => {
  const flow = button.closest('.option-flow');
  showState(flow.dataset.option, Number(button.dataset.previous));
}));

document.querySelectorAll('.restart-option').forEach((button) => button.addEventListener('click', () => {
  const flow = button.closest('.option-flow');
  showState(flow.dataset.option, 1);
}));

// Option A — user tự chọn khái niệm, không có suy luận AI.
const conceptCopy = {
  foundation: {
    title: '01. Foundation Model (Mô hình nền tảng)',
    body: 'Mô hình nền tảng cung cấp năng lực chung và suy luận thô (reasoning, ngôn ngữ, tạo nội dung) cho nhiều tác vụ. Theo thời gian, capability của frontier models ngày càng mở rộng và mạnh mẽ hơn.',
    quote: '“Frontier models hiện nay đã đủ tốt để giải quyết nhiều tác vụ tổng quát.”',
    source: 'Nguồn: Slide 2–3 · Khái niệm nền tảng',
  },
  wrapper: {
    title: '02. Thin Wrapper (Lớp vỏ mỏng & Rủi ro bị hấp thụ)',
    body: 'Lớp wrapper chỉ bọc bên ngoài để tăng cường tính năng hoặc bổ sung vài lớp kiểm soát đơn giản. Rủi ro lớn: Khi model mở rộng năng lực, nó sẽ hấp thụ luôn các tính năng này và sản phẩm không còn lý do để tồn tại.',
    quote: '“Nếu lớp wrapper của bạn chỉ giúp tăng cường năng lực của model hoặc bổ sung một vài lớp kiểm soát, thì rủi ro lớn nhất là model sẽ dần tích hợp luôn những khả năng đó — và sản phẩm của bạn không còn lý do để tồn tại.” — Nikesh Arora (Chairman & CEO, Palo Alto Networks)',
    source: 'Nguồn: Slide 4 · Rủi ro Wrapper mỏng',
  },
  vertical: {
    title: '03. Vertical AI (AI Expert + Domain Expert)',
    body: 'Mô hình kết hợp năng lực AI với tri thức ngành sâu. Sự khác biệt bền vững nằm ở cách doanh nghiệp vận hành, tích hợp phán đoán của chuyên gia, policy và trách nhiệm vào hệ thống để chuyển hóa sự nhạy bén của con người thành hiệu suất máy móc.',
    quote: '“Vertical AI = AI Expert + Domain Expert. Làm thế nào để chuyển hóa sự nhạy bén của con người thành hiệu suất của máy móc? Sự khác biệt nằm ở cách doanh nghiệp vận hành và tích hợp phán đoán của chuyên gia vào hệ thống.”',
    source: 'Nguồn: Slide 5–6 · Vertical AI & Domain Expert',
  },
};
// Alias dự phòng
conceptCopy.application = conceptCopy.wrapper;

let selectedConcept = null;

document.querySelectorAll('.concept-choice').forEach((button) => button.addEventListener('click', (e) => {
  const targetBtn = e.currentTarget || button;
  selectedConcept = targetBtn.dataset.concept;
  document.querySelectorAll('.concept-choice').forEach((choice) => choice.classList.toggle('selected', choice === targetBtn));
  if (conceptCopy[selectedConcept]) {
    document.querySelector('#conceptHint').textContent = `Đã chọn: ${conceptCopy[selectedConcept].title}`;
    document.querySelector('#viewConcept').disabled = false;
  }
}));

document.querySelector('#viewConcept').addEventListener('click', () => {
  if (!selectedConcept || !conceptCopy[selectedConcept]) return;
  const concept = conceptCopy[selectedConcept];
  const quoteHtml = concept.quote ? `<blockquote class="concept-quote">${concept.quote}</blockquote>` : '';
  document.querySelector('#mapResultContent').innerHTML = `<h3>${concept.title}</h3><p>${concept.body}</p>${quoteHtml}<p class="source">${concept.source}</p>`;
  showState('a', 3);
});

// Option B — hai câu hỏi cùng nằm trong một critical-interaction state, trả kết quả chẩn đoán động.
let currentDiagnosisDecision = 'Bạn chọn ôn lại kiến thức.';

function calculateDiagnosis(q1, q2) {
  // Case 1: Người dùng chọn chưa chắc/chưa biết ở câu 1 hoặc câu 2 hoặc không chọn
  if (!q1 && !q2) {
    return {
      confidence: 'THẤP',
      hypothesis: 'Bạn chưa trả lời câu hỏi nào; AI không có đủ dữ kiện và gợi ý bạn <strong>ôn lại tóm lược 3 khái niệm nền tảng</strong>.',
      explanation: '<strong>Giải thích nhanh 3 khái niệm:</strong><br>• <strong>Foundation Model:</strong> Mô hình nền cung cấp năng lực thô chung.<br>• <strong>Thin Wrapper:</strong> Lớp vỏ mỏng bọc giao diện, rủi ro bị model hấp thụ.<br>• <strong>Vertical AI:</strong> Kết hợp AI Expert + Domain Expert tạo lợi thế bền vững.',
      evidence: 'Bạn chưa chọn câu trả lời nào trong phiên hiện tại; AI giảm độ chắc chắn xuống mức THẤP.',
      actionButton: 'Ôn tóm lược 3 khái niệm nền tảng',
      decisionConfirmation: 'Bạn chọn xem tóm lược 3 khái niệm nền tảng.',
    };
  }

  if (q1 === 'unsure' || q2 === 'unsure') {
    return {
      confidence: 'THẤP',
      hypothesis: 'Bạn đang phân vân và chưa chắc chắn về điểm vướng. AI gợi ý bạn <strong>ôn lại nhanh 3 khái niệm nền tảng</strong>.',
      explanation: '<strong>Giải thích ngắn gọn 3 khái niệm cốt lõi:</strong><br>• <strong>01. Foundation Model:</strong> Cung cấp năng lực suy luận chung (ngôn ngữ, reasoning, tạo nội dung).<br>• <strong>02. Thin Wrapper:</strong> Ứng dụng chỉ bọc tính năng đơn giản — rủi ro bị model nuốt trọn khi model mở rộng.<br>• <strong>03. Vertical AI:</strong> Tích hợp sâu phán đoán chuyên gia, quy trình ngành và policy trách nhiệm.',
      evidence: 'Dựa trên việc bạn chọn "chưa chắc / chưa biết" ở câu hỏi chẩn đoán; AI giảm độ chắc chắn của giả thuyết.',
      actionButton: 'Ôn nhanh 3 khái niệm nền tảng',
      decisionConfirmation: 'Bạn chọn ôn nhanh 3 khái niệm nền tảng để củng cố kiến thức.',
    };
  }

  // Case 2: Nhầm lẫn giữa Model và Tính năng / Sản phẩm (q1 === 'feature' hoặc q2 === 'difference')
  if (q1 === 'feature' || q2 === 'difference') {
    return {
      confidence: 'CAO',
      hypothesis: 'Điểm vướng chính của bạn là <strong>nhầm lẫn giữa Foundation Model và Application Layer (Tính năng ứng dụng)</strong>.',
      explanation: '<strong>Giải thích ngắn gọn:</strong><br>• <strong>Foundation Model</strong> là nền tảng đa năng cung cấp năng lực suy luận thô chung cho nhiều bài toán (như GPT-4, Claude).<br>• <strong>Application Layer</strong> là sản phẩm đóng gói năng lực đó thành tính năng, giao diện và quy trình phục vụ một use case cụ thể. Một ứng dụng có thể dùng model nhưng không đồng nghĩa với chính model đó.',
      evidence: q1 === 'feature' 
        ? 'Dựa trên câu 1 bạn coi năng lực nền là "tính năng riêng", đây là dấu hiệu nhầm lẫn giữa model và lớp ứng dụng.'
        : 'Dựa trên câu 2 bạn cho biết đang gặp khó ở việc "phân biệt model và sản phẩm".',
      actionButton: 'Ôn phân biệt Model vs Application Layer',
      decisionConfirmation: 'Bạn chọn ôn bài phân biệt Foundation Model vs Application Layer.',
    };
  }

  // Case 3: q1 === 'model' && q2 === 'missed' (Đã hiểu đúng năng lực nền, cần ví dụ thực tế về Thin Wrapper vs Vertical AI)
  if (q1 === 'model' && q2 === 'missed') {
    return {
      confidence: 'CAO',
      hypothesis: 'Bạn đã nắm đúng bản chất Foundation Model, điểm vướng thực sự là <strong>cần ví dụ thực tế về Thin Wrapper vs Vertical AI</strong> bị bỏ lỡ ở Slide 4–6.',
      explanation: '<strong>Giải thích ngắn gọn:</strong><br>• <strong>Rủi ro Thin Wrapper:</strong> Chỉ làm giao diện mỏng sẽ chết khi model mở rộng (theo CEO Palo Alto Networks).<br>• <strong>Vertical AI = AI Expert + Domain Expert:</strong> Chuyển hóa sự nhạy bén của con người thành hiệu suất máy móc bằng cách tích hợp sâu quy trình và chính sách chuyên ngành.',
      evidence: 'Dựa trên câu 1 bạn trả lời đúng bản chất model nền, và câu 2 bạn báo bỏ lỡ ví dụ trong slide.',
      actionButton: 'Xem ví dụ Thin Wrapper vs Vertical AI',
      decisionConfirmation: 'Bạn chọn xem ví dụ và trích dẫn chuyên gia Slide 4–6.',
    };
  }

  // Fallback mặc định
  return {
    confidence: 'VỪA',
    hypothesis: 'Bạn có thể đang cần ôn <strong>Foundation Model và Application Layer</strong> trước khi tiếp tục.',
    explanation: '<strong>Giải thích ngắn gọn:</strong> Foundation model cung cấp năng lực nền, application layer biến năng lực đó thành sản phẩm có giá trị nghiệp vụ cụ thể.',
    evidence: 'Dựa trên câu trả lời trong phiên hiện tại.',
    actionButton: 'Ôn Foundation Model',
    decisionConfirmation: 'Bạn chọn ôn lại bài học.',
  };
}

document.querySelector('#getDiagnosis').addEventListener('click', () => {
  const answer1 = document.querySelector('input[name="q1"]:checked')?.value;
  const answer2 = document.querySelector('input[name="q2"]:checked')?.value;
  
  const diagnosis = calculateDiagnosis(answer1, answer2);
  currentDiagnosisDecision = diagnosis.decisionConfirmation;

  document.querySelector('#diagnosisConfidence').textContent = `Độ chắc chắn: ${diagnosis.confidence}`;
  document.querySelector('#diagnosisText').innerHTML = diagnosis.hypothesis;
  document.querySelector('#diagnosisExplanation').innerHTML = diagnosis.explanation;
  document.querySelector('#diagnosisEvidence').textContent = diagnosis.evidence;
  document.querySelector('#acceptDiagnosis').textContent = diagnosis.actionButton;
  document.querySelector('#diagnosisDecision').textContent = 'Đây chỉ là giả thuyết. Bạn có thể chấp nhận, sửa câu trả lời hoặc từ chối.';
  
  showState('b', 3);
});

document.querySelector('#acceptDiagnosis').addEventListener('click', () => {
  document.querySelector('#diagnosisDecision').textContent = `${currentDiagnosisDecision} Quyết định này chỉ ảnh hưởng phiên hiện tại.`;
});

// Option C — Tóm tắt linh hoạt theo 3 nấc slider
const summaryData = {
  1: {
    level: 1,
    levelName: 'Nấc 1 · 1 slide vừa lỡ (~1 phút)',
    badge: 'Nấc 1 · 1 slide gần nhất',
    title: 'Slide 4 · khoảng 1 phút vừa qua',
    desc: 'Tóm tắt siêu ngắn gọn về khái niệm Foundation Model và Thin Wrapper bị bỏ lỡ.',
    resultBadge: 'Dựa trên Slide 4 · Khoảng 1 phút gần nhất',
    heading: 'Điểm cốt lõi vừa bỏ lỡ (1 Slide)',
    bulletPoints: [
      '<strong>Foundation Model:</strong> Cung cấp năng lực nền tảng thô cho các tác vụ tổng quát.',
      '<strong>Thin Wrapper:</strong> Lớp bọc nông quanh model, đối mặt rủi ro lớn khi model mở rộng và hấp thụ luôn tính năng của wrapper.',
    ],
    sourceTitle: 'Mở Slide 4 gốc để kiểm tra',
    sourceContent: '<strong>Slide 4:</strong> “Foundation model cung cấp năng lực nền. Nếu lớp wrapper của bạn chỉ giúp tăng cường năng lực hoặc thêm vài lớp kiểm soát, rủi ro lớn nhất là model sẽ hấp thụ luôn khả năng đó.” (Nikesh Arora — CEO, Palo Alto Networks)',
  },
  2: {
    level: 2,
    levelName: 'Nấc 2 · 3 slide đề xuất (~3 phút)',
    badge: 'Đề xuất (Nấc 2/3)',
    title: 'Slide 4–6 · khoảng 3 phút gần nhất',
    desc: 'Gồm định nghĩa Foundation Model, nguy cơ Wrapper mỏng và mô hình Vertical AI (AI Expert + Domain Expert).',
    resultBadge: 'Dựa trên Slide 4–6 · Khoảng 3 phút gần nhất',
    heading: '3 Điểm cần nhớ về kiến trúc AI',
    bulletPoints: [
      '<strong>Foundation Model:</strong> Cung cấp năng lực nền tảng thô cho nhiều tác vụ khác nhau.',
      '<strong>Thin Wrapper:</strong> Dễ bị triệt tiêu khi capability của frontier models liên tục mở rộng.',
      '<strong>Vertical AI (AI Expert + Domain Expert):</strong> Hướng đi bền vững nhờ tích hợp sâu phán đoán của chuyên gia, quy trình ngành và policy trách nhiệm vào hệ thống.',
    ],
    sourceTitle: 'Mở Slide 4–6 gốc để kiểm tra',
    sourceContent: '<strong>Slide 4–6:</strong> Foundation model cung cấp năng lực nền. Sự khác biệt nằm ở cách doanh nghiệp vận hành và tích hợp phán đoán của chuyên gia để chuyển hóa sự nhạy bén con người thành hiệu suất máy móc.',
  },
  3: {
    level: 3,
    levelName: 'Nấc 3 · Toàn bộ bài 04 (~6 phút)',
    badge: 'Toàn cảnh (Nấc 3/3)',
    title: 'Slide 1–7 · Toàn bộ bài học 04 (~6 phút)',
    desc: 'Bản tóm tắt toàn diện từ mô hình nền tảng, cạm bẫy wrapper đến chiến lược tích hợp tri thức chuyên gia ngành.',
    resultBadge: 'Dựa trên toàn bộ Slide 1–7 · Toàn bộ Bài 04',
    heading: 'Bức tranh toàn cảnh Bài 04',
    bulletPoints: [
      '<strong>Năng lực cốt lõi:</strong> Frontier models đã đủ tốt để giải quyết các bài toán tổng quát.',
      '<strong>Cạm bẫy Wrapper mỏng:</strong> Sản phẩm chỉ wrap UI/Prompt đơn giản sẽ không có con hào phòng thủ lâu dài.',
      '<strong>Chuyển hóa hiệu suất:</strong> Vertical AI kết hợp chuyên môn AI và chuyên môn ngành để tạo lợi thế vượt trội.',
      '<strong>Định hướng học viên:</strong> Cần phân biệt rõ năng lực thô của model vs giá trị giải pháp chuyên biệt ngành có tích hợp policy & trách nhiệm.',
    ],
    sourceTitle: 'Mở toàn bộ Slide 1–7 gốc để kiểm tra',
    sourceContent: '<strong>Slide 1–7 Tổng quan:</strong> Bài 04: Application Layer và Foundation Model — Phân biệt capability vs wrapper value, thiết lập policy layer và xây dựng Vertical AI cho doanh nghiệp.',
  },
};

let currentScopeLevel = 2;

function updateScopeUI(level) {
  currentScopeLevel = Number(level);
  const data = summaryData[currentScopeLevel] || summaryData[2];
  
  const slider = document.querySelector('#summaryScopeSlider');
  if (slider) slider.value = currentScopeLevel;

  const label = document.querySelector('#sliderScopeLabel');
  if (label) label.textContent = data.levelName;

  const badge = document.querySelector('#scopeCardBadge');
  if (badge) badge.textContent = data.badge;

  const title = document.querySelector('#scopeCardTitle');
  if (title) title.textContent = data.title;

  const desc = document.querySelector('#scopeCardDesc');
  if (desc) desc.textContent = data.desc;

  document.querySelectorAll('.tick-btn').forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.level) === currentScopeLevel);
  });
}

const sliderEl = document.querySelector('#summaryScopeSlider');
if (sliderEl) {
  sliderEl.addEventListener('input', (e) => updateScopeUI(e.target.value));
}

document.querySelectorAll('.tick-btn').forEach((btn) => {
  btn.addEventListener('click', () => updateScopeUI(btn.dataset.level));
});

function renderSummaryResult(level) {
  const data = summaryData[level] || summaryData[2];
  const itemsHtml = data.bulletPoints.map((item) => `<li>${item}</li>`).join('');
  const resultHtml = `
    <div class="summary">
      <span class="source-chip">${data.resultBadge}</span>
      <h3>${data.heading}</h3>
      <ul>${itemsHtml}</ul>
      <p class="uncertainty">Đây là tóm tắt ngắn; hãy kiểm tra nội dung slide gốc nếu cần chi tiết chuyên sâu.</p>
    </div>
    <details class="source-details">
      <summary>${data.sourceTitle}</summary>
      <p>${data.sourceContent}</p>
    </details>
  `;
  document.querySelector('#summaryResultContent').innerHTML = resultHtml;
}

document.querySelector('#createSummary').addEventListener('click', () => {
  renderSummaryResult(currentScopeLevel);
  showState('c', 3);
});

function resetInputs() {
  selectedConcept = null;
  document.querySelectorAll('.concept-choice').forEach((choice) => choice.classList.remove('selected'));
  document.querySelector('#conceptHint').textContent = 'Chọn một khái niệm để tiếp tục.';
  document.querySelector('#viewConcept').disabled = true;
  document.querySelectorAll('input[type="radio"]').forEach((input) => { input.checked = false; });
  document.querySelector('#diagnosisDecision').textContent = 'Bạn quyết định phần nào sẽ giao cho AI và phần nào muốn tự kiểm tra.';
  document.querySelectorAll('.source-details').forEach((details) => { details.open = false; });
  updateScopeUI(2);
}

document.querySelector('#resetAll').addEventListener('click', () => {
  resetInputs();
  showOption('a');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Khởi tạo ban đầu
updateScopeUI(2);
showOption('a');
