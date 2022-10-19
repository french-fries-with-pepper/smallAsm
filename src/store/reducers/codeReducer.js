const initialState = {
  code: "",
  result: {
    output: "",
    exitCode: 0,
    debug: "",
  },
  isDebugEnabled: false,
};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changed": {
      return { ...state, code: action.payload };
    }
    case "running": {
      return { ...state, result: action.payload };
    }
    case "toggleDebug": {
      return { ...state, isDebugEnabled: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default codeReducer;
