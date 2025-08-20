import { useState } from "react";
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
import { EditServiceButton } from "../../components/features/service/edit-service-button";
import { CreateServiceButton } from "../../components/features/service/create-service-button";
import { DeleteServiceButton } from "../../components/features/service/delete-service-button";
import { useGetServices } from "../../hooks/service/services";
import { formatDateTime } from "../../util/date";

interface ServiceRow {
  id: number;
  name: string;
  description: string;
  tag: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

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
    enableSorting: false, //오름차순/내림차순 아이콘 숨기기
  },
  {
    id: "name",
    header: "이름",
    accessorFn: (row: ServiceRow) => row.name,
    size: 325,
    cell: ({ row }: { row: { original: ServiceRow } }) => (
      <Link to={`/service/${row.original.name}`} className="table-td-link">
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
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);
  const { services, page, isPending } = useGetServices({
    search: searchValue,
  });

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
            <EditServiceButton />
            <DeleteServiceButton
              serviceId={services[parseInt(Object.keys(rowSelection)[0])]?.id}
            />
          </div>
          <div>
            <SearchInput
              variant="default"
              placeholder="검색어를 입력해주세요"
              {...restProps}
            />
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            data={services}
            isLoading={isPending}
            totalCount={page.total}
            sorting={sorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            setSorting={setSorting}
          />
        </div>
      </div>
    </main>
  );
}
