import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import Column from "../components/Column";
import ColumnData from "../hooks/columnData";
import AddTaskModal from "../Modal/AddTaskModal";
import ItemModal from "../Modal/ItemModal";
import { Button, Nav } from "../styles/BoardStyle";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  // console.log(list);
  if (list) {
    // console.log(JSON.parse(localStorage.getItem("lists")));
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function BoardItems(props) {
  const [boardData] = ColumnData();

  const { LogOut } = props;
  const history = useHistory();

  const LogoutHandler = async () => {
    await LogOut();
    history.push("/");
  };
  const [modal, setModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);

  const [inputData, setInputData] = useState("");

  const [items, setItems] = useState(getLocalItems());

  const [toogleSubmit, setToggleSubmit] = useState(true);

  const [isEditItem, setIsEditItem] = useState(null);
  const [taskValue, setTaskValue] = useState(null);

  const keyHandler = (e) => {
    console.log("pressed");
  };

  const addItem = () => {
    if (!inputData) {
      alert("plz fill the data");
    } else if (inputData && !toogleSubmit) {
      // alert('I am clicked ');

      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            console.log("I am matched ");
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );

      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = () => {
    const id = taskValue && taskValue.id;
    console.log("deleted", id);

    const updatedItems = items.filter((elem) => {
      return elem.id !== id;
    });

    setItems(updatedItems);
    setItemModal(false);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem.name);

    setToggleSubmit(false);

    setInputData(newEditItem.name);
    console.log("my new input name is" + inputData);
    setIsEditItem(id);
  };

  // remove all the data
  // const remvoveAll = () => {
  //   setItems([]);
  // };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div onKeyPress={keyHandler}>
        <Nav>
          {" "}
          <div>
            <h2>Boards/ {boardData && boardData.name}</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {" "}
            <span>
              {" "}
              <Button onClick={LogoutHandler}>LogOut</Button>
            </span>
            <span>
              <Button onClick={() => setModal(true)}>
                <IoMdAddCircle style={{ fontSize: "22px" }} />
                <AddTaskModal
                  modal={modal}
                  setModal={setModal}
                  ariaText={"Add a New Task"}
                  addItem={addItem}
                  inputData={inputData}
                  setInputData={setInputData}
                />
              </Button>
            </span>
          </div>
        </Nav>
        <ItemModal
          itemModal={itemModal}
          setItemModal={setItemModal}
          ariaText={"Item Modal"}
          editItem={editItem}
          deleteItem={deleteItem}
          setInputData={setInputData}
          taskValue={taskValue}
        />
        <Column
          itemModal={itemModal}
          setItemModal={setItemModal}
          setTaskValue={setTaskValue}
        />
      </div>
    </>
  );
}

export default BoardItems;
