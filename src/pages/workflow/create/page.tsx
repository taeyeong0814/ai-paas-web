import { useNavigate } from "react-router";
import { BreadCrumb, Button } from "innogrid-ui";
import { WorkflowSettingPanel } from "../../../components/features/workflow/workflow-setting-panel";
import { WorkflowComponentPanel } from "../../../components/features/workflow/workflow-component-panel";
import styles from "../workflow.module.scss";

export default function WorkflowCreatePage() {
  const navigate = useNavigate();

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "워크플로우", path: "/workflow" },
          { label: "워크플로우 생성" },
        ]}
        onNavigate={navigate}
        className="breadcrumbBox"
      />
      <div className={styles.container}>
        <WorkflowComponentPanel />

        <div className={styles.contentBox}>
          <div className="absolute top-5 right-5 flex gap-1.5">
            <Button
              onClick={() => alert("Button clicked!")}
              size="medium"
              color="tertiary"
            >
              체크리스트
            </Button>
            <Button
              onClick={() => alert("Button clicked!")}
              size="medium"
              color="primary"
            >
              생성
            </Button>
          </div>

          <WorkflowSettingPanel />
        </div>
      </div>
    </main>
  );
}
