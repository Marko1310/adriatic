import { forwardRef } from 'react';

type Props = {
  children: React.ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, Props>(({ children }, ref) => {
  return (
    <dialog
      className="text-text bg-foreground relative max-w-max rounded-md pt-6 backdrop:bg-black/20 backdrop:backdrop-blur-sm"
      ref={ref}
    >
      {children}
    </dialog>
  );
});

export default Modal;
