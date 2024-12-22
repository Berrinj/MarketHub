import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

/**
 * @returns the Layout component with the Header, Footer, and Outlet components
 */

function Layout() {
    return (
      <div>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    )
  }

  export default Layout;