import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../components/Footer";

const Layout: React.FC = ({isAuthenticated,setIsAuthenticated}) => {
  return (
    <>
      <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
