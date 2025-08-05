import { useState } from "react";
import type { ChangeEvent } from "innogrid-ui";
import { BreadCrumb, Button, Input, Textarea, Stepper } from "innogrid-ui";
import { IconFileUp } from "../../../assets/img/icon";

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

export default function knowledgeBaseStep1Page() {
  //stepper
  const [step, setStep] = useState<number>(0);

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
              <div className="page-input_title">기본 설정</div>
              <div className="page-input_item-box">
                <div className="page-input_item-name page-icon-requisite">
                  이름
                </div>
                <div className="page-input_item-data">
                  <Input
                    placeholder="이름을 입력해주세요."
                    value={value}
                    onChange={onChange}
                  />
                  <p className="page-input_item-input-desc">
                    이름 입력에 대한 설명글이 들어갑니다.
                  </p>
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">설명</div>
                <div className="page-input_item-data">
                  <Textarea
                    value={text}
                    onChange={onTextChange}
                    placeholder="설명을 입력해주세요."
                  />
                </div>
              </div>
              <div className="page-input_item-box">
                <div className="page-input_item-name">파일</div>
                <div className="page-input_item-data">
                  <div className="page-input_item-data_fileUpload">
                    <label className="fileUpload-preview">
                      <input type="file" className="fileUpload-file" />
                      <IconFileUp />
                      <p className="fileUpload-preview_msg">
                        파일을 여기에 드래그하거나 클릭하여 업로드하세요.
                        (파일당 최대 크기 15MB)
                        <br />
                        허용되는 파일 형식: txt, markdown, mdx, pdf, html, xlsx,
                        xls, docx, csv,md,htm
                      </p>
                    </label>
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
                  disabled
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
