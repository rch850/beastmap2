import { circle, Map, map, tileLayer } from 'leaflet';
import { sample, sampleSize } from 'lodash';
import chojuData from '../data/h24shichobetsu'
import IMAGES from '../data/chouju_images'

const fukuiCenter: [number, number] = [35.85, 136.25]

export type CandidateState = 'empty' | 'correct' | 'wrong'

export const INITIAL_GAME_STATE: GameState = {
  candidates: [],
  userAnswer: '',
  correctAnswer: ''
}

export type Candidate = {
  name: string
  imageUrl: string
  state: CandidateState
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
  putAnimalCircles(map, correctAnswer)

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
      imageUrl: IMAGES.chouju.find(c => c.鳥獣名 === v.鳥獣名)?.画像 ?? '',
      state: 'empty'
    }
  })
}

export function nextGame(state: GameState): GameState {
  state.map?.remove()
  const map = initMap()
  const userAnswer = ''
  const candidates = chooseCandidates()
  const correctAnswer = sample(candidates)?.name ?? ''
  putAnimalCircles(map, correctAnswer)

  return { candidates, correctAnswer, userAnswer, map }
}

/**
 * @param map 描画先のマップ
 * @param animalName 鳥獣名
 * @returns
 */
function putAnimalCircles(map: Map, animalName: string): void {
  const data = chojuData.chouju.find(c => c.鳥獣名 === animalName)
  if (!data) return

  const CITIES = [
    [36.05475, 136.22266, '福井市'],
    [36.08513, 136.2979, '永平寺町'],
    [36.21653, 136.23644, 'あわら市'],
    [36.17164, 136.22752, '坂井市'],
    [35.97962, 136.49737, '大野市'],
    [36.05654, 136.51385, '勝山市'],
    [35.94989, 136.19524, '鯖江市'],
    [35.88149, 136.35935, '池田町'],
    [35.90068, 136.15885, '越前市'],
    [35.82333, 136.21069, '南越前町'],
    [35.97045, 136.1331, '越前町'],
    [35.63353, 136.08469, '敦賀市'],
    [35.59529, 135.96281, '美浜町'],
    [35.53497, 135.91132, '若狭町'],
    [35.48494, 135.75545, '小浜市'],
    [35.48578, 135.55083, '高浜町'],
    [35.47824, 135.61606, 'おおい町'],
  ] as const

  CITIES.map(([lat, lng, city]) => circle([lat, lng], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: Math.sqrt(Number(data[`${city}（合計）`] ?? 0)) * 1000
    })
  ).reduce((map, circle) => {
    circle.addTo(map)
    return map
  }, map)
}
