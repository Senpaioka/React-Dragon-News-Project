import Header from "../components/Header";
import { Outlet } from "react-router";


function DetailLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default DetailLayout;