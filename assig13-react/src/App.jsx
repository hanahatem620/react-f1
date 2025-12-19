
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import NavBar from './Component/NavBar/NavBar.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Layout from './Component/Layout/Layout.jsx'
import About from './Component/About/About.jsx'
import Portfolio from './Component/Portfolio/Portfolio.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Home  from './Component/Home/Home.jsx'



function App() {

  let routes = createBrowserRouter([
    {path:"", element:<Layout></Layout>, children:[
      {index:true, element:<Home></Home>},
      {path:"Home", element:<Home></Home>},
      {path:"About", element: <About></About>},
      {path:"Portfolio", element: <Portfolio></Portfolio>},
      {path: "Contact", element:<Contact></Contact>}
    ]}
  ])

  return (
    <>

  <RouterProvider router={routes}></RouterProvider>


    </>
  )
}

export default App
