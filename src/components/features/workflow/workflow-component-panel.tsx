import { SearchInput, useSearchInputState } from "innogrid-ui";
import styles from "../../../pages/workflow/workflow.module.scss";

export const WorkflowComponentPanel = () => {
  const { searchValue, ...restProps } = useSearchInputState();

  return (
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
  );
};
