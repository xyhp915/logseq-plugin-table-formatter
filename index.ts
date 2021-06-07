import '@logseq/libs'
import { MarkdownTableSpliter } from './formatter'

/**
 * entry
 */
function main () {
  logseq.Editor.registerSlashCommand('🪄 format table',
    async () => {
      const [content, uuid] = await logseq.Editor.getCurrentBlockContent()
      if (!content) return

      const output = new MarkdownTableSpliter(content).format()

      await logseq.Editor.updateBlock(
        uuid,
        output.join('\n')
      )

      logseq.App.showMsg('formatter')
    }
  )
}

// bootstrap
logseq.ready(main).catch(console.error)
