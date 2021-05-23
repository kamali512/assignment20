import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MediaCard from "../pages/landingPage/products/products"
import Categories from "../pages/categories/categories";
import Features from "../pages/features/features"
import Blog from "../pages/blog/blog"

function Routing(){
    return (
     <Router>
        <Switch>
          <Route exact path="/">
            <MediaCard />
            </Route>
          <Route  path="/categories">
            <Categories />
              </Route>
          <Route  path="/features">
            <Features />
            </Route>
          <Route path="/blog">
            <Blog/>
            </Route>

        </Switch>
       
</Router>
    )
}
export default Routing;
