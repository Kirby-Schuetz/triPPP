import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ErrorBoundary from "./Features/Display/ErrorBoundary";
import { GoogleMapsContextProvider } from "./context/googleMapsContext";
import { getUser, createUser } from "./api/user";
import "./App.css";
import LandingPage from "./Features/Display/LandingPage";
import ResponsiveAppBar from "./Components/AppBar/AppBar";


function App() {
  const {user, isAuthenticated, isLoading} = useAuth0();
  
  useEffect(() => {
    const fetchData = async () => {
      if (user && !isLoading) {
        let userData;
        try {
          userData = await getUser(user.sub);
        } catch (error) {
          console.error(error);
        }
        if (!userData) {
          const userObj = {
            email: user.email,
            profile_picture: user.picture,
            created: user.updated_at,
            updated: user.updated_at,
            sub: user.sub
          };

          try {
            const user = await createUser(userObj);
            console.log(user);
          } catch(error) {
            console.error(error);
          }
        }
      }
    }
    fetchData();
   
  }, [user, isLoading])

  return (
    <>
      <ErrorBoundary>
        <GoogleMapsContextProvider>
          <ResponsiveAppBar />
          <Routes>
            {/* Unprotected Routes */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </GoogleMapsContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
