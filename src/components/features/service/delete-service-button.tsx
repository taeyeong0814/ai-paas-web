import { useDeleteService } from "@/hooks/service/services";
import { AlertDialog, Button } from "innogrid-ui";
import { useState } from "react";

export const DeleteServiceButton = ({ serviceId }: { serviceId?: number }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const { deleteService } = useDeleteService();

  const openAlert = () => {
    if (!serviceId) return;
    setIsAlertOpen(true);
  };

  const handleClickConfirm = () => {
    if (!serviceId) return;
    deleteService(serviceId);
  };

  return (
    <>
      <Button onClick={openAlert} size="medium" color="negative">
        삭제
      </Button>
      <AlertDialog
        isOpen={isAlertOpen}
        confirmButtonText="확인"
        cancelButtonText="취소"
        onClickConfirm={handleClickConfirm}
        onClickClose={() => setIsAlertOpen(false)}
        size="small"
      >
        <span>서비스를 삭제하시겠습니까?</span>
      </AlertDialog>
    </>
  );
};
