import {
  BreadCrumb,
  Table,
  Tabs,
  useTablePagination,
  useTableSelection,
  type Sorting,
} from "innogrid-ui";
import { useState } from "react";
import { useNavigate } from "react-router";
import { DeleteKnowledgeBaseButton } from "../../../components/knowledge-base/delete-knowledge-base-button";
import { EditKnowledgeBaseButton } from "../../../components/knowledge-base/edit-knowledge-base-button";

export default function KnowledgeBaseDetailPage() {
  const navigate = useNavigate();

  const columns = [
    {
      id: "name",
      header: "이름",
      accessorFn: (row) => row.name,
      size: 425,
    },
    {
      id: "id",
      header: "파일 크기",
      accessorFn: (row) => row.id,
      size: 425,
    },
    {
      id: "state",
      header: "업데이트 일시",
      accessorFn: (row) => row.state,
      size: 425,
    },
  ];

  const { setRowSelection, rowSelection } = useTableSelection();
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);

  const [rowData, setRowData] = useState([
    {
      name: "Model-00001-of-D0004. safetensors",
      id: "워크플로우 001",
      state: "4.43GB",
      desc: "2025-12-31 10:12",
    },
  ]);

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "지식 베이스", path: "/knowledge-base" },
          { label: "ML 모델 테스트" },
        ]}
        onNavigate={navigate}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">지식 베이스 상세</h2>
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <EditKnowledgeBaseButton />
            <DeleteKnowledgeBaseButton />
          </div>
        </div>
      </div>
      <div className="page-content page-p-40">
        <h3 className="page-detail-title">상세 정보</h3>
        <div className="page-detail-list-box">
          <ul className="page-detail-list">
            <li>
              <div className="page-detail_item-name">이름</div>
              <div className="page-detail_item-data">Meta-Llama-3-8B</div>
            </li>
          </ul>
          <ul className="page-detail-list">
            <li>
              <div className="page-detail_item-name">생성일시</div>
              <div className="page-detail_item-data">2025-12-31 10:12</div>
            </li>
          </ul>
          <ul className="page-detail-list">
            <li>
              <div className="page-detail_item-name">최근 업데이트</div>
              <div className="page-detail_item-data">2025-12-31 10:12</div>
            </li>
          </ul>
          <ul className="page-detail-list">
            <li>
              <div className="page-detail_item-name">설명</div>
              <div className="page-detail_item-data">
                설명설명설명설명설명설명
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content page-content-detail">
        <div className="page-tabsBox">
          <Tabs
            labels={["파일", "검색 테스트"]}
            components={[
              <div className="tabs-Content">
                <div>
                  <Table
                    useClientPagination
                    useMultiSelect
                    columns={columns}
                    data={rowData}
                    totalCount={rowData.length}
                    pagination={pagination}
                    setPagination={setPagination}
                    rowSelection={rowSelection}
                    setRowSelection={setRowSelection}
                    setSorting={setSorting}
                    sorting={sorting}
                  />
                </div>
              </div>,
              <div className="tabs-Content">
                <div>검색테스트</div>
              </div>,
            ]}
          />
        </div>
      </div>
    </main>
  );
}
