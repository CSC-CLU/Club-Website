import About from '../components/home_page/about/about';
import Missions from '../components/home_page/missions/missions';
import Board from '../components/home_page/board/board';
import ProjectCards from '../components/home_page/project_cards/project_cards';
import Contact from '../components/home_page/contact/contact';

import Landing from '../components/home_page/landing/landing';

function Home() {
  return (
    <div className="home-page">
      <Landing></Landing>
      <About></About>
      <Missions></Missions>
      <Board></Board>
      <ProjectCards></ProjectCards>
      <Contact></Contact>
    </div>
  );
}

export default Home;