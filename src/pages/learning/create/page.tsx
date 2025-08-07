import { BreadCrumb, Button, Stepper } from "innogrid-ui";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LearningCreatePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);

  const handleClickNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleClickPrevious = () => {
    if (step !== 0) setStep((prev) => prev - 1);
  };

  return (
    <main>
      <BreadCrumb
        items={[{ label: "학습", path: "/learning" }, { label: "학습 생성" }]}
        className="breadcrumbBox"
        onNavigate={navigate}
      />
      <div className="page-title-box">
        <h2 className="page-title">학습</h2>
      </div>
      <div className="page-content-stepper">
        <div className="page-stepper-box">
          <Stepper
            step={step}
            steps={[
              { title: "학습 스텝 001" },
              { title: "학습 스텝 002" },
              { title: "학습 스텝 003" },
              { title: "학습 스텝 004" },
            ]}
          />
        </div>
        <div className="page-content-stepper-desc">
          {step === 0 && <Step1 />}
          {step === 1 && <Step2 />}
          {step === 2 && <Step3 />}
          {step === 3 && <Step4 />}
          <div className="page-footer">
            <div className="page-footer_btn-box">
              <Button
                size="large"
                color="secondary"
                onClick={() => navigate("/learning")}
              >
                취소
              </Button>
              <div>
                <Button
                  size="large"
                  color="tertiary"
                  onClick={handleClickPrevious}
                >
                  이전
                </Button>
                <div className="btn-next">
                  <Button
                    size="large"
                    color="primary"
                    onClick={handleClickNext}
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

const Step1 = () => {
  return (
    <div>
      <div>스텝1</div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div>
      <div>스텝2</div>
    </div>
  );
};

const Step3 = () => {
  return (
    <div>
      <div>스텝3</div>
    </div>
  );
};

const Step4 = () => {
  return (
    <div>
      <div>스텝4</div>
    </div>
  );
};
