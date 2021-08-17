import firebase from "firebase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BoardCard from "../components/BoardCard";
import { db } from "../firebase/firebase";
import { BoardBody } from "../styles/BoardStyle";

function Board(props) {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const { LogOut, userID, user, boards } = props;
  const LogoutHandler = async () => {
    await LogOut();
    history.push("/");
  };
  const AddBoardHandler = (e) => {
    e.preventDefault();
    db.collection(`users/${userID}/boards`).add({
      name: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
  };
  return (
    <>
      <div style={{ textAlign: "right" }}>
        {" "}
        <button onClick={LogoutHandler}> LogOut</button>
      </div>
      <h1>
        Your Boards {user && user.displayName}{" "}
        <span style={{ height: "50px", width: "50px", borderRadius: "10px" }}>
          <img
            src={user && user.photoURL}
            alt={user && user.displayName}
            height="50px"
            width="50px"
          />
        </span>
      </h1>

      <BoardBody>
        {boards &&
          boards.map((board, inx) => {
            const deleteBoard = async (e) => {
              e.preventDefault();
              await db
                .collection(`users/${userID}/boards`)
                .doc(board.id)
                .delete();
            };
            return (
              <BoardCard
                boardName={board.name}
                key={inx}
                deleteBoard={deleteBoard}
                boardID={board.id}
              />
            );
          })}
      </BoardBody>
      <form onSubmit={AddBoardHandler}>
        <h2>Make a new Board</h2>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" disabled={!inputValue}>
          Add
        </button>
      </form>
    </>
  );
}

export default Board;
