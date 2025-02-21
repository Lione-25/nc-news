import { createContext, useState } from "react";

export const UserAccount = createContext(null);

export const UserAccountProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [savedCommentInput, setSavedCommentInput] = useState("");
  return (
    <UserAccount.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        savedCommentInput,
        setSavedCommentInput,
      }}
    >
      {children}
    </UserAccount.Provider>
  );
};
