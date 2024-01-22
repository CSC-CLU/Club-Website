import About from '../components/home_page/about_section/about';
import Board from '../components/home_page/board_section/board';
import Project_Cards from '../components/home_page/project_cards/project_cards';
import Contact from '../components/home_page/contact_section/contact';

import Landing from '../components/home_page/landing_section/landing';

function Home() {
  return (
    <div className="home-page">
      <Landing></Landing>
      <About></About>
      <Board></Board>
      <Project_Cards></Project_Cards>
      <Contact></Contact>
    </div>
  );
}

export default Home;