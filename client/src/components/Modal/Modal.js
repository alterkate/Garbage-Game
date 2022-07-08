import React from 'react';
import styles from './Modal.module.css';

function Modal({
  isVisible = false, title, content, footer, onClose,
}) {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });
  return (
    !isVisible ? null : (
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal_header}>
            <h3 className={styles.modal_title}>{title}</h3>
            <span className={styles.modal_close} onClick={onClose}>
              &times;
            </span>
          </div>
          <div className={styles.modal_body}>
            <div className={styles.modal_content}>{content}</div>
          </div>
          {footer && (
          <div className={styles.modal_footer}>
            {footer}
          </div>
          )}
        </div>
      </div>
    )
  );
}

export default Modal;
