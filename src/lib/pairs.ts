import { Person } from '../data/people'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generatePairs(people: Person[]): [Person, Person][] {
  const byPrompt: Record<string, Person[]> = {}
  for (const p of people) {
    if (!byPrompt[p.prompt]) byPrompt[p.prompt] = []
    byPrompt[p.prompt].push(p)
  }
  const allPairs: [Person, Person][] = []
  for (const group of Object.values(byPrompt)) {
    const pairs: [Person, Person][] = []
    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        pairs.push([group[i], group[j]])
      }
    }
    allPairs.push(...shuffle(pairs))
  }
  return allPairs
}
