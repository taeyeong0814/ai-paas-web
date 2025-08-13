import { Button } from "innogrid-ui";
import { useNavigate } from "react-router";

export const CreateCustomModelButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/model/custom-model/create")}
      size="medium"
      color="primary"
    >
      생성
    </Button>
  );
};
