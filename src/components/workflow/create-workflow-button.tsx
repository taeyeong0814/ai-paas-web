import { Button, Modal, SelectButton, SelectButtonItem } from "innogrid-ui";
import { useState } from "react";
import styles from "../../pages/service/service.module.scss";
import { useNavigate } from "react-router";

export const CreateWorkflowButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <SelectButton title="생성" color="focus">
        <SelectButtonItem
          onClick={() => {
            navigate("/workflow/create");
          }}
        >
          직접 생성
        </SelectButtonItem>
        <SelectButtonItem onClick={() => setIsOpen(true)}>
          템플릿에서 시작
        </SelectButtonItem>
      </SelectButton>
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="템플릿에서 시작하기"
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
        <div className={styles.modalBox}>테이블 추가</div>
      </Modal>
    </>
  );
};
