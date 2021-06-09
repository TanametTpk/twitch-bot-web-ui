import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FeedPage from './pages/Feed';
import BossPage from './pages/Boss';

function App() {
  return (
    <Router>
      <Route path="/feed" component={FeedPage} />
      <Route path="/boss" component={BossPage} />
    </Router>
  );
}

export default App;
