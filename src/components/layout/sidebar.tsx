import { useState } from "react";
import {
  IconDashboard,
  IconDataset,
  IconInfraMonitor,
  IconKnowledgeBase,
  IconLearning,
  IconMemberManagement,
  IconModel,
  IconPrompt,
  IconService,
  IconWorkflow,
} from "../../assets/img/nav";
import styles from "./sidebar.module.scss";
import { Link } from "react-router";

export const Sidebar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <>
      {/* 확장할때 클래스네임 extend 추가 */}
      <div className={`${styles.navBox}`}>
        {/* ${styles.extend} */}
        <nav>
          <ul>
            {/* 선택됐을때 클래스네임 active 추가 */}
            <li className={styles.active}>
              <Link to="/service">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconService />
                  </div>
                  <div className={styles.name}>서비스</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/workflow">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconWorkflow />
                  </div>
                  <div className={styles.name}>워크플로우</div>
                </div>
              </Link>
            </li>
            {/* 2뎁스가 있을때 클래스네임 hasDeth2 추가, 클릭시 하위 2뎁스 열림 */}
            <li
              className={`${styles.hasDeth2} ${isOpen1 ? styles.active : ""}`}
              onClick={handleClick1}
            >
              <div className={styles.nameBox}>
                <div className={styles.icon}>
                  <IconModel />
                </div>
                <div className={styles.name}>모델</div>
                <i className={`${styles.iconArr}`} />
              </div>
              {/* deth2 선택시(페이지 활성화) 메뉴 열려있는 상태 유지, 클래스네임 active 추가 */}
              <ul className={`${styles.deth2} ${isOpen1 ? styles.active : ""}`}>
                {/* 선택시 클래스네임 active 추가 */}
                <li>
                  <Link to="/model/model-catalog">모델 카탈로그</Link>
                </li>
                <li>
                  <Link to="/model/custom-model">커스텀 모델</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/dataset">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconDataset />
                  </div>
                  <div className={styles.name}>데이터셋</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconKnowledgeBase />
                  </div>
                  <div className={styles.name}>지식 기반</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/prompt">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconPrompt />
                  </div>
                  <div className={styles.name}>프롬프트</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/learning">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconLearning />
                  </div>
                  <div className={styles.name}>학습</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconDashboard />
                  </div>
                  <div className={styles.name}>대시보드</div>
                </div>
              </Link>
            </li>
            {/* 2뎁스가 있을때 클래스네임 hasDeth2 추가, 클릭시 하위 2뎁스 열림 */}
            <li
              className={`${styles.hasDeth2} ${isOpen2 ? styles.active : ""}`}
              onClick={handleClick2}
            >
              <div className={styles.nameBox}>
                <div className={styles.icon}>
                  <IconInfraMonitor />
                </div>
                <div className={styles.name}>인프라 모니터</div>
                <i className={`${styles.iconArr}`} />
              </div>
              {/* deth2 선택시(페이지 활성화) 메뉴 열려있는 상태 유지, 클래스네임 active 추가 */}
              <ul className={`${styles.deth2} ${isOpen2 ? styles.active : ""}`}>
                {/* 선택시 클래스네임 active 추가 */}
                <li>
                  <Link to="/infra-monitor/monitoring">모니터링</Link>
                </li>
                <li>
                  <Link to="/infra-monitor/event">이벤트</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/member-management">
                <div className={styles.nameBox}>
                  <div className={styles.icon}>
                    <IconMemberManagement />
                  </div>
                  <div className={styles.name}>멤버 관리</div>
                </div>
              </Link>
            </li>
          </ul>

          {/* 사이드바 접기 버튼 - 클릭시 아이콘이 바뀜, 클래스네임 active 추가 */}
          <button
            type="button"
            aria-label="사이드바 접기"
            className={`${styles.btnControl} `}
          >
            <i className={styles.iconControl} />
          </button>
        </nav>

        {/* 네비 구분선 - 드래그 효과 추가해주세요 */}
        <span className={styles.hrBox}>
          <span className={styles.hr}></span>
        </span>
      </div>
    </>
  );
};
