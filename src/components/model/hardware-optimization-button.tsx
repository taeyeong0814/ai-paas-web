import { Button, Modal } from "innogrid-ui";
import { useState } from "react";

export const HardwareOptimizationButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <Button onClick={() => setIsOpen(true)} size="medium" color="secondary">
          하드웨어 최적화
        </Button>
      </div>
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="하드웨어 최적화"
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
        최적화 방식
      </Modal>
    </>
  );
};
