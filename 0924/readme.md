

## 1. CSS3란?

-   **CSS (Cascading Style Sheet)** : HTML 문서의 **색, 모양, 배치**
    등을 꾸미는 언어\
-   발전 단계: CSS1 → CSS2 → **CSS3** (현재는 CSS4 표준화 진행 중)\
-   주요 기능:
    -   색상, 배경
    -   텍스트/폰트
    -   박스 모델
    -   시각 효과(그림자 등)
    -   리스트/테이블
    -   사용자 인터페이스

------------------------------------------------------------------------

## 2. CSS3 스타일 적용 방법

1.  **내부 스타일 시트**
    -   `<style>...</style>` 태그 안에 작성\
    -   문서 전체에 적용
2.  **인라인 스타일**
    -   각 태그에 `style="..."` 속성으로 직접 작성\
    -   해당 태그에만 적용
3.  **외부 스타일 시트**
    -   `.css` 파일로 따로 저장 후\
    -   `<link>` 또는 `@import`로 불러오기

------------------------------------------------------------------------

## 3. CSS3 규칙

-   **구성 요소**
    -   셀렉터(selector): 적용할 HTML 요소 선택
    -   프로퍼티(property): 속성 이름
    -   값(value): 속성 값
    -   주석: `/* ... */`
-   **상속**
    -   자식 태그는 부모 태그의 스타일 일부를 상속받음
-   **합치기와 오버라이딩**
    -   여러 스타일이 중첩되면 우선순위에 따라 적용
    -   우선순위: 브라우저 기본 \< 외부 CSS \< 내부 `<style>` \< 인라인
        `style`

------------------------------------------------------------------------

## 4. 주요 셀렉터

-   **태그 선택자** :

    ``` css
    p { color: red; }
    ```

-   **클래스 선택자** :

    ``` css
    .className { ... }
    ```

-   **아이디 선택자** :

    ``` css
    #idName { ... }
    ```

-   **자식 선택자** :

    ``` css
    div > strong { ... }
    ```

-   **자손 선택자** :

    ``` css
    ul strong { ... }
    ```

-   **전체 선택자** :

    ``` css
    * { ... }
    ```

-   **속성 선택자** :

    ``` css
    input[type=text] { ... }
    ```

-   **가상 클래스** :

    ``` css
    a:visited { color: green; }
    li:hover { background: yellowgreen; }
    h3:first-letter { color: red; }
    ```

------------------------------------------------------------------------

## 5. 색과 배경

-   **색 표현 방법**

    ``` css
    div { color: blueviolet; }       /* 색 이름 */
    div { color: #8A2BE2; }          /* 16진수 */
    div { color: rgb(138, 43, 226); } /* RGB */
    ```

-   **배경 속성**

    ``` css
    background-color: skyblue;
    background-image: url("img.png");
    background-position: center center;
    background-repeat: repeat-y;
    ```

-   **단축 속성**

    ``` css
    background: skyblue url("img.png") center/100px 100px no-repeat;
    ```

------------------------------------------------------------------------

## 6. 텍스트와 폰트

-   **텍스트 꾸미기**

    ``` css
    h3 { text-align: right; }          /* 정렬 */
    span { text-decoration: line-through; } /* 취소선 */
    strong { text-decoration: overline; }   /* 윗줄 */
    p { text-indent: 2em; }            /* 들여쓰기 */
    ```

-   **폰트 관련**

    ``` css
    body { font-family: "Times New Roman", serif; }
    h3 { font-size: 40px; }
    p { font-style: italic; }
    p { font-weight: bold; }
    ```

-   **단축 속성**

    ``` css
    font: italic bold 20px consolas, sans-serif;
    ```

------------------------------------------------------------------------

## 7. 박스 모델

HTML 요소는 모두 **사각형 박스**로 다뤄짐

-   **구성 요소**

    -   콘텐츠(content)
    -   패딩(padding)
    -   테두리(border)
    -   마진(margin)

-   **관련 속성**

    ``` css
    div.box {
      width: 150px;
      height: 50px;
      margin: 40px;
      padding: 20px;
      border: 5px dotted red;
    }
    ```

-   **추가 기능**

    -   둥근 모서리:

        ``` css
        border-radius: 20px;
        ```

    -   이미지 테두리:

        ``` css
        border-image: url("border.png") 30 round;
        ```

------------------------------------------------------------------------

## 8. 시각 효과

-   **텍스트 그림자**

    ``` css
    .text1 { text-shadow: 3px 3px red; }
    .text2 { text-shadow: 3px 3px 5px skyblue; }
    ```

-   **박스 그림자**

    ``` css
    .box1 { box-shadow: 10px 10px red; }
    .box2 { box-shadow: 10px 10px 5px gray; }
    ```

-   **커서 모양**

    ``` css
    p { cursor: pointer; }
    p { cursor: crosshair; }
    p { cursor: help; }
    ```

------------------------------------------------------------------------
