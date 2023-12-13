import { ReactNode } from "react";
import "./Lightbox.css";

interface LightBoxProps {
  children: ReactNode;
  onClose: () => void;
  isLightboxVisible: boolean;
}

function LightBox({ children, onClose, isLightboxVisible }: LightBoxProps) {
  return (
    <div
      className={
        isLightboxVisible ? "lightbox-wrapper " : "lightbox-wrapper hidden"
      }
    >
      <div className="lightbox-container">
        <div className="lightbox-infobar">
          <h3>Add New Item</h3>
          <button className="lightbox-close" onClick={onClose}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default LightBox;
