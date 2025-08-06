import { AlertDialog, Button } from "innogrid-ui";
import { useState } from "react";

export const DeleteServiceButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickConfirm = () => {};

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="medium" color="negative">
        삭제
      </Button>
      <AlertDialog
        isOpen={isOpen}
        confirmButtonText="확인"
        cancelButtonText="취소"
        onClickConfirm={handleClickConfirm}
        onClickClose={() => setIsOpen(false)}
        size="small"
      >
        <span>서비스를 삭제하시겠습니까?</span>
      </AlertDialog>
    </>
  );
};
