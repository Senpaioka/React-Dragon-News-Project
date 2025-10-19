import { Outlet } from 'react-router';
import Header from '../components/Header';
import BreakingNews from '../components/BreakingNews';
import NavBar from '../components/NavBar';
import Home from '../pages/base/Home';


function BaseLayout() {
  return (
  <>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <Outlet></Outlet>
  </>
  );
}

export default BaseLayout;