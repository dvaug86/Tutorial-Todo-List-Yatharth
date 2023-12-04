import React from "react";

const Card = ({ taskObj, index }) => {
  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        // style={{ "background-color": colors[index % 5].primaryColor }}
        style={{ "background-color": "chartreuse" }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            // "background-color": colors[index % 5].secondaryColor,
            "background-color": "F2FAF1",
            "border-radius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit mr-3"
            // style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            style={{ color: "#5DC250", cursor: "pointer" }}
            // onClick={() => setModal(true)}
          ></i>
          <i
            class="fas fa-trash-alt"
            // style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            style={{ color: "#5DC250", cursor: "pointer" }}
            // onClick={handleDelete}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
