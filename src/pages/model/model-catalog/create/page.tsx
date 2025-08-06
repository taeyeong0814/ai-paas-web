import { BreadCrumb } from "innogrid-ui";
import { useNavigate } from "react-router";

export default function ModelCatalogCreatePage() {
  const navigate = useNavigate();

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "모델" },
          { label: "모델 카탈로그", path: "/model/model-catalog" },
          { label: "모델 카탈로그 생성" },
        ]}
        className="breadcrumbBox"
        onNavigate={navigate}
      />
      <div className="page-title-box">
        <h2 className="page-title">모델 카탈로그 생성</h2>
      </div>
    </main>
  );
}
