export default function formR(state, action) {
  switch (action.type) {
    case "sumbit":
      return {
        ...state,
        ...action.paylod,
      };
  }
}
