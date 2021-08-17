import { Dialog } from "@reach/dialog";
import React from "react";
import { MdCancel } from "react-icons/md";
import { Button } from "../styles/BoardStyle";

function ItemModal(props) {
  const {
    itemModal,
    setItemModal,
    children,
    ariaText,
    editItem,
    deleteItem,
    setInputData,
    taskValue,
  } = props;
  return (
    <>
      <Dialog
        isOpen={itemModal}
        onDismiss={() => setItemModal(false)}
        aria-label={ariaText}
      >
        <div>
          <div>
            <MdCancel
              style={{ fontSize: "30px" }}
              onClick={() => setItemModal(false)}
            />{" "}
          </div>
          <div>
            <form onSubmit={editItem} autoComplete="off">
              {" "}
              <div>
                <label>Title:</label>
              </div>{" "}
              <div>
                <input
                  placeholder={taskValue && taskValue.name}
                  maxLength="40"
                  type="text"
                  name="addTask"
                  onChange={(e) => setInputData(e.target.value)}
                  required
                />
              </div>
              <Button onClick={deleteItem} style={{ width: "80px" }}>
                Delete Task
              </Button>
            </form>
          </div>
        </div>
        {children}
      </Dialog>{" "}
    </>
  );
}

export default ItemModal;
