import { Route } from 'react-router-dom';
// Import pages 
import AllTravelBlogs from './pages/AllTravelBlogs';
import BucketList from './pages/BucketList';
import NewTravelBlog from './pages/NewTravelBlog';

const App = () => {
  return (
    <div>
      <Route>
        <AllTravelBlogs />
      </Route>

      <Route>
        <NewTravelBlog />
      </Route>

      <Route>
        <BucketList />
      </Route>
    </div>
  );
}

export default App;
