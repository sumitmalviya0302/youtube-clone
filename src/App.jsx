import Body from './components/Body'
import Header from "./components/Header"
import { Provider } from "react-redux"
import store from "./utils/store"
import {  createBrowserRouter } from "react-router-dom"
import WatchPage from "./components/WatchPage"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <Provider store={store} >
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />,
      },
      {
        path:"/watch/:id",
        element:<WatchPage />,
      }
    ]
  },
  
])

export default AppRouter
