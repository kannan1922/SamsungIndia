// Apps.js
import React from 'react';
import { Routes, Route, useNavigate, useLocation,nav ,Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import TabSwitch from './components/TabSwitch';
import RouteSwitch from './components/RouteSwitch';
import TabSwitch2 from './components/TabSwitch2';
import TabSwitch3 from './components/TabSwitch3';
import TabSwitch4 from './components/TabSwitch4';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import Hovertab from './components/Hovertab';
import Footer from './components/Footer';
import LoginPage from './LoginPage';
import RegisterPage from './RegsiterPage';
import { isAuthenticated } from './Auth';
import AddPostForm from './posts/AddPostForm';
import PostsList from './posts/Postlist';
import Shop from './Shop';
import Cart from './Cart';
import ShopContextProvider from './ShopContext';
import Navbar1 from './Navbar1';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = isAuthenticated();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const protectedRoutes = ['/image1', '/image2', '/image3', '/image4'];
  const isProtectedRoute = protectedRoutes.includes(location.pathname);
  React.useEffect(() => {
    if (!isLoggedIn && isProtectedRoute) {
      navigate('/login');
    }
  }, [isLoggedIn, isProtectedRoute, navigate]);

  const renderRouteSwitch = !isLoginPage && !isRegisterPage && isLoggedIn && <RouteSwitch />;

  return (
    <div>
<Navbar/>
<Slider/>
      <ShopContextProvider>
        <Navbar1 />
        <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
        <Routes>
          {isLoggedIn && (
            <>
              <Route path="/image1" element={<TabSwitch />} />
              <Route path="/image2" element={<TabSwitch2 />} />
              <Route path="/image3" element={<TabSwitch3 />} />
              <Route path="/image4" element={<TabSwitch4 />} />
            </>
          )}
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ShopContextProvider>
      <div className="dd">
        <AddPostForm />
        <PostsList />
      </div>
      {/* <LoginPage /> */}
      <Hovertab />
      <Footer />
    </div>
  );
}

export default App;
