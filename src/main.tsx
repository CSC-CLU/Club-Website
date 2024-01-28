import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './index'

import './index.scss'
import './pages/project.scss'
import './components/nav_bar.scss'
import './components/home_page/landing/landing.scss'
import './components/home_page/about/about.scss'
import './components/home_page/missions/missions.scss'
import './components/home_page/board/board.scss'
import './components/home_page/project_cards/project_cards.scss'
import './components/home_page/contact/contact.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)