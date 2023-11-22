# npm-deep-dive

자바스크립트 개발자라면 반드시 알아야 할 것 중 하나는 바로 `npm`입니다. `npm`은 자바스크립트를 프로그래밍 언어로 사용하는 개발자들이 패키지를 관리하고, 사용하며, 공유할 수 있도록 도와주는 도구입니다. 무릇 자바스크립트 개발자라면 하루에도 여러번 `npm`을 사용하지만, 정작 `npm`이 어떻게 동작하고 또 git 저장소에서 어떻게 `npm`이 사용되는 지에 대해서는 정확히 알지 못하는 경우가 많습니다. 특히 npm 프로젝트라면 반드시 필요한 `node_modules`는 워낙 복잡하고 방대한 정보가 담겨있어, 개발자들 사이에서는 우스갯소리로 블랙홀보다 더 복잡한 존재로 치부하곤 합니다. npm deep dive (가제) 에서는 `npm` 을 비롯한 자바스크립트 패키지 생태계를 다루고, 실제로 자바스크립트 패키지를 어떻게 만들고 배포할 수 있는지 살펴봅니다. 단순히 `npm install`로 자바스크립트 패키지를 다운로드받고 사용하는 것을 넘어, 효율적으로 패키지를 관리하고 유지 보수하는 방법에 대해서도 알아봅니다.

## 0. 자바스크립트 라이브러리 생태계에 대한 이해

### 0-1. nodejs와 node_modules의 역사

### 0-2. npm 은 무엇인가?

## 1. commonjs와 esmodule

### 1-1. 자바스크립트 모듈화의 역사

### 1-2. commonjs란 무엇인가?

### 1-3. esmodule이란 무엇인가?

### 1-4. commonjs와 esmodule, 무엇이 정답일까?

> - https://yceffort.kr/2023/05/why-esmodule
> - https://yceffort.kr/2023/05/what-is-commonjsw

## 2. node module resolution algorithm

### 2-1. `node_modules`는 무엇일까?

### 2-2. `nodejs`는 어떻게 `node_modules`에서 패키지를 찾아갈까?

## 3. package.json 과 npmrc 파헤치기

### 3-1. package.json 의 정의와 사용법

### 3-2. `.npmrc`와 registry

### 3-3. `dependencies` `devDependencies` `peerDependencies`

### 3-4. npm 주요 명령어 살펴보기

### 3-5. npm install 을 실행하면 어떤 일이 벌어질까?

## 4. npm, yarn, 그리고 pnpm

### 4-1. npm 의 문제점과 한계

### 4-2. `yarn` yet another resource negotiator

### 4-3. `pnpm` performant npm

### 4-4. plug n play와 zero install

### 4-5. 무엇을 선택해야할까?

> - https://yceffort.kr/2022/05/npm-vs-yarn-vs-pnpm

## 5. 패키지 실행도구, npx

### 5-1. npx란 무엇인가

### 5-2. package.json 과 bin 필드

## 6. 유의적 버저닝, semver

### 6-1. 유의적 버저닝은 무엇일까?

### 6-2. 유의적 버저닝의 명과암

## 7. 폴리필과 트랜스파일은 무엇일까?

### 7-1. 트랜스파일을 도와주는 도구 babel

### 7-2. 폴리필을 도와주는 도구 corejs

### 7-3. 최선의 폴리필과 트랜스파일은 무엇인가

### 7-4. babel과 corejs의 대안

## 8. 패키지 번들링 도구 알아보기

### 8-1. 번들링은 왜 필요할까?

### 8-2. 가장 유서 깊은 번들링도구, rollup

### 8-3. 요즘 떠오르는 esbuild

### 8-4. 그 밖의 트렌드 살펴보기 (snowpack, vite, turbopack, etc..)

## 9. 직접 자바스크립트 라이브러리 만들어보기

### 9-1. 나만의 npm 패키지 만들어보기

### 9-2. 나만의 npx 패키지 만들어보기

### 9-3. changeset으로 효율적으로 버전 관리하기

## 10. 모노레포로 서비스 코드와 라이브러리 모두 관리해보기

### 10-1. turborepo 와 pnpm

### 10-2. 모노레포와 서비스 라이브러리 동시에 관리해보자
