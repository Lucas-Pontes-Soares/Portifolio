import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {Rotas} from "./Routes.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <Rotas />
  </BrowserRouter>,
)
