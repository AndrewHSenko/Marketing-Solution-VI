import { Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './LandingPage.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Outlet />
        }>
        <Route index element={<LandingPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
