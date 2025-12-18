import {createRoot} from "react-dom/client"
import App from "./App"
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"


createRoot(document.getElementById("root")).render(<App/>)
