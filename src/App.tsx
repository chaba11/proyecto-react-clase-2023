import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'minmax(150px, 25%) 1fr', height: '100vh'}}>
      <div style={{backgroundColor: 'gray'}}>
        <h1>Sidebar</h1>
        <Link to={'/pokemon/358'}>Pokemon 358</Link>
        <Link to={'/pokemon/357'}>Pokemon 357</Link>

      </div>
      <div style={{width: '100vw'}}>
        <h1>Contenido principal</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;