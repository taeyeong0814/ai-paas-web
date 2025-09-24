import { Button } from '@innogrid/ui';
import { useNavigate } from 'react-router';

interface EditClusterButtonProps {
  clusterId?: string | null;
}

export const EditClusterButton = ({ clusterId }: EditClusterButtonProps) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (clusterId) {
      navigate(`/infra-management/cluster-management/edit/${clusterId}`);
    }
  };

  return (
    <Button size="medium" color="secondary" disabled={!clusterId} onClick={handleEdit}>
      편집
    </Button>
  );
};
