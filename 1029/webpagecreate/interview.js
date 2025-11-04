// 면접 질문 데이터 (50개 이상)
const interviewQuestions = [
    // 인성 면접 질문
    "자기소개를 2분 이내로 해주세요.",
    "우리 회사에 지원한 동기가 무엇인가요?",
    "5년 후 자신의 모습은 어떨 것 같나요?",
    "본인의 장점과 단점을 말씀해주세요.",
    "팀 프로젝트에서 갈등이 생겼을 때 어떻게 해결하셨나요?",
    "실패했던 경험과 그로부터 배운 점을 말씀해주세요.",
    "업무 중 스트레스는 어떻게 관리하시나요?",
    "리더십을 발휘했던 경험을 구체적으로 말씀해주세요.",
    "본인이 생각하는 이상적인 직장 상사는 어떤 사람인가요?",
    "우리 회사에 대해 알고 있는 것을 말씀해주세요.",
    "마지막으로 하고 싶은 말이 있나요?",
    "동료들이 당신을 어떻게 평가한다고 생각하나요?",
    "가장 자랑스러웠던 순간은 언제인가요?",
    "업무와 개인 생활의 균형을 어떻게 맞추시나요?",
    "압박 상황에서도 잘 대처할 수 있나요? 예를 들어주세요.",
    
    // 기술 면접 질문 (일반)
    "최근에 관심 있게 공부한 기술이나 트렌드가 있나요?",
    "프로젝트 진행 중 가장 어려웠던 기술적 문제는 무엇이었나요?",
    "새로운 기술을 배울 때 어떤 방식으로 학습하시나요?",
    "코드 품질을 유지하기 위해 어떤 노력을 하시나요?",
    "버전 관리 시스템(Git)을 어떻게 활용하시나요?",
    "레거시 코드를 다뤄본 경험이 있나요? 어떻게 접근하셨나요?",
    "애자일 방법론에 대해 설명해주세요.",
    "테스트 코드 작성 경험이 있나요?",
    "API 설계 시 중요하게 고려하는 점은 무엇인가요?",
    "데이터베이스 최적화 경험을 공유해주세요.",
    
    // 개발 관련 구체적 질문
    "객체지향 프로그래밍의 4대 특징을 설명해주세요.",
    "REST API와 GraphQL의 차이점은 무엇인가요?",
    "프론트엔드 성능 최적화 방법에는 어떤 것들이 있나요?",
    "SOLID 원칙에 대해 아는 대로 설명해주세요.",
    "동기와 비동기의 차이를 설명해주세요.",
    "SQL과 NoSQL의 차이점과 각각의 사용 사례를 말씀해주세요.",
    "CI/CD에 대해 설명하고, 경험이 있다면 공유해주세요.",
    "보안을 고려한 개발 경험이 있나요?",
    "마이크로서비스 아키텍처에 대해 설명해주세요.",
    "클라우드 서비스(AWS, Azure 등) 사용 경험이 있나요?",
    
    // 상황 면접 질문
    "마감 기한이 촉박한 프로젝트를 맡게 된다면 어떻게 하시겠습니까?",
    "동료가 비협조적이라면 어떻게 대처하시겠습니까?",
    "상사의 의견에 동의하지 않을 때 어떻게 하시겠습니까?",
    "예상치 못한 버그가 발생했을 때의 대처 방법은?",
    "여러 업무를 동시에 처리해야 할 때 우선순위를 어떻게 정하시나요?",
    "고객의 무리한 요구사항이 들어왔을 때 어떻게 대응하시겠습니까?",
    "프로젝트 중간에 요구사항이 크게 변경된다면?",
    "팀원이 실수로 중요한 데이터를 삭제했다면 어떻게 하시겠습니까?",
    "야근이나 주말 근무가 필요한 상황이 생긴다면?",
    "기술적으로 불가능한 요구사항을 받았을 때 어떻게 설득하시겠습니까?",
    
    // 추가 인성 질문
    "회사 생활에서 가장 중요하게 생각하는 가치는 무엇인가요?",
    "다른 지원자들과 차별화되는 본인만의 강점은 무엇인가요?",
    "본인을 채용해야 하는 이유를 한 문장으로 말씀해주세요.",
    "회사의 비전과 본인의 가치관이 어떻게 부합한다고 생각하나요?",
    "직장을 선택할 때 가장 중요하게 생각하는 요소는 무엇인가요?",
    
    // 추가 기술 질문
    "함수형 프로그래밍과 객체지향 프로그래밍의 차이점은?",
    "메모리 누수를 방지하기 위한 방법은 무엇인가요?",
    "브라우저 렌더링 과정을 설명해주세요.",
    "HTTP와 HTTPS의 차이점은 무엇인가요?",
    "쿠키, 세션, 토큰 기반 인증의 차이를 설명해주세요.",
    "웹 접근성에 대해 어떻게 생각하시나요?",
    "반응형 웹과 적응형 웹의 차이는 무엇인가요?",
    "Docker를 사용해본 경험이 있나요? 어떤 장점이 있나요?",
    "자료구조 중 스택과 큐의 차이를 설명해주세요.",
    "정렬 알고리즘에는 어떤 것들이 있고, 각각의 시간복잡도는?",
    
    // 추가 상황 질문
    "신입사원으로서 선배들과 좋은 관계를 유지하기 위해 어떤 노력을 하시겠습니까?",
    "업무 중 윤리적 딜레마에 직면한다면 어떻게 하시겠습니까?",
    "회사의 중요한 정보가 유출될 위기에 처했다면?",
    "프로젝트가 실패로 끝날 것 같은 상황이라면 어떻게 하시겠습니까?",
    "동료가 부정행위를 하는 것을 목격했다면 어떻게 하시겠습니까?"
];

