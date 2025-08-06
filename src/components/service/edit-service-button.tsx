import { Button, Input, Modal, Textarea } from "innogrid-ui";
import { useState } from "react";
import styles from "../../pages/service/service.module.scss";

export const EditServiceButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" color="secondary">
        편집
      </Button>
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="서비스 편집"
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
        <div className={styles.modalBox}>
          <div className={styles.inputBox}>
            <span>이름</span>
            <Input
              placeholder="이름을 입력해주세요."
              value={"테스트 타이틀"}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
          <div className={styles.inputBox}>
            <span>설명</span>
            <Textarea value={"테스트 설명 내용 들어가요."} />
            <div className={styles.textareaDesc}>설명 메시지</div>
          </div>
          <div className={styles.inputBox}>
            <span>태그</span>
            <Input
              placeholder="태그 내용을 입력해주세요."
              size={{ width: "100%", height: "32px" }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
