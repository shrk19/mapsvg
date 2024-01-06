import './App.css'
import Map from './components/Map'
import Bar from './components/Bar'

function App() {
  return (
    <>
    <h1 className='font-bold text-4xl text-center py-2 '>Data Usage Map</h1>
    <div>
      <Map/>
      <Bar/>
    </div>
    <p className='text-sm text-center text-gray-400'>Made by Shreya Kumari</p>
    </>
  )
}

export default App
