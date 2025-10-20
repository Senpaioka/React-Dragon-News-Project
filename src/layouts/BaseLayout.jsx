import { Outlet, useLoaderData } from 'react-router';
import Header from '../components/Header';
import BreakingNews from '../components/BreakingNews';
import NavBar from '../components/NavBar';


function BaseLayout() {

  const { news } = useLoaderData();

  return (
  <>
      <Header></Header>
      <BreakingNews news={news}></BreakingNews>
      <NavBar></NavBar>
      <Outlet></Outlet>
  </>
  );
}

export default BaseLayout;