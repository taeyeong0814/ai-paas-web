import { IconEventOff, IconEventOn, IconPlay, IconStop } from '@/assets/img/icon';
import { BreadCrumb, Select, type SelectSingleValue } from '@innogrid/ui';
import { useState, useEffect } from 'react';
import { useGetClusters } from '@/hooks/service/clusters';
import styles from '../inframonitor.module.scss';

// 클러스터 옵션 타입
type ClusterOption = { text: string; value: string };

// 이벤트 레벨 옵션
type EventLevelOption = { text: string; value: string };
const eventLevelOptions: EventLevelOption[] = [
  { text: 'all', value: 'all' },
  { text: 'normal', value: 'normal' },
  { text: 'warning', value: 'warning' },
];

export default function EventPage() {
  // 클러스터 목록 조회
  const { clusters, isPending: isClustersLoading, isError: isClustersError } = useGetClusters();

  // 클러스터 옵션 생성
  const clusterOptions = clusters.map((cluster) => ({
    text: cluster.id, // 클러스터 ID를 표시명으로 사용
    value: cluster.id,
  }));

  // 상태 관리
  const [selectedCluster, setSelectedCluster] = useState<ClusterOption>();
  const [selectedEventLevel, setSelectedEventLevel] = useState<EventLevelOption>(
    eventLevelOptions[0]
  );
  const [isStreaming, setIsStreaming] = useState(false);

  const onChangeCluster = (option: SelectSingleValue<ClusterOption>) => {
    if (option) {
      setSelectedCluster(option);
    }
  };

  const onChangeEventLevel = (option: SelectSingleValue<EventLevelOption>) => {
    if (option) {
      setSelectedEventLevel(option);
    }
  };

  const handleStreamingToggle = () => {
    setIsStreaming(!isStreaming);
  };

  // 첫 번째 클러스터를 기본값으로 설정
  useEffect(() => {
    if (clusterOptions.length > 0 && !selectedCluster) {
      setSelectedCluster(clusterOptions[0]);
    }
  }, [clusterOptions, selectedCluster]);

  return (
    <main>
      <BreadCrumb
        items={[{ label: '인프라 모니터' }, { label: '이벤트' }]}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">이벤트</h2>
      </div>
      <div className="page-content">
        {/* 상단 컨트롤 영역 */}
        <div className={styles.eventControls}>
          <div className={styles.controlGroup}>
            <label className="page-input_item-name">클러스터</label>
            <Select
              className="page-input_item-data_select"
              options={clusterOptions}
              getOptionLabel={(option) => option.text}
              getOptionValue={(option) => option.value}
              value={selectedCluster}
              onChange={onChangeCluster}
              size="m-small"
              isLoading={isClustersLoading}
              isDisabled={isClustersLoading || isClustersError || clusterOptions.length === 0}
              placeholder={
                isClustersLoading
                  ? '클러스터를 불러오는 중...'
                  : isClustersError
                    ? '클러스터를 불러오는데 실패했습니다'
                    : '클러스터를 선택하세요'
              }
            />
          </div>
          <div className={styles.controlGroup}>
            <label className="page-input_item-name">이벤트 레벨</label>
            <Select
              className="page-input_item-data_select"
              options={eventLevelOptions}
              getOptionLabel={(option) => option.text}
              getOptionValue={(option) => option.value}
              value={selectedEventLevel}
              onChange={onChangeEventLevel}
              size="m-small"
            />
          </div>
        </div>

        <div className={styles.eventBox}>
          <div className={styles.btnBox}>
            {isStreaming ? (
              <button type="button" className={styles.btnStop} onClick={handleStreamingToggle}>
                <span className={styles.iconStop}>
                  <IconStop />
                </span>
                스트리밍 일시정지
              </button>
            ) : (
              <button type="button" className={styles.btnPlay} onClick={handleStreamingToggle}>
                <span className={styles.iconPlay}>
                  <IconPlay />
                </span>
                스트리밍 시작
              </button>
            )}
          </div>
          <div className={styles.palyBox}>
            <hr className={styles.leftLine} />
            <div className={styles.cardBoxLeftInner}>
              <div className={styles.cardBoxLeft}>
                <span className={styles.iconEventOn}>
                  <IconEventOn />
                </span>
                <div className={`${styles.card} ${styles.warning}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-warning">Warning</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
              <div className={styles.cardBoxLeft}>
                <span className={styles.iconEventOn}>
                  <IconEventOn />
                </span>
                <div className={`${styles.card} ${styles.warning}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-warning">Warning</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
              <div className={styles.cardBoxLeft}>
                <span className={styles.iconEventOff}>
                  <IconEventOff />
                </span>
                <div className={`${styles.card} ${styles.normal}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-run">Normal</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
              <div className={styles.cardBoxLeft}>
                <span className={styles.iconEventOn}>
                  <IconEventOn />
                </span>
                <div className={`${styles.card} ${styles.warning}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-warning">Warning</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
            </div>
            <div className={styles.cardBoxRightInner}>
              <div className={styles.cardBoxRight}>
                <span className={styles.iconEventOn}>
                  <IconEventOn />
                </span>
                <div className={`${styles.card} ${styles.warning}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-warning">Warning</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
              <div className={styles.cardBoxRight}>
                <span className={styles.iconEventOff}>
                  <IconEventOff />
                </span>
                <div className={`${styles.card} ${styles.normal}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-run">Normal</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
              <div className={styles.cardBoxRight}>
                <span className={styles.iconEventOff}>
                  <IconEventOff />
                </span>
                <div className={`${styles.card} ${styles.normal}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-run">Normal</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
              <div className={styles.cardBoxRight}>
                <span className={styles.iconEventOn}>
                  <IconEventOn />
                </span>
                <div className={`${styles.card} ${styles.warning}`}>
                  <div className={styles.state}>
                    <div className="table-td-state table-td-state-warning">Warning</div>
                    <span>2025-07-29 10:32</span>
                  </div>
                  <p>Pod/testqa-1748395270316-565cd67b6d-fj2lg</p>
                  <span>Pulling image "testqa"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
