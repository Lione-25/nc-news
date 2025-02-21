import { createContext, useRef, useState } from "react";

export const ArticleContext = createContext(null);

export const ArticleContextProvider = ({ children }) => {
  const commentInputElement = useRef();

  const [isUnfinishedComment, setIsUnfinishedComment] = useState(false);

  const [deleteHasBeenSelected, setDeleteHasBeenSelected] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");
  const [commentHasBeenDeleted, setCommentHasBeenDeleted] = useState(false);

  return (
    <ArticleContext.Provider
      value={{
        commentInputElement,
        isUnfinishedComment,
        setIsUnfinishedComment,
        deleteHasBeenSelected,
        setDeleteHasBeenSelected,
        commentIdToDelete,
        setCommentIdToDelete,
        commentHasBeenDeleted,
        setCommentHasBeenDeleted,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
