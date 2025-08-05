import { useState, useMemo } from "react";
import type { ColDef, Sorting, SelectSingleValue } from "innogrid-ui";
import {
  BreadCrumb,
  Button,
  Table,
  HeaderCheckbox,
  CellCheckbox,
  useTableSelection,
  useTablePagination,
  Tabs,
  Select,
  Accordion,
  SelectButton,
  SelectButtonItem,
  Modal,
} from "innogrid-ui";

import styles from "../service.module.scss";

//breadcrumb
const items = [{ label: "서비스", path: "/service" }, { label: "서비스 상세" }];

//select option
type OptionType = { text: string; value: string };
const options1 = [
  { text: "워크플로우 전체", value: "워크플로우 전체" },
  { text: "옵션 2", value: "option2" },
  { text: "옵션 3", value: "option3" },
];
const options2 = [
  { text: "최근 1시간", value: "최근 1시간" },
  { text: "옵션 2", value: "option2" },
  { text: "옵션 3", value: "option3" },
];

export default function ServiceDetailPage() {
  //table
  const basicColumns = [
    {
      id: "name",
      header: "이름",
      accessorFn: (row) => row.name,
      size: 325,
      cell: ({ row }) => (
        <a href={"/"} className="table-td-link">
          {row.original.name}
        </a>
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
      name: "테스트워크플로우",
      id: "워크플로우 001",
      state: "Running",
      desc: "설명이 들어갑니다. 설명이 들어갑니다.",
      date: "2025-12-31 10:12",
    },
  ]);

  //select
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const onChangeSelect = (option: SelectSingleValue<OptionType>) => {
    setSelectedValue(option);
  };

  //accordion
  const accordionItems1 = [
    {
      label: "총 메시지 수",
      component: (
        <div>
          <div className={styles.accordionContent}>컨텐츠 영역</div>
        </div>
      ),
    },
  ];
  const accordionItems2 = [
    {
      label: "활성 사용자 수",
      component: (
        <div>
          <div className={styles.accordionContent}>
            컨텐츠 영역 컨텐츠 영역컨텐츠 영역컨텐츠 영역
          </div>
        </div>
      ),
    },
  ];

  //modal open
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main>
      <BreadCrumb
        items={items}
        onNavigate={(path: string) => {}}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">서비스 상세</h2>
        <div className="page-toolBox">
          <div className="page-toolBox-btns">
            <Button
              onClick={() => alert("Button clicked!")}
              size="medium"
              color="secondary"
            >
              편집
            </Button>
            <Button
              onClick={() => alert("Button clicked!")}
              size="medium"
              color="negative"
            >
              삭제
            </Button>
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
            labels={["워크플로우", "데이터 셋", "모델", "프롬프트", "모니터링"]}
            components={[
              <div className="tabs-Content">
                <div className="page-toolBox">
                  <div className="page-toolBox-btns">
                    <SelectButton title="생성" color="focus">
                      <SelectButtonItem
                        onClick={() => {
                          alert("직접 생성");
                        }}
                      >
                        직접 생성
                      </SelectButtonItem>
                      <SelectButtonItem onClick={() => setIsOpen(true)}>
                        템플릿에서 시작
                      </SelectButtonItem>
                    </SelectButton>
                    <Button
                      onClick={() => alert("Button clicked!")}
                      size="medium"
                      color="secondary"
                    >
                      편집
                    </Button>
                    <Button
                      onClick={() => alert("Button clicked!")}
                      size="medium"
                      color="negative"
                    >
                      삭제
                    </Button>
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
              </div>,
              <div className="tabs-Content">
                탭 2의 콘텐츠 내용입니다.
                <br />
                탭을 선택하면 이 영역에 표시됩니다.
              </div>,
              <div className="tabs-Content">
                탭 3의 콘텐츠 내용입니다.
                <br />
                탭을 선택하면 이 영역에 표시됩니다.
              </div>,
              <div className="tabs-Content">
                탭 4의 콘텐츠 내용입니다.
                <br />
                탭을 선택하면 이 영역에 표시됩니다.
              </div>,
              <div className="tabs-Content">
                <div className={styles.selectBox}>
                  <Select
                    options={options1}
                    getOptionLabel={(option) => option.text}
                    getOptionValue={(option) => option.value}
                    value={selectedValue}
                    onChange={onChangeSelect}
                    menuPosition="fixed"
                    size="m-small"
                  />
                  <Select
                    options={options2}
                    getOptionLabel={(option) => option.text}
                    getOptionValue={(option) => option.value}
                    value={selectedValue}
                    onChange={onChangeSelect}
                    menuPosition="fixed"
                    size="m-small"
                  />
                </div>
                <div className={styles.accordionBox}>
                  <Accordion
                    className={styles.accordion}
                    components={accordionItems1}
                  />
                  <Accordion
                    className={styles.accordion}
                    components={accordionItems2}
                  />
                </div>
              </div>,
            ]}
          />
        </div>
      </div>

      {/* modals */}
      <Modal
        allowOutsideInteraction
        isOpen={isOpen}
        title="템플릿에서 시작하기"
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
        <div className={styles.modalBox}>테이블 추가</div>
      </Modal>
    </main>
  );
}
