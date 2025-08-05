import { useState, useMemo, type ChangeEvent } from "react";
import type { ColDef, Sorting } from "innogrid-ui";
import {
  BreadCrumb,
  Button,
  SearchInput,
  Table,
  HeaderCheckbox,
  CellCheckbox,
  useTableSelection,
  useTablePagination,
  useSearchInputState,
  Modal,
  Input,
  AlertDialog,
  Textarea,
} from "innogrid-ui";

import styles from "./service.module.scss";

//breadcrumb
const items = [{ label: "서비스" }];

export default function ServicePage() {
  //searchInput
  const { searchValue, ...restProps } = useSearchInputState();

  //table
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
  const [rowData, setRowData] = useState<DataType[]>([
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
  ]);

  //modal open
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const onClickConfirm = () => {
    alert("Confirm!");
  };

  //input
  const [value, setValue] = useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //textarea
  const [text, setText] = useState<string>("");
  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main>
      <BreadCrumb items={items} className="breadcrumbBox" />
      <div className="page-title-box">
        <h2 className="page-title">서비스</h2>
      </div>
      <div className="page-content">
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <Button
              onClick={() => setIsOpen(true)}
              size="medium"
              color="primary"
            >
              생성
            </Button>
            <Button
              onClick={() => setIsOpen2(true)}
              size="medium"
              color="secondary"
            >
              편집
            </Button>
            <Button
              onClick={() => setIsOpen3(true)}
              size="medium"
              color="negative"
            >
              삭제
            </Button>
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
      </div>

      {/* modals */}
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="서비스 생성"
        size="small"
        onRequestClose={() => setIsOpen(false)}
        action={() => alert("확인!")}
        buttonTitle="확인"
        subButton={
          <Button size="large" color="secondary" onClick={() => alert("취소!")}>
            취소
          </Button>
        }
      >
        <div className={styles.modalBox}>
          <div className={styles.inputBox}>
            <span>타이틀</span>
            <Input
              placeholder="이름을 입력해주세요."
              value={value}
              onChange={onChange}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
          <div className={styles.inputBox}>
            <span>설명</span>
            <Textarea
              placeholder="설명을 입력해주세요."
              value={text}
              onChange={onTextChange}
            />
            <div className={styles.textareaDesc}>설명 메시지</div>
          </div>
          <div className={styles.inputBox}>
            <span>태그</span>
            <Input
              placeholder="태그 내용을 입력해주세요."
              value={value}
              onChange={onChange}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
        </div>
      </Modal>

      <Modal
        allowOutsideInteraction
        isOpen={isOpen2}
        title="서비스 편집"
        size="small"
        onRequestClose={() => setIsOpen2(false)}
        action={() => alert("확인!")}
        buttonTitle="확인"
        subButton={
          <Button size="large" color="secondary" onClick={() => alert("취소!")}>
            취소
          </Button>
        }
      >
        <div className={styles.modalBox}>
          <div className={styles.inputBox}>
            <span>타이틀</span>
            <Input
              placeholder="이름을 입력해주세요."
              value={"테스트 타이틀"}
              onChange={onChange}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
          <div className={styles.inputBox}>
            <span>설명</span>
            <Textarea
              value={"테스트 설명 내용 들어가요."}
              onChange={onTextChange}
            />
            <div className={styles.textareaDesc}>설명 메시지</div>
          </div>
          <div className={styles.inputBox}>
            <span>태그</span>
            <Input
              placeholder="태그 내용을 입력해주세요."
              value={value}
              onChange={onChange}
              size={{ width: "100%", height: "32px" }}
            />
          </div>
        </div>
      </Modal>

      {/* alert */}
      <AlertDialog
        isOpen={isOpen3}
        confirmButtonText="확인"
        cancelButtonText="취소"
        onClickConfirm={onClickConfirm}
        onClickClose={() => setIsOpen3(false)}
        size="small"
      >
        <span>서비스를 삭제하시겠습니까?</span>
      </AlertDialog>
    </main>
  );
}
