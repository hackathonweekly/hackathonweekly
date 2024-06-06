export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'jackiexiao',
    avatar: '',
    username: 'jackiexiao',
    title: '发起人',
    desc: '全栈开发者，渴望理解世界的运作模式',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/jackiexiao' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/realjackiexiao' },
    ],
    nameAliases: ['jackiexiao', '肖鉴津'],
    emailAliases: ['jackie.xiao@outlook.com'],
  },
  {
    name: 'Arnold Xiao（逸云）',
    avatar: '',
    username: 'hingchou',
    title: '发起人',
    desc: '设计&产品',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/hingchou' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/nightowlhc' },
    ],
    nameAliases: ['Arnold Xiao', '逸云'],
    emailAliases: ['nightowlhc@gmail.com'],
  },
  {
    name: 'AI Inception',
    avatar: '',
    username: 'gpt-open',
    title: '发起人',
    desc: 'Delving into the Mechanics and Applications of AI, Foreseeing Its Profound Impact on the World of Tomorrow.',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/gpt-open' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/blmdxiao' },
    ],
    nameAliases: ['AI Inception'],
    emailAliases: ['blmdxiao@gmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
