import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "../styles/CardStyle";

function BoardCard(props) {
  const history = useHistory();
  const { boardName, deleteBoard, boardID } = props;
  return (
    <>
      <Card onClick={() => history.push(`/board/${boardID}`)}>
        <CardBody>
          <div>
            {boardName}
            <div>
              <button onClick={deleteBoard}>Delete</button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default BoardCard;
