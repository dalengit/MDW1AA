import { Route, Switch } from 'react-router-dom';
// Import pages 
import AllTravelBlogs from './pages/AllTravelBlogs';
import BucketList from './pages/BucketList';
import NewTravelBlog from './pages/NewTravelBlog';

// Import Layout
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
