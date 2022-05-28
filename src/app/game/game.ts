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

/**
 * @returns 初期化されたゲームの状態
 */
export function initGameState(): GameState {
  const map = initMap()
  const userAnswer = ''
  const candidates = chooseCandidates()
  const correctAnswer = sample(candidates)?.name ?? ''

  return { candidates, correctAnswer, userAnswer, map }
}

/**
 * @returns 初期化されたマップ
 */
function initMap(): Map {
  const myMap = map('map').setView(fukuiCenter, 10)
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    attribution: '© OpenStreetMap'
  }).addTo(myMap);
  return myMap
}

/**
 * @returns ランダムに選んだ選択肢
 */
export function chooseCandidates(): Candidate[] {
  return sampleSize(chojuData.chouju, 4).map(v => {
    return {
      name: v.鳥獣名,
      imageUrl: IMAGES.chouju.find(c => c.鳥獣名 === v.鳥獣名)?.画像 ?? ''
    }
  })
}
