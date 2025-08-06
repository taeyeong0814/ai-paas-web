import { useState, type ChangeEvent } from "react";
import type {
  SelectGroup,
  SelectSingleValue,
  SelectMultiValue,
} from "innogrid-ui";
import {
  Accordion,
  BreadCrumb,
  Button,
  Input,
  RadioButton,
  SearchInput,
  Select,
  Textarea,
  useSearchInputState,
} from "innogrid-ui";

import styles from "../workflow.module.scss";
import { IconArrCount, IconSet } from "../../../assets/img/icon";

//breadcrumb
const items = [{ label: "워크플로우", path: "/workflow" }];

//select option
const options = [
  { text: "옵션 1", value: "option1" },
  { text: "옵션 2", value: "option2" },
  { text: "옵션 3", value: "option3" },
];

type OptionType = { text: string; value: string };
type GroupType = SelectGroup<OptionType>;

const options2 = [
  {
    label: "추천 모델",
    value: "recommendation",
    options: [
      { value: "option1", text: "Meta-Liama-3-8B" },
      { value: "option2", text: "gemma3:4b" },
    ],
  },
  {
    label: "모든 모델",
    value: "all",
    options: [
      { value: "option1", text: "openchat-3.6-8b-20240522" },
      { value: "option2", text: "Qwen2-7B-Instruct" },
    ],
  },
];

const options3 = [
  { text: "지식 베이스 001", value: "option1" },
  { text: "지식 베이스 002", value: "option2" },
  { text: "지식 베이스 003", value: "option3" },
];

