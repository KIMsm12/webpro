# 📌 웹프로그래밍 요약

## 1. 웹 프로그래밍 개요
- **웹(Web)**: 인터넷을 통해 정보를 공유하는 공간  
- **웹 프로그래밍**: 웹 브라우저에서 동작하는 응용 프로그램을 제작하는 과정  
- 구성 요소  
  - **클라이언트(Client)**: 브라우저 (Chrome, Firefox, Edge 등)  
  - **서버(Server)**: 요청을 처리하고 응답을 반환  
  - **네트워크(Network)**: 클라이언트와 서버를 연결  

---

## 2. 웹의 기본 구조
- **HTML (HyperText Markup Language)**  
  - 웹 문서의 구조 정의  
  - 예: 제목, 문단, 링크, 이미지 등  
  ```html
  <h1>안녕하세요</h1>
  <p>이것은 단락입니다.</p>
  <a href="https://example.com">링크</a>
  ```

- **CSS (Cascading Style Sheets)**  
  - 웹 문서의 디자인 및 레이아웃 정의  
  - 예: 색상, 글꼴, 배치  
  ```css
  h1 {
    color: blue;
    text-align: center;
  }
  ```

- **JavaScript (JS)**  
  - 동적 동작을 정의 (버튼 클릭, 애니메이션, 이벤트 처리 등)  
  ```javascript
  document.querySelector("button").onclick = function() {
    alert("버튼이 클릭됨!");
  };
  ```

---

## 3. 클라이언트 vs 서버
- **클라이언트(Client-side)**  
  - HTML, CSS, JavaScript 실행  
  - 사용자 화면에서 동작  
- **서버(Server-side)**  
  - 데이터 저장/처리 (예: PHP, Node.js, Python Django, Spring 등)  
  - DB와 연동 (MySQL, MongoDB 등)  

---

## 4. HTTP 프로토콜
- **HTTP (HyperText Transfer Protocol)**: 클라이언트-서버 통신 규약  
- 주요 메서드  
  - `GET`: 데이터 요청  
  - `POST`: 데이터 전송  
  - `PUT`: 데이터 수정  
  - `DELETE`: 데이터 삭제  

- HTTP 응답 코드  
  - `200`: 성공  
  - `404`: 페이지 없음  
  - `500`: 서버 오류  

---

## 5. 웹 개발 단계
1. **프론트엔드 개발**  
   - HTML, CSS, JS  
   - 프레임워크: React, Vue, Angular  

2. **백엔드 개발**  
   - 언어: PHP, Node.js, Java(Spring), Python(Django)  
   - 데이터베이스 연동  

3. **풀스택 개발**  
   - 프론트엔드 + 백엔드 모두 수행  

---

## 6. 추가 개념
- **DOM (Document Object Model)**  
  - HTML 문서를 객체 트리 구조로 표현  
  - JS로 요소 조작 가능  

- **AJAX (Asynchronous JavaScript and XML)**  
  - 페이지 새로고침 없이 서버와 비동기 통신  

- **API (Application Programming Interface)**  
  - 외부 서비스와 데이터 연동  

- **반응형 웹(Responsive Web)**  
  - 기기 화면 크기에 따라 자동으로 레이아웃 조정 (CSS 미디어쿼리 활용)  

---

## 7. 웹 보안 기본
- **XSS (Cross Site Scripting)**: 악성 스크립트 삽입 공격  
- **SQL Injection**: DB 쿼리에 악의적 코드 삽입  
- **HTTPS**: 보안 통신(SSL/TLS)  

---

✅ 요약하면:  
- **HTML**은 구조, **CSS**는 디자인, **JS**는 동작  
- 클라이언트와 서버가 **HTTP**를 통해 통신  
- **프론트엔드 + 백엔드 = 풀스택**  
- 보안과 네트워크 이해도 중요  
