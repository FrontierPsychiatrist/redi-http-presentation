import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Presentation } from './Presentation.jsx'
import './index.css'
import 'reveal.js/reveal.css';
import 'reveal.js/theme/moon.css';
import 'reveal.js/plugin/highlight/monokai.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Presentation />
  </StrictMode>,
)