export default function WorkflowCreatePage() {
  const { searchValue, ...restProps } = useSearchInputState();

  //input
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //select
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const onChangeSelect = (option: SelectSingleValue<OptionType>) => {
    setSelectedValue(option);
  };

  const [selectedValue3, setSelectedValue3] = useState<OptionType[]>([]);

  const onChangeSelect3 = (option: SelectMultiValue<OptionType>) => {
    setSelectedValue3(option);
  };

  //accordion
  const accordionItems = [
    {
      label: "출력 변수",
      component: (
        <div className={styles.accordionContBox}>
          <div className={styles.accordionCont}>
            <div className={styles.accordionContItem}>
              <div className={styles.accordionContName}>Text</div>
              <div className={styles.accordionContValue}>String</div>
            </div>
            <div className={styles.accordionContItem}>
              <div className={styles.accordionContName}>Value data</div>
              <div className={styles.accordionContValue}>Value data name</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  //textarea
  const [text, setText] = useState<string>("");
  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  //radio button
  const onCheckedChange = (checked: boolean) => {
    console.log("checked :", checked);
  };

  return (
    <main>
      <BreadCrumb
        items={items}
        onNavigate={(path: string) => {}}
        className="breadcrumbBox"
      />
      <div className={styles.container}>
        <div className={styles.leftSearchBox}>
          <div className={styles.titleBox}>
            <div className={styles.title}>테스트 템플릿 001</div>
          </div>
          <div className={styles.searchInputBox}>
            <SearchInput
              variant="default"
              placeholder="검색어를 입력해주세요"
              {...restProps}
            />
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.itemName}>
                <button type="button" className={styles.btnMore}>
                  <span>시작</span>
                </button>
              </div>
            </div>
            {/* 클릭 시 클래스네임 active 추가 */}
            <div className={`${styles.item} ${styles.active}`}>
              <div className={styles.itemName}>
                <button type="button" className={styles.btnMore}>
                  <span>모델</span>
                </button>
                <button type="button" className={styles.btnPlus}>
                  <span>생성</span>
                </button>
              </div>
              <div className={styles.itemList}>
                <div>meta-liama/Meta-Liama-3-8B lim ank dn sdkd ndf nv</div>
                <div>meta-liama/Meta-Liama-3-8B</div>
                <div>meta-liama/Meta-Liama-3-8B</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemName}>
                <button type="button" className={styles.btnMore}>
                  <span>데이터 셋</span>
                </button>
                <button type="button" className={styles.btnPlus}>
                  <span>생성</span>
                </button>
              </div>
              <div className={styles.itemList}>
                <div>meta-liama/Meta-Liama-3-8B</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemName}>
                <button type="button" className={styles.btnMore}>
                  <span>도구</span>
                </button>
                <button type="button" className={styles.btnPlus}>
                  <span>생성</span>
                </button>
              </div>
              <div className={styles.itemList}>
                <div>meta-liama/Meta-Liama-3-8B</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemName}>
                <button type="button" className={styles.btnMore}>
                  <span>끝</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.topBtnBox}>
            <Button
              onClick={() => alert("Button clicked!")}
              size="medium"
              color="tertiary"
            >
              체크리스트
            </Button>
            <Button
              onClick={() => alert("Button clicked!")}
              size="medium"
              color="primary"
            >
              생성
            </Button>
          </div>
          <div className={styles.addBox}>
            <button type="button" className={styles.btnClose}>
              <span>닫기</span>
            </button>
            <div className={styles.addInner}>
              <div className={styles.addTopBox}>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요."
                  className={styles.addTitleInput}
                />
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={styles.addItemName}>설명</div>
                </div>
                <Input
                  placeholder="설명을 입력해주세요."
                  value={value}
                  onChange={onChange}
                />
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={`${styles.addItemName} page-icon-requisite`}>
                    모델 유형
                  </div>
                </div>
                <div className={styles.col2}>
                  <RadioButton
                    id="radio1"
                    label="커스텀 모델"
                    value="basic"
                    onCheckedChange={onCheckedChange}
                  />
                  <RadioButton
                    id="radio2"
                    label="모델 카탈로그"
                    value="basic"
                    onCheckedChange={onCheckedChange}
                  />
                </div>
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={`${styles.addItemName} page-icon-requisite`}>
                    모델
                  </div>
                </div>
                <div className={styles.row2}>
                  <Select
                    className={styles.select}
                    options={options2}
                    getOptionLabel={(option) => option.text}
                    getOptionValue={(option) => option.value}
                    value={selectedValue}
                    onChange={onChangeSelect}
                    menuPosition="fixed"
                  />
                  <Button
                    onClick={() => alert("Button clicked!")}
                    size="medium"
                    color="tertiary"
                  >
                    설정
                  </Button>
                </div>
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={`${styles.addItemName} page-icon-requisite`}>
                    모델
                  </div>
                </div>
                <Select
                  className={styles.select}
                  options={options}
                  getOptionLabel={(option) => option.text}
                  getOptionValue={(option) => option.value}
                  value={selectedValue}
                  onChange={onChangeSelect}
                  menuPosition="fixed"
                />
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={`${styles.addItemName} page-icon-requisite`}>
                    컨텍스트
                  </div>
                </div>
                <Select
                  className={styles.select}
                  options={options}
                  getOptionLabel={(option) => option.text}
                  getOptionValue={(option) => option.value}
                  value={selectedValue}
                  onChange={onChangeSelect}
                  menuPosition="fixed"
                />
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={`${styles.addItemName} page-icon-requisite`}>
                    프롬프트
                  </div>
                </div>
                <Select
                  className={styles.select}
                  options={options}
                  getOptionLabel={(option) => option.text}
                  getOptionValue={(option) => option.value}
                  value={selectedValue}
                  onChange={onChangeSelect}
                  menuPosition="fixed"
                />
              </div>
              <div className={styles.addItemBox}>
                <div className={styles.addItemNameBox}>
                  <div className={`${styles.addItemName} page-icon-requisite`}>
                    지식 베이스
                  </div>
                  <button type="button" className={styles.btnSet}>
                    <IconSet className={styles.iconSet} />
                  </button>
                </div>
                <Select
                  className={styles.select}
                  isMulti
                  useCheckboxOption
                  options={options3}
                  getOptionLabel={(option) => option.text}
                  getOptionValue={(option) => option.value}
                  value={selectedValue3}
                  onChange={onChangeSelect3}
                />
              </div>
              <div className={styles.addItemBox}>
                <Textarea
                  onChange={onTextChange}
                  value={
                    "Here are the chat histories between human and assistant, inside <histories></histories> XML tags."
                  }
                />
              </div>
              <div className={styles.addItemBox}>
                <Accordion
                  className={styles.accordion}
                  components={accordionItems}
                />
              </div>
            </div>
          </div>

          {/* 설정btn 클릭시 활성화 클래스네임 active 추가 */}
          <div className={`${styles.setBox} ${styles.active}`}>
            <div className={styles.setName}>매개변수</div>
            <div className={styles.setInner}>
              <div className={styles.setItem}>
                <div className={styles.setItemName}>Temperature</div>
                {/* 토글 클릭시 활성화 클래스네임 active 추가 */}
                <div className={`${styles.toggle}`}>
                  {/* ${styles.active} */}
                  <label>
                    <input role="toggle" type="checkbox" />
                  </label>
                </div>
                {/* 게이지 드래그시 gaugeActionBar 필요 */}
                <div className={styles.gauge}>
                  <span className={styles.gaugePointer}></span>
                  <span className={styles.gaugeActionBar}></span>
                  <span className={styles.gaugeBar}></span>
                </div>
                {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                <div className={`${styles.numCount}  ${styles.disabled}`}>
                  {/* ${styles.disabled} */}
                  <input type="number" placeholder="0" />
                  <div className={styles.numCountControl}>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrUp}`}
                      />
                    </button>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrDown}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.setInner}>
              <div className={styles.setItem}>
                <div className={styles.setItemName}>Top P</div>
                {/* 토글 클릭시 활성화 클래스네임 active 추가 */}
                <div className={`${styles.toggle} ${styles.active}`}>
                  {/* ${styles.active} */}
                  <label>
                    <input role="toggle" type="checkbox" />
                  </label>
                </div>
                {/* 게이지 드래그시 gaugeActionBar 필요 */}
                <div className={styles.gauge}>
                  <span className={styles.gaugePointer}></span>
                  <span className={styles.gaugeActionBar}></span>
                  <span className={styles.gaugeBar}></span>
                </div>
                {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                <div className={`${styles.numCount}`}>
                  {/* ${styles.disabled} */}
                  <input type="number" placeholder="0" />
                  <div className={styles.numCountControl}>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrUp}`}
                      />
                    </button>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrDown}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.setInner}>
              <div className={styles.setItem}>
                <div className={styles.setItemName}>Presence penalty</div>
                {/* 토글 클릭시 활성화 클래스네임 active 추가 */}
                <div className={`${styles.toggle} ${styles.active}`}>
                  {/* ${styles.active} */}
                  <label>
                    <input role="toggle" type="checkbox" />
                  </label>
                </div>
                {/* 게이지 드래그시 gaugeActionBar 필요 */}
                <div className={styles.gauge}>
                  <span className={styles.gaugePointer}></span>
                  <span className={styles.gaugeActionBar}></span>
                  <span className={styles.gaugeBar}></span>
                </div>
                {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                <div className={`${styles.numCount}`}>
                  {/* ${styles.disabled} */}
                  <input type="number" placeholder="0" />
                  <div className={styles.numCountControl}>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrUp}`}
                      />
                    </button>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrDown}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.setInner}>
              <div className={styles.setItem}>
                <div className={styles.setItemName}>Frequency penalty</div>
                {/* 토글 클릭시 활성화 클래스네임 active 추가 */}
                <div className={`${styles.toggle}`}>
                  {/* ${styles.active} */}
                  <label>
                    <input role="toggle" type="checkbox" />
                  </label>
                </div>
                {/* 게이지 드래그시 gaugeActionBar 필요 */}
                <div className={styles.gauge}>
                  <span className={styles.gaugePointer}></span>
                  <span className={styles.gaugeActionBar}></span>
                  <span className={styles.gaugeBar}></span>
                </div>
                {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                <div className={`${styles.numCount}`}>
                  {/* ${styles.disabled} */}
                  <input type="number" placeholder="0" />
                  <div className={styles.numCountControl}>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrUp}`}
                      />
                    </button>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrDown}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.setInner}>
              <div className={styles.setItem}>
                <div className={styles.setItemName}>Max tokens</div>
                {/* 토글 클릭시 활성화 클래스네임 active 추가 */}
                <div className={`${styles.toggle}`}>
                  {/* ${styles.active} */}
                  <label>
                    <input role="toggle" type="checkbox" />
                  </label>
                </div>
                {/* 게이지 드래그시 gaugeActionBar 필요 */}
                <div className={styles.gauge}>
                  <span className={styles.gaugePointer}></span>
                  <span className={styles.gaugeActionBar}></span>
                  <span className={styles.gaugeBar}></span>
                </div>
                {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                <div className={`${styles.numCount}`}>
                  {/* ${styles.disabled} */}
                  <input type="number" placeholder="0" />
                  <div className={styles.numCountControl}>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrUp}`}
                      />
                    </button>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrDown}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 지식 베이스 btn 클릭시 활성화 클래스네임 active 추가 */}
          <div
            className={`${styles.setBox} ${styles.setBoxSm} ${styles.active}`}
          >
            <div className={styles.setName}>검색 설정</div>
            <div className={styles.setInner}>
              <div className={styles.setItem}>
                <div className={styles.setItemName}>Top K</div>
                {/* 게이지 드래그시 gaugeActionBar 필요 */}
                <div className={styles.gauge}>
                  <span className={styles.gaugePointer}></span>
                  <span className={styles.gaugeActionBar}></span>
                  <span className={styles.gaugeBar}></span>
                </div>
                {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                <div className={`${styles.numCount}`}>
                  {/* ${styles.disabled} */}
                  <input type="number" placeholder="0" />
                  <div className={styles.numCountControl}>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrUp}`}
                      />
                    </button>
                    <button type="button" className={styles.btnNum}>
                      <IconArrCount
                        className={`${styles.iconArr} ${styles.iconArrDown}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
