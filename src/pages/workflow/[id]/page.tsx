import { useState, useMemo } from "react";
import type { ColDef, Sorting } from "innogrid-ui";
import {
  BreadCrumb,
  Button,
  HeaderCheckbox,
  CellCheckbox,
  useTableSelection,
  useTablePagination,
  Tabs,
  Table,
} from "innogrid-ui";

import { IconCopy } from "../../../assets/img/icon";
import { Link, useNavigate } from "react-router";
import { EditWorkflowButton } from "../../../components/features/workflow/edit-workflow-button";
import { DeleteWorkflowButton } from "../../../components/features/workflow/delete-workflow-button";

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
      <Link to={"/"} className="table-td-link">
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

export default function WorkflowDetailPage() {
  const navigate = useNavigate();
  const { setRowSelection, rowSelection } = useTableSelection();
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);

  const [rowData, setRowData] = useState<DataType[]>([
    {
      name: "테스트워크플로우",
      id: "워크플로우 001",
      state: "Running",
      desc: "설명이 들어갑니다. 설명이 들어갑니다.",
      date: "2025-12-31 10:12",
    },
  ]);

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "워크플로우", path: "/workflow" },
          { label: "워크플로우 상세" },
        ]}
        onNavigate={navigate}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">워크플로우 상세</h2>
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <EditWorkflowButton />
            <DeleteWorkflowButton />
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
              <div className="page-detail_item-data">테스트 워크플로우</div>
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
              <div className="page-detail_item-data">
                <Link
                  to={"/service/test"}
                  className="page-detail_item-data-link"
                >
                  테스트 서비스
                </Link>
              </div>
            </li>
            <li>
              <div className="page-detail_item-name">공개 URL</div>
              <div className="page-detail_item-data">
                http://123.456.789.000/workflow/dummyApp123
                <button className="btn-copy">
                  <IconCopy />
                </button>
              </div>
            </li>
          </ul>
          <ul className="page-detail-list">
            <li>
              <div className="page-detail_item-name">백엔드 서비스 API</div>
              <div className="page-detail_item-data">
                http://192.168.160.247/v1
                <button className="btn-copy">
                  <IconCopy />
                </button>
              </div>
            </li>
            <li>
              <div className="page-detail_item-name">카테고리</div>
              <div className="page-detail_item-data">채팅플로우</div>
            </li>
            <li>
              <div className="page-detail_item-name">설명</div>
              <div className="page-detail_item-data">
                설명이 들어갑니다. 설명이 들어갑니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content page-content-detail">
        <div className="page-tabsBox">
          <Tabs
            labels={["워크플로우 오버뷰", "모델"]}
            components={[
              <div className="tabs-Content">
                <div>뷰 영역</div>
              </div>,
              <div className="tabs-Content">
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
              </div>,
            ]}
          />
        </div>
      </div>
    </main>
  );
}
