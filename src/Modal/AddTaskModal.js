import { Dialog } from "@reach/dialog";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

const Modal = (props) => {
  const {
    modal,
    setModal,
    children,
    ariaText,
    addItem,
    inputData,
    setInputData,
  } = props;
  const [description, setDescription] = useState(null);

  return (
    <>
      <Dialog
        isOpen={modal}
        onDismiss={() => setModal(false)}
        aria-label={ariaText}
      >
        <div>
          <div>
            <MdCancel
              style={{ fontSize: "30px" }}
              onClick={() => setModal(false)}
            />{" "}
          </div>
          <div>
            <form onSubmit={addItem} autoComplete="off">
              {" "}
              <div>
                <label>Add Task</label>
              </div>{" "}
              <div>
                {" "}
                <input
                  maxLength="40"
                  type="text"
                  name="addTask"
                  onChange={(e) => setInputData(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="newTaskDescription">
                  Description (optional):
                </label>
                <div>
                  <textarea
                    name="desc"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <div>
              <button disabled={!inputData} onClick={addItem}>
                Add Task
              </button>
            </div>
          </div>
        </div>
        {children}
      </Dialog>
    </>
  );
};

export default Modal;

//   // setter
// localStorage.setItem('myData', data);
// // getter
// localStorage.getItem('myData');
// // remove
// localStorage.removeItem('myData');
// // remove all
// localStorage.clear();
// console.log(items);
