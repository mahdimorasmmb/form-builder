import React, { useReducer, useState } from "react";
import { nanoid } from "nanoid";

import dataReduser from "../hooks/dataReduser";

export default function FormBuilder({ filds, submit }) {
  const [state, dispatch] = useReducer(dataReduser, "");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state);
        }}
      >
        {filds.map((item) => (
          <div key={item.id}>
            <label id={item.id}>{item.label}</label>
            <input
              value={state[item.name]}
              onChange={(e) => {
                if (item.type === "checkbox") {
                  dispatch({
                    type: "add",
                    paylod: {
                      [e.target.name]: e.target.checked,
                    },
                  });
                } else {
                  dispatch({
                    type: "add",
                    paylod: {
                      [e.target.name]: e.target.value,
                    },
                  });
                }
                console.log(state);
              }}
              id={item.id}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              min={item.range ? item.range.min : ""}
              max={item.range ? item.range.max : ""}
              checked={item.type === "checkbox" ? state[item.name] : ""}
            />
          </div>
        ))}
        {submit && <input type="submit" value="Submit" />}
      </form>
    </div>
  );
}
