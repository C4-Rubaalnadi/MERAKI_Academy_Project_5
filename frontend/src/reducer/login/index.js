const initialState = {
  token: "" || localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("token") ? true : false,
  // userInfo : {}
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return {
        token: payload,
        isLoggedIn: true,
      };
    case "LOG_OUT":
      return {
        token: "",
        isLoggedIn: false,
      };
      // case "USER_INFO":
      //   return {...state,
      //     userInfo :payload
      //   };

    default:
      return state;
  }
};

export default loginReducer;

export const login = (token) => {
  return { type: "LOG_IN", payload: token };
};
// export const userInfo = (usreInformation) => {
//   return { type: "USER_INFO", payload: usreInformation };
// };
export const logout = () => {
  return { type: "LOG_OUT" };
};
