import { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  BreadCrumb,
  SearchInput,
  Table,
  HeaderCheckbox,
  CellCheckbox,
  useTableSelection,
  useTablePagination,
  useSearchInputState,
  type Sorting,
} from "innogrid-ui";
import { EditServiceButton } from "@/components/features/service/edit-service-button";
import { CreateServiceButton } from "@/components/features/service/create-service-button";
import { DeleteServiceButton } from "@/components/features/service/delete-service-button";
import { useGetServices } from "@/hooks/service/services";
import { formatDateTime } from "@/util/date";

interface ServiceRow {
  id: number;
  name: string;
  description: string;
  tag: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

// 테이블 컬럼 설정
const columns = [
  {
    id: "select",
    size: 30,
    header: ({ table }: { table: ServiceRow }) => (
      <HeaderCheckbox table={table} />
    ),
    cell: ({ row }: { row: { original: ServiceRow } }) => (
      <CellCheckbox row={row} />
    ),
    enableSorting: false,
  },
  {
    id: "name",
    header: "이름",
    accessorFn: (row: ServiceRow) => row.name,
    size: 325,
    cell: ({ row }: { row: { original: ServiceRow } }) => (
      <Link to={`/service/${row.original.id}`} className="table-td-link">
        {row.original.name}
      </Link>
    ),
  },
  {
    id: "tag",
    header: "태그",
    accessorFn: (row: ServiceRow) => row.tag,
    size: 325,
  },
  {
    id: "created_by",
    header: "생성자",
    accessorFn: (row: ServiceRow) => row.created_by,
    size: 325,
  },
  {
    id: "description",
    header: "설명",
    accessorFn: (row: ServiceRow) => row.description,
    size: 434,
    enableSorting: false,
  },
  {
    id: "created_at",
    header: "생성일시",
    accessorFn: (row: ServiceRow) => formatDateTime(row.created_at),
    size: 325,
  },
];

export default function ServicePage() {
  const { searchValue, ...restProps } = useSearchInputState();
  const { rowSelection, setRowSelection } = useTableSelection();
  const { pagination, setPagination } = useTablePagination();

  // 정렬 상태 관리 (기본값: 이름 오름차순)
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const { services, page, isPending, isError } = useGetServices({
    page: pagination.pageIndex + 1,
    size: pagination.pageSize,
    search: searchValue,
  });

  // 선택된 행의 ID를 추출
  const selectedId = useMemo(() => {
    const selectedRowKeys = Object.keys(rowSelection);

    // 단일 선택만 허용
    if (selectedRowKeys.length !== 1) return;

    return services[parseInt(selectedRowKeys[0])]?.id;
  }, [rowSelection, services]);

  return (
    <main>
      <BreadCrumb items={[{ label: "서비스" }]} className="breadcrumbBox" />
      <div className="page-title-box">
        <h2 className="page-title">서비스</h2>
      </div>
      <div className="page-content">
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <CreateServiceButton />
            <EditServiceButton serviceId={selectedId} />
            <DeleteServiceButton serviceId={selectedId} />
          </div>
          <div>
            <SearchInput
              variant="default"
              placeholder="검색어를 입력해주세요"
              {...restProps}
            />
          </div>
        </div>
        <div className="h-[481px]">
          <Table
            columns={columns}
            data={services}
            isLoading={isPending}
            emptyMessage={
              isError ? (
                "서비스 목록을 불러오는 데 실패했습니다."
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div>워크플로우가 없습니다</div>
                  <div>
                    서비스 생성 버튼을 클릭해 워크플로우를 생성해 보세요
                  </div>
                </div>
              )
            }
            totalCount={page.total}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
          />
        </div>
      </div>
    </main>
  );
}
