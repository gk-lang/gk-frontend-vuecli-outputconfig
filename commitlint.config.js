module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  // type后面跟着的是英文冒号，还必须加一个空格！
  // 当我们 commit 提交信息时，必须是 git commit -m 'fix: xxx' 符合类型的才可以，
  // 需要注意的是类型的后面需要用英文的:，并且冒号后面是需要空一格的，这个是不能省略的
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性、新功能
        'fix', // 修改bug
        'docs', // 文档修改
        'style', // 不影响程序逻辑的代码修改,如代码格式修改(修改空白字符，补全缺失的分号等),注意不是 css 修改
        'refactor', // 代码重构
        'perf', // 优化相关，比如提升性能、体验
        'test', // 测试用例修改
        'chore', // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
        'revert', // 回滚到上一个版本
        'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        'ci' // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
