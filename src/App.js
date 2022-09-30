import NavBar from './components/NavBar';
import AllRoutes from './components/AllRoutes';
import { useContext } from 'react';
import { authContext } from './context/AuthContext';
import { useEffect } from 'react';
function App() {
  const { email } = useContext(authContext)
  
  return (
    <div className="App">
      {!email && <NavBar></NavBar>}
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
