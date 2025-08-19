import { useState } from "react";
import type { Sorting } from "innogrid-ui";
import {
  BreadCrumb,
  Table,
  HeaderCheckbox,
  CellCheckbox,
  useTableSelection,
  useTablePagination,
  Tabs,
} from "innogrid-ui";
import { EditServiceButton } from "../../../components/features/service/edit-service-button";
import { DeleteServiceButton } from "../../../components/features/service/delete-service-button";
import { Link, useNavigate } from "react-router";
import { CreateWorkflowButton } from "../../../components/features/workflow/create-workflow-button";
import { EditWorkflowButton } from "../../../components/features/workflow/edit-workflow-button";
import { DeleteWorkflowButton } from "../../../components/features/workflow/delete-workflow-button";
import { ServiceMonitoring } from "../../../components/features/service/service-monitoring";

export default function ServiceDetailPage() {
  const navigate = useNavigate();

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "서비스", path: "/service" },
          { label: "서비스 상세" },
        ]}
        onNavigate={navigate}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">서비스 상세</h2>
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <EditServiceButton />
            <DeleteServiceButton />
          </div>
        </div>
      </div>
      <div className="page-content page-p-40">
        <h3 className="page-detail-title">상세 정보</h3>
        <div className="page-detail-list-box">
          {/* 최대 ul 3개, li 5개 사용 해주세요. */}
          <ul className="page-detail-list">
            <li>
              <div className="page-detail_item-name">이름</div>
              <div className="page-detail_item-data">테스트 서비스1</div>
            </li>
            <li>
              <div className="page-detail_item-name">생성일시</div>
              <div className="page-detail_item-data">2025-12-31 10:12</div>
            </li>
            <li>
              <div className="page-detail_item-name">최근 업데이트</div>
              <div className="page-detail_item-data">2025-12-31 10:12</div>
            </li>
            <li>
              <div className="page-detail_item-name">태그</div>
              <div className="page-detail_item-data">태그, 태그, 태그</div>
            </li>
            <li>
              <div className="page-detail_item-name">설명</div>
              <div className="page-detail_item-data">
                설명이 들어갑니다. 설명이 들어갑니다. 설명이 들어갑니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content page-content-detail">
        <div className="page-tabsBox">
          <Tabs
            labels={[
              "워크플로우",
              "지식 베이스",
              "모델",
              "프롬프트",
              "모니터링",
            ]}
            components={[
              <div className="tabs-Content">
                <div className="page-toolBox">
                  <div className="page-toolBox-btns">
                    <CreateWorkflowButton />
                    <EditWorkflowButton />
                    <DeleteWorkflowButton />
                  </div>
                </div>
                <div>
                  <WorkflowTable />
                </div>
              </div>,
              <div className="tabs-Content">
                <KnowledgeBaseTable />
              </div>,
              <div className="tabs-Content">
                <ModelTable />
              </div>,
              <div className="tabs-Content">
                <PromptTable />
              </div>,
              <div className="tabs-Content">
                <ServiceMonitoring />
              </div>,
            ]}
          />
        </div>
      </div>
    </main>
  );
}

const WorkflowTable = () => {
  const { setRowSelection, rowSelection } = useTableSelection();
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const [rowData, setRowData] = useState([
    {
      name: "테스트워크플로우",
      id: "워크플로우 001",
      state: "Running",
      desc: "설명이 들어갑니다. 설명이 들어갑니다.",
      date: "2025-12-31 10:12",
    },
  ]);
  const columns = [
    {
      id: "select",
      size: 30,
      header: ({ table }) => <HeaderCheckbox table={table} />,
      cell: ({ row }) => <CellCheckbox row={row} />,
      enableSorting: false, //오름차순/내림차순 아이콘 숨기기
    },
    {
      id: "name",
      header: "이름",
      accessorFn: (row) => row.name,
      size: 325,
      cell: ({ row }) => (
        <Link to={`/workflow/${row.original.name}`} className="table-td-link">
          {row.original.name}
        </Link>
      ),
    },
    {
      id: "id",
      header: "워크플로우ID",
      accessorFn: (row) => row.id,
      size: 325,
    },
    {
      id: "state",
      header: "상태",
      accessorFn: (row) => row.state,
      size: 325,
      cell: ({ row }) => (
        <span className="table-td-state table-td-state-run">
          {row.original.state}
        </span>
      ),
    },
    {
      id: "desc",
      header: "설명",
      accessorFn: (row) => row.desc,
      size: 434,
      enableSorting: false, //오름차순/내림차순 아이콘 숨기기
    },
    {
      id: "date",
      header: "생성일시",
      accessorFn: (row) => row.date,
      size: 325,
    },
  ];

  return (
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
  );
};

