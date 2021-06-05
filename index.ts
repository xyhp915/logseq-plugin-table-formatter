import '@logseq/libs'
import { MarkdownTableSpliter } from './formatter'

/**
 * entry
 */
function main () {
  logseq.Editor.registerSlashCommand('🪄 format table',
    async () => {
      const b = await logseq.Editor.getCurrentBlock()
      if (!b?.content) return

      const output = new MarkdownTableSpliter(b.content).format()

      await logseq.Editor.updateBlock(
        b.uuid,
        output.join('\n')
      )

      logseq.App.showMsg('formatter')
    }
  )
}

// bootstrap
logseq.ready(main).catch(console.error)
