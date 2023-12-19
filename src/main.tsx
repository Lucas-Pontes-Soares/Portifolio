import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router-dom';
import {SobreMim} from "./pages/SobreMim.tsx";

import {Rotas} from "./Routes.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={window.location.pathname || ''}>
  <Route path="/" element={<SobreMim />} />
</BrowserRouter>,
)
