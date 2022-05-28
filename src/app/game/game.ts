import { Map, map, tileLayer } from 'leaflet';
import { sample, sampleSize } from 'lodash';
import chojuData from '../data/h24shichobetsu'
import IMAGES from '../data/chouju_images'

const fukuiCenter: [number, number] = [35.85, 136.25]

export const INITIAL_GAME_STATE: GameState = {
  candidates: [],
  userAnswer: '',
  correctAnswer: ''
}

type Candidate = {
  name: string
  imageUrl: string
}

export type GameState = {
  candidates: Candidate[]
  userAnswer: string
  correctAnswer: string
  map?: Map
}

export function initGameState(): GameState {
  const myMap = map('map').setView(fukuiCenter, 10)
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    attribution: '© OpenStreetMap'
  }).addTo(myMap);

  const candidates = sampleSize(chojuData.chouju, 4).map(v => {
    return {
      name: v.鳥獣名,
      imageUrl: IMAGES.chouju.find(c => c.鳥獣名 === v.鳥獣名)?.画像 ?? ''
    }
  })
  const correctAnswer = sample(candidates)?.name ?? ''

  return { candidates, correctAnswer, userAnswer: '', map: myMap }
}
