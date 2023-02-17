import './Layout.scss';
import Navigation from '../Navigation/Navigation';
import Event from '../Event/Event';

function Layout() {
  return (
    <div className="app-layout">
        <Navigation />
        <Event />
    </div>
  );
}

export default Layout;
