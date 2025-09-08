# 🌐 웹 프로그래밍 강의 정리 (9월 3일)

## 📖 웹 브라우저의 역사

- **1990년**: 최초의 웹 브라우저 **WorldWideWeb** (팀 버너스 리 개발)  
  → 후에 이름을 **Nexus**로 변경  
- **1993년**: **Mosaic** 출시 – 일반 대중에게 처음 널리 사용된 브라우저  
- **1994년**: **Netscape Navigator** 등장 – 한때 전 세계 점유율 1위  
- **1995년**: **Internet Explorer(IE)** 출시 – Windows에 기본 탑재되며 급성장  
- **2003년**: **Safari** (애플에서 개발)  
- **2004년**: **Mozilla Firefox** 출시 – 보안성과 확장성 강조  
- **2008년**: **Google Chrome** 등장 – 속도와 간결함으로 현재 점유율 1위  
- **2015년**: **Microsoft Edge** 출시 – IE를 대체  

👉 최초의 웹 브라우저는 **팀 버너스 리**가 개발한 **WorldWideWeb** 이다.

---

## 💻 서버와 클라이언트의 의미

- **서버(Server)**  
  → 정보를 저장하고 요청이 오면 제공하는 컴퓨터(제공자 역할)  

- **클라이언트(Client)**  
  → 서버에 정보를 요청하고 전달받아 사용하는 컴퓨터(사용자 역할)  

📌 예시:  
- 사용자가 웹 브라우저(클라이언트)를 통해 웹사이트 접속 요청 →  
- 해당 요청을 처리하고 HTML, CSS, JS 파일을 제공하는 곳이 **웹 서버**

## 🌍 URL, URI, URN 차이

- **URI (Uniform Resource Identifier)**  
  → 인터넷 상의 자원을 식별하기 위한 **통합 식별자** (포괄적 개념)  
  → URL과 URN을 모두 포함하는 개념  

- **URL (Uniform Resource Locator)**  
  → 자원의 위치(Location)를 나타내는 식별자  
  → 흔히 말하는 "웹 주소"  
  → 예: `https://example.com/index.html`  

- **URN (Uniform Resource Name)**  
  → 자원의 **이름(Name)** 자체로 식별하는 방식  
  → 위치와 상관없이 유일한 이름을 부여  
  → 예: `urn:isbn:0451450523` (책 ISBN 번호)  

📌 정리:  
- **URI** = 자원을 식별하는 모든 방법  
- 그중 위치를 기반으로 하면 **URL**  
- 이름 기반으로 하면 **URN**
