// Create a child modal component
import { createPortal } from 'react-dom';

export interface ModalComponentProps {
  visible: boolean;
  children: any;
}

function ModalComponent({ visible, children }: ModalComponentProps) {
  if (!visible) return null;

  return createPortal(<>{children}</>, (document as any).getElementById('modal-root'));
}

export default ModalComponent;
