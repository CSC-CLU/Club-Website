import Navigation_Bar from './nav_bar';
import Club_Header from './components/home_page/header';
import Content from './components/home_page/content';

function App() {
  return <div className="page-wrapper">
      <Navigation_Bar></Navigation_Bar>
      <Club_Header></Club_Header>
      <Content></Content>
    </div>
}

export default App;