const initialState = {
  code: "",
  output: "",
};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changed": {
      return { ...state, code: action.payload };
    }
    case "running": {
      return { ...state, output: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default codeReducer;
