import {
  Input,
  RadioButton,
  Select,
  Textarea,
  Accordion,
  type SelectSingleValue,
  type SelectMultiValue,
  Button,
} from "innogrid-ui";
import styles from "../../../pages/workflow/workflow.module.scss";
import { IconSet } from "../../../assets/img/icon";
import { useState, type ChangeEvent } from "react";

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

export const WorkflowSettingPanel = () => {
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
          <Accordion className={styles.accordion} components={accordionItems} />
        </div>
      </div>
    </div>
  );
};
