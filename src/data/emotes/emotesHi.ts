import { IEmote } from '@/types/emotes';

export const emotesHi: IEmote[] = [
    {
        id: '629e393136b6f962050a94ad',
        url: 'https://cdn.7tv.app/emote/629e393136b6f962050a94ad/4x.webp',
        name: 'DoraEZ',
    },
    {
        id: '632b50cec7950e03fc6ee844',
        url: 'https://cdn.7tv.app/emote/632b50cec7950e03fc6ee844/4x.webp',
        name: ':3',
    },
    {
        id: '65b256ec32abdfe0d74ee9cb',
        url: 'https://cdn.7tv.app/emote/65b256ec32abdfe0d74ee9cb/4x.webp',
        name: 'MHMMM',
    },
    {
        id: '62d042ce3f941958df42f304',
        url: 'https://cdn.7tv.app/emote/62d042ce3f941958df42f304/4x.webp',
        name: 'jupijej',
    },
]
export const randomEmote = emotesHi[Math.floor(Math.random() * emotesHi.length)]