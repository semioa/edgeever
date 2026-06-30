export type MigrationGuideCommand = {
  label: string;
  language: "sh" | "powershell";
  code: string;
};

export type MigrationGuideStep = {
  index: string;
  title: string;
  paragraphs?: string[];
  commands?: MigrationGuideCommand[];
  list?: string[];
};

export const EVERNOTE_MIGRATION_GUIDE = {
  title: "印象笔记迁移指引",
  subtitle: "支持 AI Agent 一键驱动或 MCP 自动化批量导入，保留笔记本组结构",
  introTitle: "最佳实践迁移方案",
  intro: [
    "我们强烈推荐使用 AI 编程助手（如 Antigravity、Claude Code、Cursor 等）自动执行迁移，或者基于 EdgeEver MCP (Model Context Protocol) 命令行进行迁移。该方案已完成内存流式优化与空文本预处理，能安全应对数 GB 级别超大笔记库，完整保留创建/修改时间与嵌套笔记本目录层级。",
  ],
  steps: [
    {
      index: "1",
      title: "第一步：配置并安装 EdgeEver MCP 服务",
      list: [
        "点击网页端左下角的「设置（Settings）」图标。",
        "在「API & MCP 授权」卡片生成 Token 后，点击「复制完整 MCP 配置」按钮。",
        "把复制的 JSON 配置直接粘贴发送给你的 AI 编程助手（如 Antigravity, Claude Code, Cursor 等），让它帮你自动在当前的 AI 客户端中安装配置好该 MCP 服务。",
      ],
      commands: [
        {
          label: "发送给 AI 助手的配置安装 Prompt",
          language: "sh",
          code: `你是 AI 编程助手。这是我的 EdgeEver MCP 服务配置 JSON。请帮我把这个 MCP 服务直接安装配置到我当前使用的 AI 编辑器/客户端（如 Claude Code, Cursor, Cline 等）的 MCP 服务器配置文件中：

<在此处粘贴刚才复制的 JSON 配置内容>`,
        },
      ],
    },
    {
      index: "2",
      title: "第二步：让 AI 助手自动导入和迁移笔记",
      paragraphs: [
        "当 AI 助手配置好 MCP 之后，请复制以下 Prompt 发送给它，让它全自动拉取印象笔记数据并导入（你可以指定只同步部分笔记本，或者进行全量导入）：",
      ],
      commands: [
        {
          label: "发送给 AI 助手的迁移同步 Prompt",
          language: "sh",
          code: `你是 AI 编程助手。请帮我基于 \`evernote-backup\` 工具和刚安装的 EdgeEver MCP 服务，把我的本地印象笔记数据同步迁移到实例中：
1. 检查本地是否安装了 \`evernote-backup\`。若未安装，请使用 \`pipx install evernote-backup\` 自动安装。
2. 提示我输入印象笔记用户名密码并初始化数据库（指定 china 后端），随后同步数据并导出到 \`./evernote-export\` 目录。
3. 在 EdgeEver 项目根目录下运行内置的导入脚本完成迁移：
   - 全量迁移运行：\`bun scripts/import-evernote-enex-via-mcp.mjs --input "./evernote-export" --yes\`
   - 若要指定只迁移某几个笔记本，请在命令后加上 \`--include "笔记本A,笔记本B"\` 参数。

请告诉我你需要什么信息（如账号密码），收到后直接并发自动执行上述步骤。`,
        },
      ],
    },
    {
      index: "3",
      title: "第三步：在网页端验证结果",
      list: [
        "导入完成后，回到 EdgeEver 网页端刷新页面。",
        "检查左侧栏，确认印象笔记原有的「笔记本组（堆叠）」层级结构已完美还原。",
        "打开几篇包含多张图片的笔记，验证其中的图片是否已成功在编辑器中加载并能清晰显示。",
        "验证完毕后，你可以随时在「设置」->「API & MCP 授权」中吊销此 Token 以保障安全。",
      ],
    },
  ] satisfies MigrationGuideStep[],
};
