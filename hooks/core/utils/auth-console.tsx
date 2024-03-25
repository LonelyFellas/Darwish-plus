import React from "react";
export const AuthConsoleContext = React.createContext({ isAuth: false });

export const AuthConsoleProvider = (
  props: React.PropsWithChildren<{ isAuth: boolean }>
) => {
  const { children, isAuth } = props;

  return (
    <AuthConsoleContext.Provider value={{ isAuth }}>
      {children}
    </AuthConsoleContext.Provider>
  );
};

export const useAuthLog = () => {
  const { isAuth } = React.useContext(AuthConsoleContext);
  return isAuth;
};
