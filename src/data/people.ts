export type Person = {
  id: string
  name: string
  age: number
  distance: string
  clipUrl: string
  posterUrl: string
  prompt: string
  verified: true
  isSynthetic: boolean
}

const basePromptPool = [
  'my worst travel story',
  'the moment I knew I had to move here',
  'a hill I will die on',
  'my oddly specific green flag',
  'my most chaotic dinner party story',
]

const names = [
  'Ava','Mila','Chloe','Nora','Sofia','Lena','Zoe','Ivy','Ruby','Clara',
  'Jules','Maya','Tessa','Naomi','Skye','Elise','Freya','Gia','Rina','Pia',
  'Sage','Aria','Nina','Lucy','Cleo','Dahlia','Remi','Willa','June','Brynn',
  'Kira','Hazel','Ari','Lia','Esme','Maren','Rowan','Selah','Talia','Vera'
]

export const people: Person[] = names.map((name, index) => ({
  id: `person-${index + 1}`,
  name,
  age: 24 + (index % 11),
  distance: `${1 + (index % 9)} mi away`,
  clipUrl: `/clips/clip-${(index % 8) + 1}.mp4`,
  posterUrl: `/posters/poster-${(index % 8) + 1}.jpg`,
  prompt: basePromptPool[index % basePromptPool.length],
  verified: true,
  isSynthetic: true,
}))

export const demoUserClips = [
  {
    id: 'self-1',
    title: 'Rooftop intro',
    posterUrl: '/posters/self-1.jpg',
    clipUrl: '/clips/self-1.mp4',
    seededPickRate: 72,
  },
  {
    id: 'self-2',
    title: 'Coffee walk',
    posterUrl: '/posters/self-2.jpg',
    clipUrl: '/clips/self-2.mp4',
    seededPickRate: 43,
  },
] as const
