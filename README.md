# npm-deep-dive

자바스크립트 개발자라면 반드시 알아야 할 것 중 하나는 바로 `npm`입니다. `npm`은 자바스크립트를 프로그래밍 언어로 사용하는 개발자들이 패키지를 관리하고, 사용하며, 공유할 수 있도록 도와주는 도구입니다. 무릇 자바스크립트 개발자라면 하루에도 여러번 `npm`을 사용하지만, 정작 `npm`이 어떻게 동작하고 또 서비스 저장소에서 어떻게 `npm`사용할 수 있는 지에 대해서는 정확히 알지 못하는 경우가 많습니다. npm deep dive (가제) 에서는 `npm` 을 비롯한 자바스크립트 패키지 생태계를 다루고, 실제로 자바스크립트 패키지를 어떻게 만들고 배포할 수 있는지 살펴봅니다. 단순히 `npm install`로 자바스크립트 패키지를 사용하는 것을 넘어, 효율적으로 패키지를 관리하고 유지 보수하는 방법에 대해서도 알아봅니다. 

## 0. 자바스크립트 라이브러리 생태계에 대한 이해

- npm 의 정의와 역사

## 1. commonjs와 esmodule

- commonjs, esmodule 의 정의와 각각의 차이
- 왜 요즘은 esmodule만 지원하는 라이브러리가 많아지고 있을까?

## 2. node module resolution algorthm 

- nodejs는 어떤 알고리즘으로 패키지를 찾아갈까?

## 3. package.json 과 npmrc 파헤치기

- package.json 각 필드의 정의
- npmrc는 무엇일까?
- commonjs와 esmodule을 둘다 지원하려면 어떻게 해야할까?
- `dependencies` `devDependencies` `peerDependencies`의 차이

## 4. npm, yarn, 그리고 pnpm

- npm 의 한계
- yarn 은 무엇인가
- pnpm 은 무엇인가
- pnp, zero-install 은 무엇일까
- 그래서 무엇이 제일 좋을까

## 5. 패키지 실행도구, npx

- npx 는 무엇이고, 어떻게 동작할까

## 6. 유의적 버저닝, semver

- semver는 무엇일까

## 7. 폴리필과 트랜스파일은 무엇일까? 

- babel (swc)
- corejs

## 8. 패키지 번들링 도구 알아보기

- vite
- rollup
- 그밖의 대안 (snowpack, esbuild, etc.)

## 9. 직접 자바스크립트 라이브러리 만들어보기

- npm편: 나만의 유틸을 담아둔 패키지 만들어보기
- npx편: commit 을 도와주는 cli 도구 만들어보기
- changeset

## 10. 모노레포로 서비스 코드와 라이브러리 모두 관리해보기

- 서비스 코드를 모노레포로 만들어서 서비스와 라이브러리 동시에 관리해보기
- turborepo
- pnpm
