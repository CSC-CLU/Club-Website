import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './index'

import './index.scss'
import './pages/project.scss'
import './components/nav_bar.scss'
import './components/home_page/landing_section/landing.scss'
import './components/home_page/about_section/about.scss'
import './components/home_page/board_section/board.scss'
import './components/home_page/project_cards/project_cards.scss'
import './components/home_page/contact_section/contact.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)