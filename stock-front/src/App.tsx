
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import Navbar from './components/navbar'
import Header from './components/header'

function App() {
  return (
    <div className='flex flex-row w-full bg-gray-300'>
      <Navbar></Navbar>
      <div className='flex flex-col w-full'>
        <Header></Header>
        <RouterProvider router={routes}/>
      </div>
    </div>
  )
}

export default App
