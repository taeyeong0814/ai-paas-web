import { Button, Modal } from "innogrid-ui";
import { useState } from "react";

export const ModelCompressionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" color="secondary">
        모델 경량화
      </Button>
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="모델 경량화"
        size="small"
        onRequestClose={() => setIsOpen(false)}
        action={() => alert("확인!")}
        buttonTitle="확인"
        subButton={
          <Button size="large" color="secondary" onClick={() => alert("취소!")}>
            취소
          </Button>
        }
      >
        경량화 방식
      </Modal>
    </>
  );
};
