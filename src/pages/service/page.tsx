import { useState, useMemo } from "react";
import type { ColDef, Sorting } from "innogrid-ui";
import {
  BreadCrumb,
  SearchInput,
  Table,
  HeaderCheckbox,
  CellCheckbox,
  useTableSelection,
  useTablePagination,
  useSearchInputState,
} from "innogrid-ui";
import { EditServiceButton } from "../../components/service/edit-service-button";
import { CreateServiceButton } from "../../components/service/create-service-button";
import { DeleteServiceButton } from "../../components/service/delete-service-button";

export default function ServicePage() {
  const { searchValue, ...restProps } = useSearchInputState();
  const { setRowSelection, rowSelection } = useTableSelection();
  const { pagination, setPagination } = useTablePagination();
  const [sorting, setSorting] = useState<Sorting>([
    { id: "name", desc: false },
  ]);

  const columns: ColDef<any>[] = useMemo(
    () => [
      {
        id: "select",
        size: 30,
        header: ({ table }) => <HeaderCheckbox table={table} />,
        cell: ({ row }) => <CellCheckbox row={row} />,
        enableSorting: false, //오름차순/내림차순 아이콘 숨기기
      },
      ...basicColumns,
    ],
    []
  );

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
            <DeleteServiceButton />
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
            useClientPagination
            useMultiSelect
            columns={columns}
            data={data}
            totalCount={data.length}
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

const basicColumns = [
  {
    id: "name",
    header: "이름",
    accessorFn: (row) => row.name,
    size: 325,
    cell: ({ row }) => (
      <a href={"/service/detail"} className="table-td-link">
        {row.original.name}
      </a>
    ),
  },
  { id: "tag", header: "태그", accessorFn: (row) => row.tag, size: 325 },
  {
    id: "creator",
    header: "생성자",
    accessorFn: (row) => row.creator,
    size: 325,
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

const data = [
  {
    name: "Sample1",
    tag: "Custom",
    creator: "CustomA",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample2",
    tag: "Custom",
    creator: "CustomB",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample3",
    tag: "Custom",
    creator: "CustomC",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample4",
    tag: "Custom",
    creator: "CustomD",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample5",
    tag: "Custom",
    creator: "CustomE",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample6",
    tag: "Custom",
    creator: "CustomF",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample7",
    tag: "Custom",
    creator: "CustomG",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample8",
    tag: "Custom",
    creator: "CustomH",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample9",
    tag: "Custom",
    creator: "CustomI",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
  {
    name: "Sample10",
    tag: "Custom",
    creator: "CustomJ",
    desc: "설명이 들어갑니다. 설명이 들어갑니다.",
    date: "2025-12-31 10:12",
  },
];
