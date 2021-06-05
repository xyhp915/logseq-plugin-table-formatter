import { stringWidth } from './helper'

class MarkdownTableSpliter {

  /**
   * @private
   */
  private _splits: Array<{ table: boolean, value: string }> = []

  /**
   * @param _input
   */
  constructor (private _input: string) {
    this.parse()
  }

  private parse () {
    const input = this._input.trim()

    if (!input) {
      this._splits = []
    }

    // read line by line
    const lines = input.split(/\r?\n/)

    // group Adjacent table marks
    let s = this._splits

    this._splits = lines.reduce((acc, line) => {
      const isTableMarkLine = line.trim().includes('|')
      const activeGroup = acc[acc.length - 1]

      if (!activeGroup || isTableMarkLine !== activeGroup.table) {
        acc.push({ table: isTableMarkLine, value: line })
      } else {
        activeGroup.value += '\n' + line
      }

      return acc
    }, [] as typeof s)
  }

  format () {
    const outputs = this.splits.map(it => {
      if (!it.table) return it.value
      return MarkdownTableSpliter.parseTableStr(it.value).format()
    })

    return outputs
  }

  static parseTableStr (str: string) {
    let valid = true

    if (!str || !str.trim()) {
      str = ''
      valid = false
    }

    const lines = str.split(/\r?\n/)
    const rows = lines.map(it => {
      return it.trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
    })

    // 0. validate Head & Head Divider TODO: auto completion
    if (rows.length < 2 || rows[1].some(it => -1 === it.indexOf('-'))) {
      valid = false
    }

    const headRow = rows[0]
    const tailRow = rows[rows.length - 1]
    const SPACE = ' '
    const format = () => {
      if (!valid) return str

      let retRows = rows.map(row => [...row])

      // 1. repeat cols and fill SPACE in field by Max width field
      Array.from({length:Math.max(headRow.length, tailRow.length)}).forEach((_, col) => {
        const maxWidth = Math.max(3, ...retRows.map(row => {
          const f = row[col] = (row[col] || '').trim()
          return !f ? (0) : stringWidth(f)
        }))

        // pad SPACE
        retRows.forEach((row, i) => {
          const isDivideRow = i === 1

          if (isDivideRow) {
            if (!row[col]) {
              row[col] = '---'
            } else {
              // :---:
              const alignFlagLen = row[col].replace(/-+/g, '').length
              row[col] = row[col].replace(/-+/, '-'.repeat(Math.max(maxWidth - alignFlagLen, 3)))
            }
          } else {
            row[col] += SPACE.repeat(maxWidth - stringWidth(row[col]))
          }
        })
      })

      return retRows.map(row => '| ' + row.join(' | ')).join(' |\n') + ' |'
    }

    return {
      format
    }
  }

  get splits (): Array<{ table: boolean; value: string }> {
    return this._splits
  }
}

export {
  MarkdownTableSpliter
}
