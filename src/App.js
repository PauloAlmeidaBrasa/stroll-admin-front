import logo from './logo.svg';
import './App.css';
import MarketingPage from './marketing-page/MarketingPage';
import SignIn from './sign-in/SignIn'

function App() {


  const userCookie = getCookie('yourCookieName');

  return (
    <div className="App">
      
       {/* Conditionally render SignIn or MarketingPage based on the presence of the cookie */}
       {userCookie ? <MarketingPage /> : <SignIn />}


      {/* <MarketingPage></MarketingPage> */}
    </div>
  );
}

// Utility function to get a cookie by name
const getCookie = (cookieName) => {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
};

export default App;
