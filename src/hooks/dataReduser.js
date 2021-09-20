import ActionButton from "antd/lib/modal/ActionButton";

export default function dataReduser(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        ...action.paylod,
      };
  }
}
