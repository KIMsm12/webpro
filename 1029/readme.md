# 📘 명품 웹 프로그래밍 8·9장 핵심 정리

## ✅ 8장 — DOM(Document Object Model)

---

### 🎯 학습 포인트
- DOM의 기본 개념 및 필요성 파악
- DOM 트리 구조와 HTML 요소 간 관계 이해
- DOM 객체 구성 요소 및 속성/메서드 활용
- `document` 객체 중심 HTML·CSS 동적 제어 방법 숙지
- `createElement()`, `appendChild()` 등을 활용한 동적 요소 생성

---

## 🌐 DOM이란?
브라우저가 HTML 문서를 분석하여 **각 태그를 객체 형태로 표현한 계층적 구조**입니다.  
→ 이를 통해 스크립트로 HTML 요소의 **내용, 속성, 스타일** 등을 조작할 수 있습니다.

---

## 🌳 DOM 트리
- HTML 문서는 트리 구조로 표현됨
- 문서 전체의 루트는 `document`
- 각 HTML 태그는 하나의 노드(Node)에 대응

```html
<html>
  <head><title>DOM 예시</title></head>
  <body>
    <p>문장 <span>여기</span></p>
    <form>
      <input type="text">
      <input type="button" value="확인">
    </form>
  </body>
</html>
```

→ DOM 관계:  
`document → html → head/body → p/form → span/input…`

---

## 🔧 DOM 객체의 구성
| 구성 | 설명 |
|------|------|
| property | HTML 속성 반영 |
| method | DOM 조작 기능 |
| collection | 자식 요소 모음 |
| event listener | 특정 이벤트에 반응하는 함수 |
| style | CSS 제어 |

```js
const p = document.getElementById("firstP");
p.style.color = "blue";
p.innerHTML = "새 내용";
```

---

## 🔎 노드 탐색
| 기능 | 예시 |
|------|------|
| 부모 | `parentElement` |
| 첫 자식 | `firstElementChild` |
| 마지막 자식 | `lastElementChild` |
| 인접 | `nextElementSibling`, `previousElementSibling` |
| 자식 수 | `childElementCount` |

---

## 🎨 스타일 동적 변경
```js
const span = document.getElementById("mySpan");
span.style.color = "green";
span.style.fontSize = "24px";
span.style.border = "2px dashed purple";
```

---

## 🧾 innerHTML
태그 내부의 HTML을 읽거나 변경

```js
const p = document.getElementById("firstP");
p.innerHTML = "이미지 <img src='puppy.png'> 표시";
```

---

## 🔹 this 키워드
이벤트 발생 시 **해당 요소 자신**을 가리킴

```html
<button onclick="this.style.color='red'">클릭</button>
```

---

## 📄 document 객체
문서 전체를 대표하는 루트 객체

| 속성 | 의미 |
|------|------|
| location | 문서 URL |
| title | 문서 제목 |
| head/body | 주요 영역 |
| domain | 도메인 |
| lastModified | 최종 수정 |
| readyState | 로딩 상태 |
| activeElement | 현재 포커스 요소 |

---

## ✅ 요소 검색
| 메서드 | 설명 |
|--------|------|
| getElementById | id로 찾기 |
| getElementsByTagName | 태그명으로 찾기 |
| getElementsByClassName | class로 찾기 |

```js
const list = document.getElementsByClassName("food");
for (let tag of list) {
  tag.style.color = "teal";
}
```

---

## 🧱 동적 요소 생성/삭제
| 동작 | 메서드 |
|------|--------|
| 생성 | createElement |
| 삽입 | appendChild |
| 제거 | removeChild |

```js
let box = document.createElement("div");
box.innerHTML = "추가된 영역";
box.style.background = "yellow";
document.body.appendChild(box);
```

---

## 📌 8장 핵심
- HTML 요소는 모두 DOM 객체
- `document`가 최상위
- 내용·스타일은 `innerHTML`, `style`로 변경
- 동적 생성 시 `createElement`, `appendChild` 사용

---

# ✅ 9장 — 이벤트 & 리스너

---

## 🔎 이벤트란?
- 사용자 입력·브라우저 상태 변화를 알려주는 **신호**
- 해당 이벤트 발생 시 지정한 함수(리스너)가 실행

이벤트 이름 앞에 `on` 붙임  
예: `onclick`, `onload`, `onkeydown`

---

## ⭐ 주요 이벤트
| 이벤트 | 설명 |
|--------|------|
| click / dblclick | 클릭 / 더블 클릭 |
| keydown/keyup | 키 누름 / 뗌 |
| load | 문서/이미지 로드 |
| resize | 창 크기 변경 |
| submit | 전송 |
| change | 값 변경 |

---

## ✅ 리스너 작성 방식
### 1) HTML 태그 내부
```html
<p onmouseover="this.style.background='pink'">
  마우스 올리면 색 변경
</p>
```

### 2) DOM 프로퍼티 등록
```js
p.onmouseover = () => p.style.background = "pink";
```

### 3) addEventListener
```js
p.addEventListener("mouseover", () => {
  p.style.background = "pink";
});
```

→ 여러 이벤트 등록 가능, 버블링/캡처 지정 가능

---

## ⚙️ 이벤트 객체
이벤트 정보가 담긴 객체

```js
function info(e) {
  alert(e.type);
}
```

| 속성 | 설명 |
|------|------|
| type | 이벤트 종류 |
| target | 실제 이벤트 발생 요소 |
| currentTarget | 현재 처리 중 요소 |
| defaultPrevented | 기본 동작 취소 여부 |

---

## 🚫 기본 동작 막기
```html
<a href="https://naver.com" onclick="event.preventDefault()">막힘</a>
```

---

## 🔁 이벤트 흐름
이벤트 전파 단계:  
`캡처 → 타깃 → 버블`

```js
tag.addEventListener("click", handler, true); // 캡처
tag.addEventListener("click", handler, false); // 버블
```

전파 차단 → `event.stopPropagation()`

---

## 🖱️ 마우스 이벤트
| 이벤트 | 설명 |
|--------|------|
| onclick | 클릭 |
| ondblclick | 더블 클릭 |
| onover/out | 진입·탈출 |
| onwheel | 휠 |
| oncontextmenu | 우클릭 |

우클릭 금지 예:
```js
document.oncontextmenu = () => false;
```

---

## 📥 onload
문서/이미지 로드 후 실행

```html
<body onload="alert('완료!')">
```

이미지 로드 확인
```js
img.onload = () => alert("로드 완료");
```

---

## 🔡 포커스/폼 이벤트
| 이벤트 | 의미 |
|--------|------|
| focus | 포커스 획득 |
| blur | 포커스 해제 |
| submit | 전송 |
| reset | 초기화 |
| change | 변경 |

---

## ⌨️ 키보드 이벤트
```js
document.onkeydown = (e) => console.log(e.key);
```

---

## 📌 9장 핵심
- 이벤트는 상호작용의 중심
- 리스너 등록 방식 3개
- 이벤트 객체로 상세 정보 확인
- 기본 동작 취소·전파 제어 가능
- 다양한 입력 이벤트 처리 가능

---

# ✅ 전체 요약
- DOM은 HTML 문서를 객체 트리로 표현
- `document`를 통해 모든 요소 제어
- `innerHTML`, `style` 등으로 내용/스타일 변경
- `createElement`, `appendChild`로 동적 구성
- 이벤트는 사용자·환경 변화에 반응
- addEventListener를 이용해 유연하게 제어

---
