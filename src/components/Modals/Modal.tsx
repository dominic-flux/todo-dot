import type { FC, ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  handleClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ handleClose, children }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center bg-[#19191E]">
      <span onClick={handleClose}>
        <MdClose className="fixed right-10 top-10 size-12 cursor-pointer text-[#8C8CCF] transition-all duration-300 ease-in-out hover:scale-125" />
      </span>

      {children}
    </div>
  );
};

export default Modal;
