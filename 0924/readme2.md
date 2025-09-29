

## 1. 학습 목표

-   CSS3로 **HTML 태그의 위치**를 조절할 수 있다.
-   리스트, 표, 폼을 **예쁘게 꾸밀 수 있다.**
-   CSS3로 **애니메이션, 전환(transition), 변환(transform)** 효과를 만들
    수 있다.

------------------------------------------------------------------------

## 2. 배치 관련 속성

-   주요 프로퍼티: `display`, `position`, `left/right/top/bottom`,
    `float`, `z-index`, `visibility`, `overflow`

### 블록 박스 vs 인라인 박스

-   블록 태그 → 블록 박스 (한 줄 전체 차지)
-   인라인 태그 → 인라인 박스 (라인 안에 배치)

### display 속성

-   `block` : 요소를 블록 박스로 출력
-   `inline` : 요소를 인라인 박스로 출력
-   `inline-block` : 인라인처럼 배치되지만, 크기 조정 가능
-   `none` : 화면에 표시되지 않음

### position 속성

-   `static` : 기본 배치
-   `relative` : 기본 위치에서 상대적으로 이동
-   `absolute` : 기준 요소에 대해 절대 배치
-   `fixed` : 브라우저 창에 고정
-   `float` : 좌/우로 띄워 배치
-   `z-index` : 요소의 쌓이는 순서 지정
-   `visibility` : 보임(`visible`), 숨김(`hidden`)
-   `overflow` : 넘칠 때 처리 (`hidden`, `visible`, `scroll`)

------------------------------------------------------------------------

## 3. 리스트 꾸미기

-   `list-style-type` : 마커 종류(circle, square, decimal, roman, alpha
    등)
-   `list-style-image` : 이미지 마커 사용
-   `list-style-position` : inside/outside 지정
-   `ul`, `li`에 배경색, 간격, 마진, 패딩 조정 가능

예) 메뉴바 만들기 → `inline-block` + `hover` 활용

------------------------------------------------------------------------

## 4. 표 꾸미기

-   `border` : 테두리 모양 지정
-   `border-collapse: collapse;` : 테두리 합치기
-   `width`, `height` : 셀 크기 지정
-   `padding` : 셀 여백 지정
-   `text-align` : 텍스트 정렬
-   `thead`, `tfoot`, `tbody` 구분 가능
-   `nth-child()` : 짝수/홀수 행 스타일링 가능
-   `hover` : 마우스 올릴 때 배경색 변경 가능

------------------------------------------------------------------------

## 5. 폼 꾸미기

-   `input[type=text]` : 입력창 스타일링
-   `border`, `border-radius` : 테두리 스타일
-   `:hover` : 마우스 올라올 때
-   `:focus` : 포커스 받을 때
-   `label`과 `span`으로 입력 항목 정렬 가능

------------------------------------------------------------------------

## 6. CSS3 동적 효과

### 애니메이션 (animation)

-   `@keyframes`로 시간별 스타일 정의
-   주요 속성: `animation-name`, `animation-duration`,
    `animation-iteration-count`

### 전환 (transition)

-   속성 변화가 서서히 진행되도록 설정
-   예: `transition: font-size 5s;`

### 변환 (transform)

-   2D 변환 함수 지원:
    -   `rotate(deg)` : 회전
    -   `skew(x,y)` : 기울임
    -   `translate(x,y)` : 이동
    -   `scale(x,y)` : 확대/축소

------------------------------------------------------------------------

