import { useNavigate } from "react-router";
import { BreadCrumb, Button } from "innogrid-ui";
import { IconArrCount } from "../../../assets/img/icon";
import { WorkflowSettingPanel } from "../../../components/features/workflow/workflow-setting-panel";
import { WorkflowComponentPanel } from "../../../components/features/workflow/workflow-component-panel";
import styles from "../workflow.module.scss";

export default function WorkflowCreatePage() {
  const navigate = useNavigate();

  return (
    <main>
      <BreadCrumb
        items={[
          { label: "워크플로우", path: "/workflow" },
          { label: "워크플로우 생성" },
        ]}
        onNavigate={navigate}
        className="breadcrumbBox"
      />
      <div className={styles.container}>
        <WorkflowComponentPanel />
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
                <div className={`${styles.numCount} ${styles.disabled}`}>
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

          <WorkflowSettingPanel />
        </div>
      </div>
    </main>
  );
}
