export type SiteLocale = "zh-CN" | "en-US";

export const defaultSiteLocale: SiteLocale = "zh-CN";
export const siteLocaleStorageKey = "edgeever.site.locale";
export const siteLocaleDataAttribute = "data-edgeever-site-locale";
export const siteTaglines = {
  "zh-CN": "部署在自己 Cloudflare 上的开源笔记工作区：熟悉三栏体验，数据开放，原生支持 AI Agent",
  "en-US": "An open-source notes workspace on your own Cloudflare account, with familiar workflows, open data, and native AI Agent access.",
} as const satisfies Record<SiteLocale, string>;

export const getSiteLocale = (pathname: string): SiteLocale => (pathname === "/en" || pathname.startsWith("/en/") ? "en-US" : "zh-CN");

export const getLocalizedPath = (locale: SiteLocale, path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (locale === "zh-CN") {
    return normalizedPath === "/en" ? "/" : normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";
  }

  if (normalizedPath === "/") {
    return "/en/";
  }

  return normalizedPath.startsWith("/en/") ? normalizedPath : `/en${normalizedPath}`;
};

export const siteCopy = {
  "zh-CN": {
    layout: {
      defaultDescription:
        "EdgeEver 是一个部署在自己 Cloudflare 账号中的开源笔记工作区，提供经典三栏体验、富文本与 Markdown 编辑、完整备份恢复、多账户隔离，以及 REST API、OpenAPI 和 MCP。",
      defaultTitle: `EdgeEver - ${siteTaglines["zh-CN"]}`,
      imageAlt: "EdgeEver 笔记应用截图",
      ogLocale: "zh_CN",
    },
    nav: {
      homeAria: "EdgeEver 首页",
      features: "功能特性",
      guides: "使用指南",
      deploy: "部署",
      migration: "从印象笔记迁移",
      evernoteMigration: "从印象笔记迁移",
      memosMigration: "从 Memos 迁移",
      notionMigration: "从 Notion 迁移",
      advancedPlay: "搭配AI Agent的玩法",
      blog: "博客",
      contact: "联系我们",
      demo: "在线演示",
      language: "语言",
      languageMenu: "切换语言",
      tagAll: "全部",
      tagMigration: "迁移教程",
      tagMcp: "AI 协同 (MCP)",
      tagSelfHosted: "部署自托管",
    },
    hero: {
      slogan: siteTaglines["zh-CN"],
      demo: "在线演示",
      agentInstall: "通过AI Agent部署",
      imageAlt: "EdgeEver product preview",
      badgeText: "数据在自己的 Cloudflare，随时可以完整导出与恢复",
      proofs: ["经典三栏", "EdgeEver ZIP", "REST API 与 MCP", "多账户隔离"],
    },
    features: {
      heading: "重新定义个人笔记体验",
      items: [
        {
          title: "无需服务器，日常使用零运维",
          summary: "运行在 Cloudflare Workers、D1 与 R2 上，不需要购买和维护传统云服务器。",
          points: [
            "无需配置 Docker、Nginx 或 SSL 证书，可以通过 AI Agent 协助完成首次部署。",
            "个人日常使用通常可由 Cloudflare 免费额度覆盖；按当前估算，可容纳约 15 万条短笔记或 5 万张 200KB 图片。",
            "笔记数据库和附件资源都保存在你自己的 Cloudflare 账号中。",
          ],
        },
        {
          title: "AI Agent 原生连接",
          summary: "内置 REST API、OpenAPI schema 与 Remote MCP endpoint，让 AI 助手安全地读取、创建和整理笔记。",
          points: [
            "在应用内生成 MCP Token，就能把 EdgeEver 接入 Codex、Claude Code、Antigravity 等工具。",
            "Agent 可以通过明确授权读取、创建、修改笔记，并查看或恢复笔记历史版本。",
            "基于这些开放接口，可以进一步实现标签整理、知识地图和跨笔记检索等工作流。",
            "还可以联动 Notion Database、飞书多维表格等工具，把零散信息整理成结构化数据。",
          ],
        },
        {
          title: "经典三栏，写作和整理都顺手",
          summary: "保留笔记本树、笔记列表和主编辑区，同时补齐长期知识库需要的编辑与整理能力。",
          points: [
            "支持无限级嵌套笔记本，适合长期沉淀的大型知识库。",
            "桌面端可在富文本与 Markdown 源码之间切换，笔记历史版本支持对比和恢复。",
            "笔记本可以拖拽排序和调整层级，笔记支持批量移动与批量合并。",
            "Chrome/Edge 网页剪藏扩展已完成，目前等待商店上架。",
          ],
        },
        {
          title: "开放数据，也能完整恢复",
          summary: "一份 EdgeEver ZIP 同时兼顾直接阅读与完整恢复，不把你的知识库锁在某个产品里。",
          points: [
            "导出包包含 Markdown、Front Matter、嵌套笔记本目录和相对路径附件，可以直接打开阅读。",
            "版本化结构数据同时保留笔记关系与历史版本，可在 EdgeEver 实例之间完整恢复。",
            "底层使用基于标准 SQLite 的 Cloudflare D1，也可通过 API、MCP 或 CLI 按需管理。",
          ],
        },
        {
          title: "多端无缝同步，不限设备数",
          summary: "电脑、手机、平板都能直接同步，自建实例让你彻底摆脱商业笔记平台的登录设备数限制。",
          points: [
            "自建 API 不限制登录设备数量，可以在电脑、手机和平板间同步。",
            "支持 PC 与移动端网页访问，也可以安装成 PWA，随手打开就能记。",
            "已有笔记支持离线草稿与本地同步队列；上传图片前还可在浏览器本地压缩。",
          ],
        },
        {
          title: "一个实例，多账户独立空间",
          summary: "为家人或小团队成员创建账号，每个人都拥有完全隔离的私人笔记工作区。",
          points: [
            "实例管理员可以创建、停用成员账号或重置密码，实例不开放公众注册。",
            "每个成员的笔记本、笔记、附件、回收站和导入导出数据彼此隔离。",
            "MCP Token 也按成员空间隔离，Agent 只能访问被明确授权的数据。",
          ],
        },
      ],
    },
    guides: {
      eyebrow: "EdgeEver Guides",
      heading: "从部署、迁移到 AI Agent 玩法",
      description: "先部署自己的实例，再把旧笔记迁过来，最后用 MCP 接入 AI Agent；每一步都有对应的操作指引。",
      items: [
        {
          title: "AI Agent 一句话部署",
          summary: "按仓库推荐流程，让 Codex、Claude Code、Cursor 等助手协助完成 Cloudflare 部署。",
          href: "/blog/ai-agent-deploy-cloudflare",
          cta: "查看部署指南",
        },
        {
          title: "从印象笔记迁移",
          summary: "通过 EdgeEver MCP、evernote-backup 和 ENEX 导入脚本，把旧笔记库迁移到自托管实例。",
          href: "/blog/evernote-migration-guide",
          cta: "查看迁移指南",
        },
        {
          title: "从 Notion 或 Memos 迁移",
          summary: "让 AI Agent 同时连接来源与 EdgeEver MCP，把已有内容分批搬进自己的实例。",
          href: "/blog?tag=migration",
          cta: "查看迁移方式",
        },
        {
          title: "AI Agent 进阶玩法",
          summary: "用 MCP 读取真实笔记，生成知识地图、标签建议和个人资料整理工作流。",
          href: "/guides/advanced-play",
          cta: "查看玩法",
        },
      ],
    },
  },
  "en-US": {
    layout: {
      defaultDescription:
        "EdgeEver is an open-source notes workspace on your own Cloudflare account, with a classic three-pane workflow, rich text and Markdown editing, complete backup and restore, isolated accounts, REST API, OpenAPI, and MCP.",
      defaultTitle: `EdgeEver - ${siteTaglines["en-US"]}`,
      imageAlt: "EdgeEver notes app screenshot",
      ogLocale: "en_US",
    },
    nav: {
      homeAria: "EdgeEver home",
      features: "Features",
      guides: "Guides",
      deploy: "Deploy",
      migration: "Migrate from Evernote",
      evernoteMigration: "Migrate from Evernote",
      memosMigration: "Migrate from Memos",
      notionMigration: "Migrate from Notion",
      advancedPlay: "AI Agent plays",
      blog: "Blog",
      contact: "Contact",
      demo: "Demo",
      language: "Language",
      languageMenu: "Change language",
      tagAll: "All",
      tagMigration: "Migration",
      tagMcp: "AI & MCP",
      tagSelfHosted: "Deployment",
    },
    hero: {
      slogan: siteTaglines["en-US"],
      demo: "Live demo",
      agentInstall: "Install with AI Agent",
      imageAlt: "EdgeEver product preview",
      badgeText: "Your data stays in your Cloudflare account and remains fully portable",
      proofs: ["Three-pane workflow", "EdgeEver ZIP", "REST API & MCP", "Isolated accounts"],
    },
    features: {
      heading: "A personal notes workspace rebuilt for self-hosting",
      items: [
        {
          title: "No server to maintain",
          summary: "EdgeEver runs on Cloudflare Workers, D1, and R2 without a traditional server to buy or manage.",
          points: [
            "No Docker, Nginx, or SSL configuration is required, and an AI Agent can help complete the first deployment.",
            "Typical personal use can fit within Cloudflare's free quotas; current estimates are about 150k short notes or 50k images at 200 KB each.",
            "The notes database and attachments remain in your own Cloudflare account.",
          ],
        },
        {
          title: "AI Agent native",
          summary: "Built-in REST API, OpenAPI schema, and Remote MCP endpoint let AI assistants read, create, and organize notes safely.",
          points: [
            "Generate an MCP token in the app to connect EdgeEver with Codex, Claude Code, Antigravity, and similar tools.",
            "With explicit authorization, agents can read, create, and update notes, and inspect or restore revision history.",
            "The open interfaces support workflows such as tag cleanup, knowledge maps, and cross-note retrieval.",
            "Agents can also connect notes with tools such as Notion databases and Feishu Bitable to create structured data.",
          ],
        },
        {
          title: "A familiar three-pane workspace",
          summary: "Notebook tree, note list, and editor stay familiar while adding the tools needed for a long-lived knowledge base.",
          points: [
            "Unlimited nested notebooks support long-lived personal knowledge bases.",
            "On desktop, switch between rich text and Markdown source, then compare or restore earlier revisions.",
            "Drag notebooks to reorder or change hierarchy, and move or merge notes in batches.",
            "The Chrome/Edge web clipper is complete and pending store publication.",
          ],
        },
        {
          title: "Open data with complete recovery",
          summary: "A single EdgeEver ZIP stays directly readable while preserving everything needed for a complete restore.",
          points: [
            "Exports include Markdown, Front Matter, nested notebook folders, and relative-path attachments for direct access.",
            "Versioned structured data preserves note relationships and revision history for recovery between EdgeEver instances.",
            "Content lives in Cloudflare D1, based on standard SQLite, and can also be managed via API, MCP, or CLI.",
          ],
        },
        {
          title: "Multi-device sync, uncapped limits",
          summary: "Use EdgeEver from desktop, phone, or tablet with no device limits and a PWA-friendly experience.",
          points: [
            "No device limits: self-hosted API means no commercial restrictions on the number of active login devices.",
            "Open it in the browser or install it as a PWA for quick capture.",
            "Existing notes support offline drafts and a local sync queue, while images can be compressed locally before upload.",
          ],
        },
        {
          title: "One instance, isolated accounts",
          summary: "Create accounts for family or a small team while giving each person a completely private notes workspace.",
          points: [
            "The owner can create or disable member accounts and reset passwords; public registration stays closed.",
            "Each member has isolated notebooks, notes, attachments, Trash, and import/export data.",
            "MCP tokens are isolated by workspace, so agents only access explicitly authorized data.",
          ],
        },
      ],
    },
    guides: {
      eyebrow: "EdgeEver Guides",
      heading: "Deploy, migrate, and put AI agents to work",
      description: "Deploy your own instance, bring over an existing notes library, then connect MCP-powered AI workflows with a guide for every step.",
      items: [
        {
          title: "Deploy with an AI Agent",
          summary: "Follow the repository-backed flow for Codex, Claude Code, Cursor, and similar assistants to deploy on Cloudflare.",
          href: "/blog/ai-agent-deploy-cloudflare",
          cta: "Read deployment guide",
        },
        {
          title: "Migrate from Evernote",
          summary: "Use EdgeEver MCP, evernote-backup, and the ENEX import script to migrate an old notes library into your self-hosted instance.",
          href: "/blog/evernote-migration-guide",
          cta: "Read migration guide",
        },
        {
          title: "Migrate from Notion or Memos",
          summary: "Let an AI Agent connect the source and EdgeEver MCP endpoints to move existing content into your own instance in batches.",
          href: "/blog?tag=migration",
          cta: "Explore migration paths",
        },
        {
          title: "AI Agent advanced play",
          summary: "Turn real notes into knowledge maps, tag cleanup plans, and higher-level personal knowledge workflows through MCP.",
          href: "/guides/advanced-play",
          cta: "Explore workflows",
        },
      ],
    },
  },
} as const;
