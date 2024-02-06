import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { value: 'npm', content: 'npm run tauri ' },
  { value: 'Yarn', content: 'yarn tauri ' },
  { value: 'pnpm', content: 'pnpm tauri ' },
  { value: 'Cargo', content: 'cargo tauri ' },
]

function insertDashDashBeforeOption(value, name) {
  let idx = name.indexOf(' --')
  if (idx === -1) {
    idx = name.indexOf(' -')
  }
  if (idx === -1) {
    return value + name
  }
  return value + name.slice(0, idx + 1) + '--' + name.slice(idx)
}

export const CodeBlocks = () => {
  return (
    <Tabs groupId="package-manager">
      <TabItem value="Born out of battle...">
        <CodeBlock className="language-shell" language="html">
          liliFLUX was created by two developers who make games
          <br/> in their space time. They used AI to fill gaps in their <br/>
          projects such as documentation writing, UI and much more. <br/>
          Nothing off the shelf existed, and so liliFLUX was born.
        </CodeBlock>
      </TabItem>
      <TabItem value="Simple Download">
        <CodeBlock className="language-shell" language="html">
          <li>Buy it</li>
          <li>Download it</li>
          <li>Try it</li>
          
          Once you're running simply enter your chatgpt api key<br/>
          and you can start experimenting !
        </CodeBlock>
      </TabItem>
      <TabItem value="INC - 1">
        <CodeBlock className="language-shell" language="html">

        </CodeBlock>
      </TabItem>
      <TabItem value="INC - 2">
        <CodeBlock className="language-shell" language="html">

        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}


export default ({ name }) => {
  return (
    <Tabs groupId="package-manager" values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          <CodeBlock className="language-shell" language="shell">
            {type.value !== 'npm'
              ? type.content + name
              : insertDashDashBeforeOption(type.content, name)}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
