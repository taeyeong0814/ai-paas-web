import { BreadCrumb } from "innogrid-ui";
import { useNavigate } from "react-router";

export default function CustomModelCreatePage() {
  const navigate = useNavigate();

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "모델" },
          { label: "커스텀 모델", path: "/model/custom-model" },
          { label: "커스텀 모델 생성" },
        ]}
        className="breadcrumbBox"
        onNavigate={navigate}
      />
      <div className="page-title-box">
        <h2 className="page-title">커스텀 모델 생성</h2>
      </div>
    </main>
  );
}
