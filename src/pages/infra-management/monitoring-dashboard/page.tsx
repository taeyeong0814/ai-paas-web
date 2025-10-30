import { useState, useEffect, useMemo } from 'react';
import {
  BreadCrumb,
  LineChart,
  Select,
  type SelectSingleValue,
  type SelectMultiValue,
} from '@innogrid/ui';
import { useGetClusters } from '@/hooks/service/clusters';
import { useGetNodes } from '@/hooks/service/nodes';
import styles from '../inframonitor.module.scss';
import { GaugeChart } from '@/components/ui/gauge-chart';

// 클러스터 옵션 타입
type ClusterOption = { text: string; value: string };

// 노드 옵션 타입
type NodeOption = { text: string; value: string };

export default function MonitoringPage() {
  // 클러스터 목록 조회
  const { clusters, isPending: isClustersLoading, isError: isClustersError } = useGetClusters();

  // 클러스터 옵션 생성
  const clusterOptions = clusters.map((cluster) => ({
    text: cluster.id, // 클러스터 ID를 표시명으로 사용
    value: cluster.id,
  }));

  // 상태 관리
  const [selectedCluster, setSelectedCluster] = useState<ClusterOption>();
  const [selectedNodes, setSelectedNodes] = useState<NodeOption[]>([]);

  // 노드 목록 조회
  const {
    data: nodes = [],
    isPending: isNodesLoading,
    isError: isNodesError,
  } = useGetNodes(selectedCluster?.value);

  // 노드 옵션 생성
  const nodeOptions: NodeOption[] = useMemo(
    () =>
      selectedCluster && !isNodesError
        ? [
            ...nodes.map((node) => ({
              text: node.nodeName,
              value: node.nodeName,
            })),
          ]
        : [],
    [selectedCluster, nodes, isNodesError]
  );

  // clusterOptions가 로드되면 첫 번째 클러스터 자동 선택
  if (clusterOptions.length > 0 && !selectedCluster) {
    setSelectedCluster(clusterOptions[0]);
  }

  // 노드 데이터가 로드되면 모든 노드 선택
  useEffect(() => {
    if (selectedCluster && nodes.length > 0) {
      setSelectedNodes(nodeOptions);
    }
  }, [selectedCluster, nodes, nodeOptions]);

  const onChangeCluster = (option: SelectSingleValue<ClusterOption>) => {
    if (option) {
      setSelectedCluster(option);
      setSelectedNodes([]); // 노드 선택 초기화
    }
  };

  const onChangeNode = (option: SelectMultiValue<NodeOption>) => {
    setSelectedNodes(option as NodeOption[]);
  };

  return (
    <main>
      <BreadCrumb
        items={[{ label: '인프라 모니터' }, { label: '모니터링' }]}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">모니터링</h2>
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
            <label className="page-input_item-name">노드</label>
            <div className={styles.nodeSelectContainer}>
              <Select
                className="!w-auto max-w-[480px] min-w-[240px]"
                isMulti
                useCheckboxOption
                options={nodeOptions}
                getOptionLabel={(option) => option.text}
                getOptionValue={(option) => option.value}
                value={selectedNodes}
                onChange={onChangeNode}
                size="m-small"
                isLoading={isNodesLoading}
                isDisabled={isNodesLoading || isNodesError || !selectedCluster}
                placeholder={
                  isNodesLoading
                    ? '노드를 불러오는 중...'
                    : isNodesError
                      ? '노드를 불러오는데 실패했습니다'
                      : !selectedCluster
                        ? '클러스터를 먼저 선택하세요'
                        : '노드를 선택하세요'
                }
              />
            </div>
          </div>
        </div>
        <div className="page-content-detail-col2 page-mt-16">
          <div className="page-detail-round-box page-flex-1 page-mt-0">
            <div className="page-detail-round-name">리소스 요청 및 제한</div>
            <div className="page-detail-round-data">
              <div className="page-content-detail-row2">
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">CPU</div>
                  <div className="page-detail-round-data page-h-216">
                    <div className={styles.chartRow}>
                      <GaugeChart
                        value={76.68}
                        startAngle={240}
                        endAngle={-60}
                        className="size-[176px]"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="absolute top-[35%] text-2xl font-bold text-[#1a1a1a]">
                            74.68%
                          </div>
                          <div className="absolute top-[52%] mt-2 font-[13px] text-[#1a1a1a]">
                            2 / 16 Core
                          </div>
                          <div className="absolute top-[72%] mt-6 text-xs text-[#999]">Request</div>
                        </div>
                      </GaugeChart>
                      <GaugeChart
                        value={12.45}
                        startAngle={240}
                        endAngle={-60}
                        color="green"
                        className="size-[176px]"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="absolute top-[35%] text-2xl font-bold text-[#1a1a1a]">
                            12.45%
                          </div>
                          <div className="absolute top-[52%] mt-2 font-[13px] text-[#1a1a1a]">
                            2 / 16 Core
                          </div>
                          <div className="absolute top-[72%] mt-6 text-xs text-[#999]">Limit</div>
                        </div>
                      </GaugeChart>
                    </div>
                  </div>
                </div>
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">Memory</div>
                  <div className="page-detail-round-data page-h-216">
                    <div className={styles.chartRow}>
                      <GaugeChart
                        value={32.78}
                        startAngle={240}
                        endAngle={-60}
                        color="yellow"
                        className="size-[176px]"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="absolute top-[35%] text-2xl font-bold text-[#1a1a1a]">
                            32.78%
                          </div>
                          <div className="absolute top-[52%] mt-2 font-[13px] text-[#1a1a1a]">
                            2 / 16 Core
                          </div>
                          <div className="absolute top-[72%] mt-6 text-xs text-[#999]">Request</div>
                        </div>
                      </GaugeChart>
                      <GaugeChart
                        value={32.78}
                        startAngle={240}
                        endAngle={-60}
                        color="yellow"
                        className="size-[176px]"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="absolute top-[35%] text-2xl font-bold text-[#1a1a1a]">
                            32.78%
                          </div>
                          <div className="absolute top-[52%] mt-2 font-[13px] text-[#1a1a1a]">
                            2 / 16 Core
                          </div>
                          <div className="absolute top-[72%] mt-6 text-xs text-[#999]">Limit</div>
                        </div>
                      </GaugeChart>
                    </div>
                  </div>
                </div>
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">GPU</div>
                  <div className="page-detail-round-data page-h-216">
                    <div className={styles.chartRow}>
                      <GaugeChart
                        value={12.45}
                        startAngle={240}
                        endAngle={-60}
                        color="green"
                        className="size-[176px]"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="absolute top-[35%] text-2xl font-bold text-[#1a1a1a]">
                            12.45%
                          </div>
                          <div className="absolute top-[52%] mt-2 font-[13px] text-[#1a1a1a]">
                            2 / 16 Core
                          </div>
                          <div className="absolute top-[72%] mt-6 text-xs text-[#999]">Request</div>
                        </div>
                      </GaugeChart>
                      <GaugeChart
                        value={32.78}
                        startAngle={240}
                        endAngle={-60}
                        color="yellow"
                        className="size-[176px]"
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="absolute top-[35%] text-2xl font-bold text-[#1a1a1a]">
                            32.78%
                          </div>
                          <div className="absolute top-[52%] mt-2 font-[13px] text-[#1a1a1a]">
                            2 / 16 Core
                          </div>
                          <div className="absolute top-[72%] mt-6 text-xs text-[#999]">Limit</div>
                        </div>
                      </GaugeChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-detail-round-box page-flex-1">
            <div className="page-detail-round-name">리소스 현황</div>
            <div className="page-detail-round-data">
              <div className="page-content-detail-row2">
                <div className={styles.chartRow}>
                  <GaugeChart
                    value={100.0}
                    startAngle={90}
                    endAngle={-270}
                    color="blue"
                    className="size-[176px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="absolute top-[18%] mt-2 font-[13px] text-[#1a1a1a]">CPU</div>
                      <div className="absolute top-[38%] text-2xl font-bold text-[#1a1a1a]">
                        100.00%
                      </div>
                      <div className="absolute top-[50%] mt-6 text-xs text-[#999]">
                        34.8 of 104.94 GiB
                      </div>
                    </div>
                  </GaugeChart>
                  <GaugeChart
                    value={64.92}
                    startAngle={90}
                    endAngle={-270}
                    color="blue"
                    className="size-[176px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="absolute top-[18%] mt-2 font-[13px] text-[#1a1a1a]">
                        메모리
                      </div>
                      <div className="absolute top-[38%] text-2xl font-bold text-[#1a1a1a]">
                        64.92%
                      </div>
                      <div className="absolute top-[50%] mt-6 text-xs text-[#999]">
                        34.8 of 104.94 GiB
                      </div>
                    </div>
                  </GaugeChart>
                  <GaugeChart
                    value={12.82}
                    startAngle={90}
                    endAngle={-270}
                    color="blue"
                    className="size-[176px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="absolute top-[18%] mt-2 font-[13px] text-[#1a1a1a]">
                        파일 시스템
                      </div>
                      <div className="absolute top-[38%] text-2xl font-bold text-[#1a1a1a]">
                        12.82%
                      </div>
                      <div className="absolute top-[50%] mt-6 text-xs text-[#999]">
                        34.8 of 104.94 GiB
                      </div>
                    </div>
                  </GaugeChart>
                  <GaugeChart
                    value={39.25}
                    startAngle={90}
                    endAngle={-270}
                    color="blue"
                    className="size-[176px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="absolute top-[18%] mt-2 font-[13px] text-[#1a1a1a]">
                        영구 볼륨
                      </div>
                      <div className="absolute top-[38%] text-2xl font-bold text-[#1a1a1a]">
                        39.25%
                      </div>
                      <div className="absolute top-[50%] mt-6 text-xs text-[#999]">
                        34.8 of 104.94 GiB
                      </div>
                    </div>
                  </GaugeChart>
                  <GaugeChart
                    value={64.92}
                    startAngle={90}
                    endAngle={-270}
                    color="blue"
                    className="size-[176px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="absolute top-[18%] mt-2 font-[13px] text-[#1a1a1a]">파드</div>
                      <div className="absolute top-[38%] text-2xl font-bold text-[#1a1a1a]">
                        64.92%
                      </div>
                      <div className="absolute top-[50%] mt-6 text-xs text-[#999]">
                        34.8 of 104.94
                      </div>
                    </div>
                  </GaugeChart>
                  <GaugeChart
                    value={39.25}
                    startAngle={90}
                    endAngle={-270}
                    color="blue"
                    className="size-[176px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="absolute top-[18%] mt-2 font-[13px] text-[#1a1a1a]">GPU</div>
                      <div className="absolute top-[38%] text-2xl font-bold text-[#1a1a1a]">
                        39.25%
                      </div>
                      <div className="absolute top-[50%] mt-6 text-xs text-[#999]">
                        34.8 of 104.94
                      </div>
                    </div>
                  </GaugeChart>
                </div>
              </div>
            </div>
          </div>
          <div className="page-detail-round-box page-flex-1">
            <div className="page-detail-round-name">성능 지표</div>
            <div className="page-detail-round-data">
              <div className="page-content-detail-row2">
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">CPU</div>
                  <div className="page-detail-round-data page-h-548 page-p-24">
                    <LineChart
                      xDataKey="name"
                      yDataKey={['workflow1']}
                      data={[
                        {
                          name: '2022.04.12',
                          workflow1: 120,
                        },
                        {
                          name: '24',
                          workflow1: 162,
                        },
                        {
                          name: '25',
                          workflow1: 118,
                        },
                        {
                          name: '26',
                          workflow1: 131,
                        },
                        {
                          name: '27',
                          workflow1: 85,
                        },
                        {
                          name: '2022.04.28',
                          workflow1: 81,
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">CPU load average</div>
                  <div className="page-detail-round-data page-h-548 page-p-24">
                    <LineChart
                      xDataKey="name"
                      yDataKey={['workflow1']}
                      data={[
                        {
                          name: '2022.04.12',
                          workflow1: 120,
                        },
                        {
                          name: '24',
                          workflow1: 162,
                        },
                        {
                          name: '25',
                          workflow1: 118,
                        },
                        {
                          name: '26',
                          workflow1: 131,
                        },
                        {
                          name: '27',
                          workflow1: 85,
                        },
                        {
                          name: '2022.04.28',
                          workflow1: 81,
                        },
                      ]}
                    />
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
