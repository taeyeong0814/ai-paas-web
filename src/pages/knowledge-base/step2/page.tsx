import { useState } from "react";
import type { ChangeEvent, SelectSingleValue } from "innogrid-ui";
import {
  BreadCrumb,
  Button,
  Select,
  Input,
  Stepper,
  RadioButton,
} from "innogrid-ui";

import { IconArrCount } from "../../../assets/img/icon";

//breadcrumb
const items = [
  { label: "지식 베이스", path: "/knowledge-base" },
  { label: "지식 베이스 설정" },
];

//stepper
const steps = [
  { title: "지식 베이스 스텝 001" },
  { title: "지식 베이스 스텝 002" },
  { title: "지식 베이스 스텝 003" },
];

//select option
type OptionType = { text: string; value: string };

const options = [
  { text: "옵션 1", value: "option1" },
  { text: "옵션 2", value: "option2" },
  { text: "옵션 3", value: "option3" },
];

export default function knowledgeBaseStep2Page() {
  //stepper
  const [step, setStep] = useState<number>(1);

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

  //select
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const onChangeSelect = (option: SelectSingleValue<OptionType>) => {
    setSelectedValue(option);
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
      <div className="page-title-box">
        <h2 className="page-title">지식 베이스</h2>
      </div>
      <div className="page-content-stepper">
        <div className="page-stepper-box">
          <Stepper step={step} steps={steps} />
        </div>
        <div className="page-content-stepper-desc">
          <div className="page-content page-p-40">
            <div className="page-input-box">
              <div className="page-input_title">청크 설정</div>
              <div className="page-input_item-box">
                <div className="page-input_item-name page-icon-requisite">
                  청크 길이
                </div>
                <div className="page-input_item-data">
                  <Input
                    placeholder="청크 길이를 입력해주세요."
                    value={value}
                    onChange={onChange}
                  />
                  <p className="page-input_item-input-desc">
                    청크 길이 입력에 대한 설명글이 들어갑니다.
                  </p>
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name page-icon-requisite">
                  청크 중첩
                </div>
                <div className="page-input_item-data">
                  <Input
                    placeholder="청크 중첩을 입력해주세요."
                    value={value}
                    onChange={onChange}
                  />
                  <p className="page-input_item-input-desc">
                    청크 중첩 입력에 대한 설명글이 들어갑니다.
                  </p>
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">청크 타입</div>
                <div className="page-input_item-data">
                  <Select
                    className="page-input_item-data_select"
                    options={options}
                    getOptionLabel={(option) => option.text}
                    getOptionValue={(option) => option.value}
                    value={selectedValue}
                    onChange={onChangeSelect}
                  />
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">언어</div>
                <div className="page-input_item-data">
                  <div className="page-input_item-col2">
                    <RadioButton
                      id="radio1"
                      label="한국어"
                      value="basic"
                      onCheckedChange={onCheckedChange}
                    />
                    <RadioButton
                      id="radio2"
                      label="영어"
                      value="basic"
                      onCheckedChange={onCheckedChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="page-input-box page-input-hr">
              <div className="page-input_title">임베딩 설정</div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">임베딩 모델</div>
                <div className="page-input_item-data">
                  <Select
                    className="page-input_item-data_select"
                    options={options}
                    getOptionLabel={(option) => option.text}
                    getOptionValue={(option) => option.value}
                    value={selectedValue}
                    onChange={onChangeSelect}
                  />
                </div>
              </div>
            </div>
            <div className="page-input-box page-input-hr">
              <div className="page-input_title">검색 설정</div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">검색 타입</div>
                <div className="page-input_item-data">
                  <Select
                    className="page-input_item-data_select"
                    options={options}
                    getOptionLabel={(option) => option.text}
                    getOptionValue={(option) => option.value}
                    value={selectedValue}
                    onChange={onChangeSelect}
                  />
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">상위 K</div>
                <div className="page-input_item-data">
                  <div className="page-input_item-row2">
                    {/* 게이지 드래그시 gaugeActionBar 필요 */}
                    <div className="page-gauge">
                      <span className="page-gauge-pointer"></span>
                      <span className="page-gauge-actionBar"></span>
                      <span className="page-gauge-bar"></span>
                    </div>
                    {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                    <div className="page-num-count">
                      {/* ${styles.disabled} */}
                      <input type="number" placeholder="0" />
                      <div className="page-num-count-control">
                        <button type="button" className="btn-num">
                          <IconArrCount className="icon-arr icon-arrUp" />
                        </button>
                        <button type="button" className="btn-num">
                          <IconArrCount className="icon-arr icon-arrDown" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">점수 임계값</div>
                <div className="page-input_item-data">
                  <div className="page-input_item-row2">
                    {/* 게이지 드래그시 gaugeActionBar 필요 */}
                    <div className="page-gauge">
                      <span className="page-gauge-pointer"></span>
                      <span className="page-gauge-actionBar"></span>
                      <span className="page-gauge-bar"></span>
                    </div>
                    {/* numCount disabled 일때 클래스네임 disabled 추가 */}
                    <div className="page-num-count">
                      {/* ${styles.disabled} */}
                      <input type="number" placeholder="0" />
                      <div className="page-num-count-control">
                        <button type="button" className="btn-num">
                          <IconArrCount className="icon-arr icon-arrUp" />
                        </button>
                        <button type="button" className="btn-num">
                          <IconArrCount className="icon-arr icon-arrDown" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div className="page-footer_btn-box">
              <Button
                size="large"
                color="secondary"
                onClick={() => alert("Button clicked!")}
              >
                취소
              </Button>
              <div>
                <Button
                  size="large"
                  color="tertiary"
                  onClick={() => alert("Button clicked!")}
                >
                  이전
                </Button>
                <div className="btn-next">
                  <Button
                    size="large"
                    color="primary"
                    onClick={() => alert("Button clicked!")}
                  >
                    다음
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
