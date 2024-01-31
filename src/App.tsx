import { routesConfig } from './router/routesConfig'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <RouterProvider router={routesConfig} />
  )
}

export default App
