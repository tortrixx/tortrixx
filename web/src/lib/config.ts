import type { icons } from "lucide-react"

interface Item {
  name: string
  desc: string
  link: string
  icon: keyof typeof icons
}

interface Config {
  github: string
  projects: Item[]
  links: Item[]
  about: { mail: string; me: string; frontend: string[]; backend: string[] }
}

export const config: Config = {
  github: "https://github.com/tortrixx",
  projects: [
    {
      name: "tortrixx",
      desc: "我的个人导航页项目，用来集中整理常用入口、项目和工作区工具。",
      link: "https://github.com/tortrixx/tortrixx",
      icon: "Compass",
    },
    {
      name: "GitHub",
      desc: "我的代码仓库和开源项目主页。",
      link: "https://github.com/tortrixx",
      icon: "Github",
    },
    {
      name: "Workspace",
      desc: "个人工作流、常用软件和开发工具清单。",
      link: "/workspace",
      icon: "DraftingCompass",
    },
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/tortrixx",
      desc: "代码、项目和公开资料",
      icon: "Github",
    },
    {
      name: "WORKSPACE",
      link: "/workspace",
      desc: "工欲善其事，必先利其器",
      icon: "PocketKnife",
    },
  ],
  about: {
    mail: "",
    me: "这里是 tortrixx 的个人导航页，集中放置常用入口、项目和开发工作区。",
    backend: ["Golang", "Python", "Docker", "Linux"],
    frontend: ["TypeScript", "React", "Astro", "Tailwind CSS"],
  },
}
