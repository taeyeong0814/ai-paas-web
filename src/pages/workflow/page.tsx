import {
  BreadCrumb,
  CellCheckbox,
  HeaderCheckbox,
  SearchInput,
  Table,
  useSearchInputState,
  useTablePagination,
  useTableSelection,
  type Sorting,
} from "innogrid-ui";
import { CreateWorkflowButton } from "../../components/features/workflow/create-workflow-button";
import { EditWorkflowButton } from "../../components/features/workflow/edit-workflow-button";
import { DeleteWorkflowButton } from "../../components/features/workflow/delete-workflow-button";
import { useState } from "react";
import { Link } from "react-router";
import { useGetWorkflows } from "@/hooks/service/workflows";

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
    size: 225,
    cell: ({ row }) => (
      <Link to={"/workflow/detail"} className="table-td-link">
        {row.original.name}
      </Link>
    ),
  },
  {
    id: "id",
    header: "워크플로우 ID",
    accessorFn: (row) => row.tag,
    size: 225,
  },
  {
    id: "creator",
    header: "생성자",
    accessorFn: (row) => row.creator,
    size: 225,
  },
  {
    id: "service",
    header: "서비스",
    accessorFn: (row) => row.desc,
    size: 234,
    enableSorting: false, //오름차순/내림차순 아이콘 숨기기
  },
  {
    id: "category",
    header: "카테고리",
    accessorFn: (row) => row.date,
    size: 225,
  },
  {
    id: "state",
    header: "상태",
    accessorFn: (row) => row.state,
    size: 225,
    cell: ({ row }) => (
      <span className="table-td-state table-td-state-run">
        {row.original.state}
      </span>
    ),
  },
  {
    id: "desc",
    header: "설명",
    accessorFn: (row) => row.date,
    size: 225,
  },
  {
    id: "date",
    header: "생성일시",
    accessorFn: (row) => row.date,
    size: 225,
  },
];

export default function WorkflowPage() {
  const { searchValue, ...restProps } = useSearchInputState();
  const { setRowSelection, rowSelection } = useTableSelection();
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const { workflows, page, isPending, isError } = useGetWorkflows({
    skip: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    search: searchValue,
  });

  return (
    <main>
      <BreadCrumb items={[{ label: "워크플로우" }]} className="breadcrumbBox" />
      <div className="page-title-box">
        <h2 className="page-title">워크플로우</h2>
      </div>
      <div className="page-content">
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <CreateWorkflowButton />
            <EditWorkflowButton />
            <DeleteWorkflowButton />
          </div>
          <div>
            <div>
              <SearchInput
                variant="default"
                placeholder="검색어를 입력해주세요"
                {...restProps}
              />
            </div>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            data={workflows}
            isLoading={isPending}
            emptyMessage={
              isError
                ? "워크플로우 목록을 불러오는 데 실패했습니다."
                : "데이터가 존재하지 않습니다."
            }
            totalCount={page.total}
            pagination={pagination}
            setPagination={setPagination}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            setSorting={setSorting}
            sorting={sorting}
          />
        </div>
      </div>
    </main>
  );
}
