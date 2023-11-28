
import React from 'react';
import { Routes, Route, useNavigate, useLocation,nav ,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Login/RegsiterPage';
// import { isAuthenticated } from './Context/Auth';
import { isAuthenticated } from './Login/Auth';
import Shop from './Context/Shop';
import Cart from './Context/Cart';
import ShopContextProvider from './Context/ShopContext';
import Apps from './Apps';
import ReduxForm from './ReduxForm';
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = isAuthenticated();
  const isLoginPage = location.pathname === '/';
  const isRegisterPage = location.pathname === '/register';

  const protectedRoutes = ['/home', '/cart', '/shop', '/feedback'];
  const isProtectedRoute = protectedRoutes.includes(location.pathname);
  React.useEffect(() => {
    if (!isLoggedIn && isProtectedRoute) {
      navigate('/');
    }
  }, [isLoggedIn, isProtectedRoute, navigate]);


  return (
    <div>
      <ShopContextProvider>
        <Routes>
        {isLoggedIn && (
            <>
              <Route path="/home" element={<Apps />} />
               <Route path="/cart" element={<Cart/>} />
               <Route path="/shop" element={<Shop/>} />
            </>
          )}
              
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/feedback" element={<ReduxForm/>}/>
        </Routes>
      </ShopContextProvider>

    </div>
  );
}

export default App;
