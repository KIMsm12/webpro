# 3장 요약

## 📌 HTML5 문서 구조화

-   옛날 HTML은 구조를 표현하기 힘들었음 (`div`, `table` 남발)
-   검색 엔진이 좋아하는 구조화된 페이지 필요
-   **시맨틱 태그** → 의미를 가지는 태그
    -   `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`,
        `<footer>`
    -   내용 구분이 뚜렷해지고 검색엔진 최적화(SEO)에 유리

## 📌 주요 시맨틱 태그

-   `<header>` : 머리말, 제목/소개
-   `<nav>` : 메뉴, 링크 모음
-   `<section>` : 장/절 단위 구역
-   `<article>` : 독립적인 글, 글 하나하나
-   `<aside>` : 본문 옆의 보조내용(광고, 팁 등)
-   `<footer>` : 꼬리말(저자, 저작권)

👉 시맨틱 태그는 모양을 정해주지 않음 → CSS로 꾸며야 함

## 📌 시맨틱 인라인 태그

-   `<mark>` : 중요한 부분 형광펜
-   `<time>` : 시간 표시
-   `<meter>` : 값의 비율(예: 80%)
-   `<progress>` : 진행률 표시
-   `<figure>` / `<figcaption>` : 그림 + 설명
-   `<details>` / `<summary>` : 접었다 펼 수 있는 상세내용

## 📌 HTML5에서 없어진 태그

-   `<font>`, `<center>`, `<big>`, `<u>` 등은 이제 사용 ❌

## 📌 폼(Form)

-   사용자 입력을 받는 영역 (로그인, 검색, 회원가입 등)
-   `<form>` 태그로 묶음
    -   `action` : 데이터를 보낼 서버 주소
    -   `method` : 전송 방식 (GET/POST)
-   주요 입력 요소
    -   `<input type="text">` : 한 줄 입력
    -   `<input type="password">` : 비밀번호 입력
    -   `<textarea>` : 여러 줄 입력
    -   `<select>` + `<option>` : 드롭다운 선택
    -   `<input type="checkbox">` : 체크박스
    -   `<input type="radio">` : 라디오 버튼
    -   `<input type="button|submit|reset|image">` : 버튼 종류
    -   `<label>` : 입력창 설명(클릭 시 연결된 input 활성화)
    -   `<fieldset>` + `<legend>` : 입력 그룹 묶기

## 📌 특수 입력 요소

-   `<input type="color">` : 색 선택
-   `<input type="date|time|month|week|datetime-local">` : 날짜/시간
    입력
-   `<input type="number">` : 숫자 입력 (스핀 버튼)
-   `<input type="range">` : 슬라이드 바
-   `placeholder` 속성 : 입력 힌트 표시
-   `<input type="email|url|tel|search">` : 특정 형식 입력

------------------------------------------------------------------------

👉 정리하자면\
HTML5는 문서 구조를 **시맨틱하게(의미 있게)** 나누고, 다양한 **폼 입력
기능**을 지원한다.\
실제 디자인은 CSS로 꾸미면 됨!
