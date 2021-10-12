import { Route, Switch } from 'react-router-dom';
// Import pages 
import AllTravelBlogs from './pages/AllTravelBlogs';
import BucketList from './pages/BucketList';
import NewTravelBlog from './pages/NewTravelBlog';
import MainNavigation from './components/layout/MainNavigation';

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route route path="/" exact>
          <AllTravelBlogs />
        </Route>

        <Route route path="/new-travel-blog">
          <NewTravelBlog />
        </Route>

        <Route>
          <BucketList route path="/bucket-list"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
