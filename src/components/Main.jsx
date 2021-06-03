import {
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import MemeList from './MemeList';

const  Main = () => {
  const memes = useSelector((state) => state.memes);

  const hot = memes.filter(({upvotes, downvotes}) => upvotes - downvotes > 5);
  const regular = memes.filter(({upvotes, downvotes}) => upvotes - downvotes <= 5);

  return (
    <>
      <Switch>
        <Route path="/hot">
          <MemeList memes={hot} type="hot"/>
        </Route>
        <Route path="/regular">
          <MemeList memes={regular} type="regular"/>
        </Route>
      </Switch>
    </>
  );
}

export default Main;