const KnowledgeBaseTable = () => {
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const [rowData, setRowData] = useState([
    {
      name: "테스트 문서",
      workflow: "워크플로우1",
      type: "RAG",
      owner: "홍길동",
      desc: "설명이 들어갑니다. 설명이 들어갑니다.",
      date: "2025-12-31 10:12",
    },
  ]);
  const columns = [
    {
      id: "name",
      header: "이름",
      accessorFn: (row) => row.name,
      size: 300,
    },
    {
      id: "workflow",
      header: "워크플로우",
      accessorFn: (row) => row.workflow,
      size: 300,
    },
    {
      id: "type",
      header: "유형",
      accessorFn: (row) => row.type,
      size: 285,
    },
    {
      id: "owner",
      header: "소유자",
      accessorFn: (row) => row.owner,
      size: 325,
    },
    {
      id: "desc",
      header: "설명",
      accessorFn: (row) => row.desc,
      size: 334,
      enableSorting: false, //오름차순/내림차순 아이콘 숨기기
    },
    {
      id: "date",
      header: "생성일시",
      accessorFn: (row) => row.date,
      size: 325,
    },
  ];

  return (
    <Table
      useClientPagination
      columns={columns}
      data={rowData}
      totalCount={rowData.length}
      pagination={pagination}
      setPagination={setPagination}
      setSorting={setSorting}
      sorting={sorting}
    />
  );
};

const ModelTable = () => {
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const [rowData, setRowData] = useState([
    {
      name: "테스트 문서",
      modelId: "Qwen/QwQ-32B-Preview",
      workflow: "workflow1",
      type: "ML",
      owner: "관리자",
      desc: "설명이 들어갑니다. 설명이 들어갑니다.",
      date: "2025-12-31 10:12",
    },
  ]);
  const columns = [
    {
      id: "name",
      header: "이름",
      accessorFn: (row) => row.name,
      size: 300,
    },
    {
      id: "modelId",
      header: "모델 ID",
      accessorFn: (row) => row.modelId,
      size: 300,
    },
    {
      id: "workflow",
      header: "워크플로우",
      accessorFn: (row) => row.workflow,
      size: 225,
    },
    {
      id: "type",
      header: "유형",
      accessorFn: (row) => row.type,
      size: 190,
    },
    {
      id: "owner",
      header: "소유자",
      accessorFn: (row) => row.owner,
      size: 190,
    },
    {
      id: "desc",
      header: "모델 설명",
      accessorFn: (row) => row.desc,
      size: 334,
      enableSorting: false, //오름차순/내림차순 아이콘 숨기기
    },
    {
      id: "date",
      header: "생성일시",
      accessorFn: (row) => row.date,
      size: 325,
    },
  ];

  return (
    <Table
      useClientPagination
      columns={columns}
      data={rowData}
      totalCount={rowData.length}
      pagination={pagination}
      setPagination={setPagination}
      setSorting={setSorting}
      sorting={sorting}
    />
  );
};

const PromptTable = () => {
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const [rowData, setRowData] = useState([
    {
      name: "프롬프트1",
      creator: "홍길동",
      variable: "3개",
      desc: "설명이 들어갑니다. 설명이 들어갑니다.",
      date: "2025-12-31 10:12",
    },
  ]);
  const columns = [
    {
      id: "name",
      header: "이름",
      accessorFn: (row) => row.name,
      size: 334,
    },
    {
      id: "creator",
      header: "생성자",
      accessorFn: (row) => row.creator,
      size: 334,
    },
    {
      id: "variable",
      header: "변수",
      accessorFn: (row) => row.variable,
      size: 334,
    },
    {
      id: "desc",
      header: "설명",
      accessorFn: (row) => row.desc,
      size: 334,
      enableSorting: false, //오름차순/내림차순 아이콘 숨기기
    },
    {
      id: "date",
      header: "생성일시",
      accessorFn: (row) => row.date,
      size: 325,
    },
  ];

  return (
    <Table
      useClientPagination
      columns={columns}
      data={rowData}
      totalCount={rowData.length}
      pagination={pagination}
      setPagination={setPagination}
      setSorting={setSorting}
      sorting={sorting}
    />
  );
};
