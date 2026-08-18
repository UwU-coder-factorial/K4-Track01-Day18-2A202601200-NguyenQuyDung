const tabs = document.querySelectorAll('.tab');
const panels = { a: document.querySelector('#option-a'), b: document.querySelector('#option-b'), c: document.querySelector('#option-c') };

function showOption(option) {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.option === option));
  Object.entries(panels).forEach(([key, panel]) => { panel.hidden = key !== option; });
}

tabs.forEach((tab) => tab.addEventListener('click', () => showOption(tab.dataset.option)));

const conceptCopy = {
  foundation: {
    title: 'Foundation Model',
    body: 'Mô hình nền cung cấp năng lực chung để xử lý nhiều tác vụ, ví dụ hiểu ngôn ngữ hoặc tạo nội dung.',
    source: 'Slide 2–3 · khái niệm nền',
  },
  application: {
    title: 'Application Layer',
    body: 'Lớp ứng dụng tổ chức năng lực của model thành một sản phẩm, workflow và trải nghiệm cho use case cụ thể.',
    source: 'Slide 5 · application layer',
  },
};

document.querySelector('#openMap').addEventListener('click', (event) => {
  document.querySelector('#knowledgeMap').hidden = false;
  event.currentTarget.hidden = true;
});
document.querySelectorAll('.map-node').forEach((node) => node.addEventListener('click', () => {
  const concept = conceptCopy[node.dataset.concept];
  document.querySelector('#mapResult').hidden = false;
  document.querySelector('#mapResultContent').innerHTML = `<div class="concept-detail"><h3>${concept.title}</h3><p>${concept.body}</p><p class="source">${concept.source}</p></div>`;
}));
document.querySelector('#closeMap').addEventListener('click', () => { document.querySelector('#mapResult').hidden = true; });
document.querySelector('#backToLessonA').addEventListener('click', () => { document.querySelector('#knowledgeMap').hidden = true; document.querySelector('#openMap').hidden = false; document.querySelector('#mapResult').hidden = true; });

const questions = [
  { text: 'Khi nghe “năng lực nền”, bạn nghĩ nó gần với điều nào hơn?', choices: ['Một model có thể phục vụ nhiều tác vụ', 'Một tính năng riêng trong app', 'Mình chưa chắc'] },
  { text: 'Điều gì đang làm bạn dừng lại ở đoạn này?', choices: ['Chưa phân biệt được model và sản phẩm', 'Bỏ lỡ ví dụ trong slide', 'Mình chưa biết'] },
];
let questionIndex = 0;
function renderQuestion() {
  const question = questions[questionIndex];
  document.querySelector('#questionProgress').textContent = `Câu ${questionIndex + 1}/${questions.length}`;
  document.querySelector('#questionSlot').innerHTML = `<div class="question"><p>${question.text}</p>${question.choices.map((choice) => `<button class="choice" type="button">${choice}</button>`).join('')}</div>`;
  document.querySelectorAll('.choice').forEach((choice) => choice.addEventListener('click', () => {
    if (questionIndex < questions.length - 1) { questionIndex += 1; renderQuestion(); } else { document.querySelector('#diagnosisFlow').hidden = true; document.querySelector('#diagnosisResult').hidden = false; }
  }));
}
document.querySelector('#startDiagnosis').addEventListener('click', (event) => { event.currentTarget.hidden = true; document.querySelector('#diagnosisFlow').hidden = false; document.querySelector('#diagnosisResult').hidden = true; document.querySelector('#diagnosisRecovery').hidden = true; questionIndex = 0; renderQuestion(); });
document.querySelector('#skipQuestion').addEventListener('click', () => { document.querySelector('#diagnosisFlow').hidden = true; document.querySelector('#diagnosisResult').hidden = false; });
document.querySelector('#acceptDiagnosis').addEventListener('click', () => { document.querySelector('#diagnosisRecovery').hidden = false; document.querySelector('#diagnosisRecovery').textContent = 'Bạn đã chọn ôn Foundation Model. Hãy xem nội dung gợi ý rồi quay lại bài học khi sẵn sàng.'; });
document.querySelector('#rejectDiagnosis').addEventListener('click', () => { document.querySelector('#diagnosisRecovery').hidden = false; document.querySelector('#diagnosisRecovery').textContent = 'Bạn đã từ chối giả thuyết. Có thể bấm “Bắt đầu chẩn đoán” để làm lại hoặc tự chọn chủ đề khác trong Option A.'; document.querySelector('#startDiagnosis').hidden = false; });

document.querySelector('#catchUp').addEventListener('click', (event) => { event.currentTarget.hidden = true; document.querySelector('#catchupResult').hidden = false; });
document.querySelector('#openSource').addEventListener('click', () => { document.querySelector('#sourcePreview').hidden = false; });
document.querySelector('#closeSource').addEventListener('click', () => { document.querySelector('#sourcePreview').hidden = true; });
document.querySelector('#dismissSummary').addEventListener('click', () => { document.querySelector('#catchupResult').hidden = true; document.querySelector('#catchUp').hidden = false; });

document.querySelector('#resetAll').addEventListener('click', () => {
  document.querySelector('#openMap').hidden = false; document.querySelector('#knowledgeMap').hidden = true; document.querySelector('#mapResult').hidden = true;
  document.querySelector('#startDiagnosis').hidden = false; document.querySelector('#diagnosisFlow').hidden = true; document.querySelector('#diagnosisResult').hidden = true; document.querySelector('#diagnosisRecovery').hidden = true;
  document.querySelector('#catchUp').hidden = false; document.querySelector('#catchupResult').hidden = true; document.querySelector('#sourcePreview').hidden = true;
  questionIndex = 0; showOption('a'); window.scrollTo({ top: 0, behavior: 'smooth' });
});
