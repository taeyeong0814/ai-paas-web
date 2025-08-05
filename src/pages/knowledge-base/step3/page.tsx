import { useState } from "react";
import { BreadCrumb, Button, Stepper, Accordion } from "innogrid-ui";

import { IconDocument } from "../../../assets/img/icon";

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

//accordion
const accordionItems1 = [
  {
    label: "기본 정보",
    component: (
      <div>
        <div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">데이터 셋 이름</div>
            <div className="page-accordion_item-data">테스트용</div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">설명</div>
            <div className="page-accordion_item-data">
              테스트를 위한 데이터 셋
            </div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">파일</div>
            <div className="page-accordion_item-data">
              <IconDocument className="page-icon-document" /> text.txt
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
const accordionItems2 = [
  {
    label: "청크 설정",
    component: (
      <div>
        <div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">청크 타입</div>
            <div className="page-accordion_item-data">RecursiveTextSplit</div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">청크 길이</div>
            <div className="page-accordion_item-data">100</div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">언어</div>
            <div className="page-accordion_item-data">Ko</div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">청크 중첩</div>
            <div className="page-accordion_item-data">50</div>
          </div>
        </div>
      </div>
    ),
  },
];
const accordionItems3 = [
  {
    label: "임베딩 설정",
    component: (
      <div>
        <div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">모델</div>
            <div className="page-accordion_item-data">임베딩 모델</div>
          </div>
        </div>
      </div>
    ),
  },
];
const accordionItems4 = [
  {
    label: "검색 설정",
    component: (
      <div>
        <div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">검색 타입</div>
            <div className="page-accordion_item-data">Vector</div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">Top K</div>
            <div className="page-accordion_item-data">3</div>
          </div>
          <div className="page-accordion_item-box">
            <div className="page-accordion_item-name">점수 임계값</div>
            <div className="page-accordion_item-data">0.5</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function knowledgeBaseStep3Page() {
  //stepper
  const [step, setStep] = useState<number>(2);

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
            <div className="page-accordion-box">
              <Accordion components={accordionItems1} defaultValue="0" />
              <Accordion components={accordionItems2} defaultValue="0" />
              <Accordion components={accordionItems3} defaultValue="0" />
              <Accordion components={accordionItems4} defaultValue="0" />
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
                <Button
                  size="large"
                  color="primary"
                  onClick={() => alert("Button clicked!")}
                >
                  생성
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
