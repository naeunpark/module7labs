import './App.css'
import  React  from 'react'
import { Emoji } from './Emoji';

const moods = [
  {
    mood: 'happy',
    emoji: '😀'
  }, 
  {
    mood: 'sad',
    emoji: '😭'
  }, 
  {
    mood: 'surprise',
    emoji:'😝'
  },
  {
    mood: 'fear',
    emoji:'😖'
  },
  {
    mood: 'love',
    emoji:'🥰'
  },
  {
    mood: 'wonder',
    emoji:'🤔'
  }];

export const MoodContext = React.createContext(moods);

function App() {

  return (
    <>
      <MoodContext.Provider value={moods}>
        <Emoji></Emoji>
      </MoodContext.Provider>
    </>
  )
}

export default App