import { Button, Input, Modal, Textarea } from "innogrid-ui";
import { useState } from "react";
import styles from "../../../pages/service/service.module.scss";

export const CreateServiceButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [text, setText] = useState<string>("");
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" color="primary">
        생성
      </Button>
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="서비스 생성"
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
              value={value}
              onChange={onChange}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
          <div className={styles.inputBox}>
            <span>설명</span>
            <Textarea
              placeholder="설명을 입력해주세요."
              value={text}
              onChange={onTextChange}
            />
            <div className={styles.textareaDesc}>설명 메시지</div>
          </div>
          <div className={styles.inputBox}>
            <span>태그</span>
            <Input
              placeholder="태그 내용을 입력해주세요."
              value={value}
              onChange={onChange}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
