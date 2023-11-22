module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /(?:(\[\w+\]\s))?(?:(:\w+:)\s)(.+)/,
      headerCorrespondence: ['issue', 'type', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'gitmoji-type-enum': (parsed, _when, expectedValue) => {
          const { type } = parsed
          if (type && !expectedValue.includes(type)) {
            return [
              false,
              `type must be one of ${expectedValue}. see https://gitmoji.dev`,
            ]
          }
          return [true, '']
        },
      },
    },
  ],
  rules: {
    'gitmoji-type-enum': [
      2,
      'always',
      [
        ':bug:', // 오타
        ':sparkles:', // 신규 글
        ':recycle:', // 교정
        ':fire:', // 삭제
        ':memo:', // 일반적인 작성
        ':lipstick:', // 스타일 수정
        ':green_heart:', // ci 수정
        ':wrench:', // 환경 변경
        ':truck:', // 경로 변경
        ':rocket:', // 배포
        ':package:', // 패키지 신규 설치
      ],
    ],
  },
}
