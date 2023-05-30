import { ReactNode, useEffect, useRef } from "react";
import { StyledModal } from "./styles";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  toggleModal: () => void;
};

export const Modal = ({ children, toggleModal }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <StyledModal>
      <div ref={ref}>
        <button onClick={toggleModal}>
          <MdClose />
        </button>
        {children}
      </div>
    </StyledModal>,
    document.body
  );
};
