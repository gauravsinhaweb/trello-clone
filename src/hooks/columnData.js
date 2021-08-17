import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import uuid from "uuid/v4";
import { db } from "../firebase/firebase";
import useAuth from "./useAuth";

function ColumnData() {
  const [loginwWithGoogle, LogOut, user, boards, userID] = useAuth();

  const [boardData, setBoardData] = useState("");
  const [items, setItems] = useState();

  let { id } = useParams();

  // useEffect(() => {
  //   return db
  //     .collection(`users`)
  //     .doc(`${userID}`)
  //     .get()
  //     .then((doc) => {
  //       try {
  //         if (doc) {
  //           return db
  //             .collection(`users/${doc.id}/boards/`)
  //             .doc(id)
  //             .onSnapshot((doc) => {
  //               setBoardData(doc.data());
  //             });
  //         } else return;
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     });
  // }, [userID, id]);

  useEffect(() => {
    (async () => {
      let documents = [];

      await db
        .collection(`users/${userID}/boards/${id}/tasks`)
        .onSnapshot((snap) => {
          snap.forEach((d) => {
            documents.push({ id: d.id, ...d.data() });
          });
        });
      setItems(documents);
      // console.log(items);
    })();
  }, [userID, id]);

  const localItems = JSON.parse(localStorage.getItem("lists"));

  // const itemsFromBackend = [
  //   { id: uuid(), content: "first task" },
  //   { id: uuid(), content: "second task" },
  // ];
  // tasks && tasks.title.map((todo) => console.log([{ todo }]));
  const task = items && items.todos;
  console.log(items);

  const columnsFromBackend = {
    [uuid()]: {
      name: "Requested",
      items: items,
    },
    [uuid()]: {
      name: "To do",
      items: [],
    },
    [uuid()]: {
      name: "In Progress",
      items: [],
    },
    [uuid()]: {
      name: "Done",
      items: [],
    },
  };
  return [
    boardData,
    columnsFromBackend,
    loginwWithGoogle,
    LogOut,
    user,
    boards,
  ];
}

export default ColumnData;

// const [tasks, setTasks] = useState("");

// useEffect(() => {
//   return db
//     .collection(`users`)
//     .doc(`${userID}`)
//     .get()
//     .then((doc) => {
//       try {
//         if (doc) {
//           return db
//             .collection(`users/${doc.id}/boards/${id}/column`)
//             .onSnapshot((snapshot) =>
//               setTasks(snapshot.docs.map((doc) => doc.data()))
//             );
//         } else return;
//       } catch (e) {
//         console.log(e);
//       }
//     });
// }, [userID, id]);
// let content;
// {
//   tasks.length > 0 && tasks.map((task) => (content = task.content));
// }
// const itemsFromBackend = [{ id: uuid(), content: `${content}` }];

// console.log(itemsFromBackend);
