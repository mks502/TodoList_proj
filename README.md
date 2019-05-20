# 프로그래머스_Todolist

### 1.리눅스 기준으로 실행하기 위해 필요한 설치
 	1.1. java 1.8
	1.2 node.js 와 yarn
	1.3 Maria DB

### 2.리눅스 기준으로 실행하기 위한 빌드 방법
 	2.1. 해당 프로젝트의 frontend 폴더에서 yarn build 나 npm build를 한다.  yarn build -추천 
	2.2 maven build를 통해 해당 프로젝트를 빌드한다  //테스트는 스킵
	2.3 jar 파일이 만들어진다
	2.4 jar 파일을 jar xxxx.jar 실행한다

### 또는 윈도우에서 jar로 빌드 후 서버에 배포 방법
	2.1처럼 frontend 폴더에서 yarn build 나 npm build를 한다.
	2.2처럼 maven build를 한다. package -Dmaven.test.skip=true //테스트는 스킵한다
	2.3 jar 파일을 filezilla 같은 ftp로 배포시킬 서버에 옮긴다.
	2.4 서버를 돌린다.

### 사용 스택

```
- 프론트엔드
	1. HTML, CSS, JavaScript
	2. React.js
	3. BootStrap
- 백엔드
	1. Java
	2. Spring Boot
	3. JPA
	4. Maria DB
- 기타
	1. AWS EC2 배포
```
