import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  openModal: { login: boolean; signUp: boolean };
  handleOpenModal: (key: "login" | "signUp", value: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: {
    login: false,
    signUp: false,
  },
  handleOpenModal: () => {},
});

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState({
    login: false,
    signUp: false,
  });

  const handleOpenModal = (key: string, value: boolean) => {
    setOpenModal((preVal) => {
      return {
        ...preVal,
        [key]: value,
      };
    });
  };

  return (
    <ModalContext.Provider value={{ openModal, handleOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;