// 전역 변수
let currentQuestionIndex = -1;
let questionCount = 0;
let currentQuestion = "";
let hasAnswered = false;

// DOM 요소 가져오기
const questionText = document.getElementById('questionText');
const questionCounter = document.getElementById('questionCounter');
const nextBtn = document.getElementById('nextBtn');
const copyBtn = document.getElementById('copyBtn');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const answerSection = document.getElementById('answerSection');

// 랜덤 질문 가져오기
function getRandomQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * interviewQuestions.length);
    } while (randomIndex === currentQuestionIndex && interviewQuestions.length > 1);
    
    currentQuestionIndex = randomIndex;
    return interviewQuestions[randomIndex];
}

// 질문 표시하기
function displayQuestion() {
    currentQuestion = getRandomQuestion();
    questionCount++;
    
    // 카드 애니메이션
    questionText.style.animation = 'none';
    setTimeout(() => {
        questionText.style.animation = 'fadeInScale 0.5s ease-out';
        questionText.textContent = currentQuestion;
    }, 10);
    
    // 카운터 업데이트
    questionCounter.textContent = `질문 ${questionCount}`;
    
    // 답변 영역 초기화
    answerInput.value = '';
    feedback.innerHTML = '';
    hasAnswered = false;
    submitBtn.disabled = false;
    
    // 답변 섹션 표시
    answerSection.style.display = 'block';
}

// 질문 복사하기
function copyQuestion() {
    if (!currentQuestion) {
        alert('먼저 질문을 생성해주세요!');
        return;
    }
    
    navigator.clipboard.writeText(currentQuestion).then(() => {
        // 임시 알림 표시
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ 복사 완료!';
        copyBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        copyBtn.style.color = 'white';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
        }, 2000);
    }).catch(err => {
        alert('복사에 실패했습니다.');
        console.error('복사 오류:', err);
    });
}

// 답변 제출 및 평가
function submitAnswer() {
    const answer = answerInput.value.trim();
    
    if (!answer) {
        alert('답변을 작성해주세요!');
        return;
    }
    
    if (hasAnswered) {
        return;
    }
    
    hasAnswered = true;
    submitBtn.disabled = true;
    
    // 답변 길이에 따른 평가 생성
    const answerLength = answer.length;
    let evaluation;
    
    if (answerLength >= 200) {
        // 200자 이상 - 훌륭해요!
        const excellentFeedback = [
            { text: '🔥 훌륭해요!', type: 'good' },
            { text: '✨ 완벽해요!', type: 'good' },
            { text: '🎉 최고예요!', type: 'good' },
            { text: '👏 멋진 답변이에요!', type: 'good' }
        ];
        evaluation = excellentFeedback[Math.floor(Math.random() * excellentFeedback.length)];
    } else if (answerLength >= 100) {
        // 100-199자 - 잘했어요!
        const goodFeedback = [
            { text: '👍 잘했어요!', type: 'good' },
            { text: '😊 좋아요!', type: 'good' },
            { text: '💪 괜찮아요!', type: 'good' },
            { text: '✅ 잘 작성했어요!', type: 'good' }
        ];
        evaluation = goodFeedback[Math.floor(Math.random() * goodFeedback.length)];
    } else {
        // 100자 미만 - 노력해요
        const tryFeedback = [
            { text: '💡 더 노력해요!', type: 'try' },
            { text: '📝 좀 더 자세히 써봐요!', type: 'try' },
            { text: '🤔 더 구체적으로 작성해봐요!', type: 'try' },
            { text: '✏️ 조금만 더 추가해봐요!', type: 'try' }
        ];
        evaluation = tryFeedback[Math.floor(Math.random() * tryFeedback.length)];
    }
    
    // 평가 메시지 표시
    feedback.innerHTML = `
        <div class="feedback-message feedback-${evaluation.type}">
            ${evaluation.text}
        </div>
    `;
    
    // 3초 후 자동으로 다음 질문으로 이동
    setTimeout(() => {
        displayQuestion();
    }, 2500);
}

// 이벤트 리스너 등록
nextBtn.addEventListener('click', displayQuestion);
copyBtn.addEventListener('click', copyQuestion);
submitBtn.addEventListener('click', submitAnswer);

// 엔터키로 답변 제출 (Ctrl+Enter 또는 Cmd+Enter)
answerInput.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        submitAnswer();
    }
});

// 초기 상태 설정
answerSection.style.display = 'none';

// 페이지 로드 시 첫 질문 자동 표시
window.addEventListener('load', () => {
    displayQuestion();
});
