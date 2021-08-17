import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Board from "./pages/Board";
import BoardItems from "./pages/BoardItems";
import Login from "./pages/Login";
function App() {
  const [loginwWithGoogle, LogOut, user, boards, userID] = useAuth();
  return (
    <>
      <Router>
        <Switch>
          {" "}
          <Route exact path="/">
            {user && user.displayName ? <Redirect to="/board" /> : <Login />}
          </Route>
          <Route exact path="/board">
            <Board
              userID={user && user.uid}
              LogOut={LogOut}
              loginwWithGoogle={loginwWithGoogle}
              user={user}
              boards={boards}
            />
          </Route>
          <Route exact path="/board/:id">
            <BoardItems userID={userID} LogOut={LogOut} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
