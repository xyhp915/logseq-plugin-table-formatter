import { MarkdownTableSpliter } from './formatter'

const trimRN = (str) => str.replace(/^[\r\n]+/, '').replace(/[\r\n]+$/, '')

test('api', () => {
  const inst0 = new MarkdownTableSpliter(` 
# title
|a|b
|---|---
|f
`)
  const inst00 = `
# title
| a   | b   |
| --- | --- |
| f   |     |
`

  const inst1 = new MarkdownTableSpliter(`
|a|b
|-
|你
`)
  const inst11 = `
| a   | b   |
| --- | --- |
| 你  |     |
`

  expect(inst0.format().join('\n')).toBe(trimRN(inst00))
  expect(inst1.format().join('\n')).toBe(trimRN(inst11))
})
