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
    title: 'Foundation Model',
    body: 'Mô hình nền cung cấp năng lực chung để xử lý nhiều tác vụ, ví dụ hiểu ngôn ngữ hoặc tạo nội dung.',
    source: 'Nguồn: Slide 2–3 · Khái niệm nền',
  },
  application: {
    title: 'Application Layer',
    body: 'Lớp ứng dụng tổ chức năng lực của model thành một sản phẩm, workflow và trải nghiệm cho use case cụ thể.',
    source: 'Nguồn: Slide 5 · Application Layer',
  },
};
let selectedConcept = null;

document.querySelectorAll('.concept-choice').forEach((button) => button.addEventListener('click', () => {
  selectedConcept = button.dataset.concept;
  document.querySelectorAll('.concept-choice').forEach((choice) => choice.classList.toggle('selected', choice === button));
  document.querySelector('#conceptHint').textContent = `Đã chọn: ${conceptCopy[selectedConcept].title}`;
  document.querySelector('#viewConcept').disabled = false;
}));

document.querySelector('#viewConcept').addEventListener('click', () => {
  if (!selectedConcept) return;
  const concept = conceptCopy[selectedConcept];
  document.querySelector('#mapResultContent').innerHTML = `<h3>${concept.title}</h3><p>${concept.body}</p><p class="source">${concept.source}</p>`;
  showState('a', 3);
});

// Option B — hai câu hỏi cùng nằm trong một critical-interaction state.
document.querySelector('#getDiagnosis').addEventListener('click', () => {
  const answer1 = document.querySelector('input[name="q1"]:checked')?.value;
  const answer2 = document.querySelector('input[name="q2"]:checked')?.value;
  const answered = [answer1, answer2].filter(Boolean).length;
  const confidence = answered === 2 ? 'VỪA' : 'THẤP';
  const evidenceParts = [];
  if (answer1) evidenceParts.push(`câu 1: ${document.querySelector('input[name="q1"]:checked').parentElement.textContent.trim()}`);
  if (answer2) evidenceParts.push(`câu 2: ${document.querySelector('input[name="q2"]:checked').parentElement.textContent.trim()}`);

  document.querySelector('#diagnosisConfidence').textContent = `Độ chắc chắn: ${confidence}`;
  document.querySelector('#diagnosisEvidence').textContent = answered
    ? `Dựa trên ${evidenceParts.join('; ')}.`
    : 'Bạn chưa trả lời câu hỏi nào; AI không có đủ evidence và chỉ đưa ra gợi ý mặc định.';
  document.querySelector('#diagnosisDecision').textContent = 'Đây chỉ là giả thuyết. Bạn có thể chấp nhận, sửa câu trả lời hoặc từ chối.';
  showState('b', 3);
});

document.querySelector('#acceptDiagnosis').addEventListener('click', () => {
  document.querySelector('#diagnosisDecision').textContent = 'Bạn chọn ôn Foundation Model. Quyết định này chỉ ảnh hưởng phiên hiện tại.';
});

// Option C — AI chỉ tạo tóm tắt sau khi user xác nhận phạm vi.
document.querySelector('#createSummary').addEventListener('click', () => showState('c', 3));

function resetInputs() {
  selectedConcept = null;
  document.querySelectorAll('.concept-choice').forEach((choice) => choice.classList.remove('selected'));
  document.querySelector('#conceptHint').textContent = 'Chọn một khái niệm để tiếp tục.';
  document.querySelector('#viewConcept').disabled = true;
  document.querySelectorAll('input[type="radio"]').forEach((input) => { input.checked = false; });
  document.querySelector('#diagnosisDecision').textContent = 'Bạn quyết định phần nào sẽ giao cho AI và phần nào muốn tự kiểm tra.';
  document.querySelectorAll('.source-details').forEach((details) => { details.open = false; });
}

document.querySelector('#resetAll').addEventListener('click', () => {
  resetInputs();
  showOption('a');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

showOption('a');
