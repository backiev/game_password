import { IEmote } from '@/types/emotes';

export const emotesBye: IEmote[] = [
    {
        id: '65d5cc84069e133ba784d43f',
        url: 'https://cdn.7tv.app/emote/65d5cc84069e133ba784d43f/4x.webp',
        name: 'CatTime',
    },
    {
        id: '64da286d980d72d909ed4e7b',
        url: 'https://cdn.7tv.app/emote/64da286d980d72d909ed4e7b/4x.webp',
        name: 'GG',
    },
    {
        id: '60b52e13d1ffe6b8435c1f5b',
        url: 'https://cdn.7tv.app/emote/60b52e13d1ffe6b8435c1f5b/4x.webp',
        name: 'WW',
    },
    {
        id: '64c16bb54d878cbce39c9cec',
        url: 'https://cdn.7tv.app/emote/64c16bb54d878cbce39c9cec/4x.webp',
        name: 'lixEZ',
    },
    {
        id: '60a1babb3c3362f9a4b8b33a',
        url: 'https://cdn.7tv.app/emote/60a1babb3c3362f9a4b8b33a/4x.webp',
        name: 'catKISS',
    },
]
export const randomEmote = emotesBye[Math.floor(Math.random() * emotesBye.length)]
