import { useState } from "react";
import { BreadCrumb, Select, type SelectSingleValue } from "innogrid-ui";

import { IconHexagon } from "../../../assets/img/icon";
import styles from "../inframonitor.module.scss";

//breadcrumb
const items = [
  { label: "인프라 모니터", path: "/infra-monitor" },
  { label: "모니터링" },
];

//select option
type OptionType = { text: string; value: string };

const options = [
  { text: "옵션 1", value: "option1" },
  { text: "옵션 2", value: "option2" },
  { text: "옵션 3", value: "option3" },
];

export default function MonitoringPage() {
  //select
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const onChangeSelect = (option: SelectSingleValue<OptionType>) => {
    setSelectedValue(option);
  };

  return (
    <main>
      <BreadCrumb
        items={items}
        onNavigate={(path: string) => {}}
        className="breadcrumbBox"
      />
      <div className="page-title-box">
        <h2 className="page-title">모니터링</h2>
      </div>
      <div className="page-content">
        <Select
          className="page-input_item-data_select"
          options={options}
          getOptionLabel={(option) => option.text}
          getOptionValue={(option) => option.value}
          value={selectedValue}
          onChange={onChangeSelect}
        />
        <div className="page-content-detail-col2 page-mt-16">
          <div className="page-detail-round-box page-flex-1 page-mt-0">
            <div className="page-detail-round-name">리소스 요청 및 제한</div>
            <div className="page-detail-round-data">
              <div className="page-content-detail-row2">
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">CPU</div>
                  <div className="page-detail-round-data page-h-216">
                    <div className={styles.chartRow}>
                      <div className={styles.chartBox}>
                        <div className={styles.chartCount}>124 / 248</div>
                        <div className={styles.chartLegend}>Core</div>
                        <div className={styles.chartName}>Request</div>
                      </div>
                      <div className={styles.chartBox}>
                        <div className={styles.chartCount}>124 / 248</div>
                        <div className={styles.chartLegend}>Core</div>
                        <div className={styles.chartName}>Limit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">Memory</div>
                  <div className="page-detail-round-data page-h-216">
                    <div className={styles.chartRow}>
                      <div className={styles.chartBox}>
                        <div className={styles.chartCount}>124 / 248</div>
                        <div className={styles.chartLegend}>Core</div>
                        <div className={styles.chartName}>Request</div>
                      </div>
                      <div className={styles.chartBox}>
                        <div className={styles.chartCount}>124 / 248</div>
                        <div className={styles.chartLegend}>Core</div>
                        <div className={styles.chartName}>Limit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">GPU</div>
                  <div className="page-detail-round-data page-h-216">
                    <div className={styles.chartRow}>
                      <div className={styles.chartBox}>
                        <div className={styles.chartCount}>25 / 84</div>
                        <div className={styles.chartLegend}>Core</div>
                        <div className={styles.chartName}>Request</div>
                      </div>
                      <div className={styles.chartBox}>
                        <div className={styles.chartCount}>22 / 58</div>
                        <div className={styles.chartLegend}>Core</div>
                        <div className={styles.chartName}>Limit</div>
                      </div>
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
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>34</div>
                    <div className={styles.chartLegend}>CPU</div>
                  </div>
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>58</div>
                    <div className={styles.chartLegend}>Memory</div>
                  </div>
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>152</div>
                    <div className={styles.chartLegend}>File system</div>
                  </div>
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>52.535</div>
                    <div className={styles.chartLegend}>Network in</div>
                  </div>
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>458</div>
                    <div className={styles.chartLegend}>Network out</div>
                  </div>
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>536</div>
                    <div className={styles.chartLegend}>Persistent volume</div>
                  </div>
                  <div className={styles.chartBox}>
                    <div className={styles.chartCount}>0.568 GPU</div>
                    <div className={styles.chartLegend}>GPU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-detail-round-box page-flex-1">
            <div className="page-detail-round-name">파드</div>
            <div className="page-detail-round-data">
              <div className={styles.symbolBox}>
                <IconHexagon />
                <em>38</em>
              </div>
              <div className="page-h-240">테이블이 들어갑니다.</div>
            </div>
          </div>
          <div className="page-detail-round-box page-flex-1">
            <div className="page-detail-round-name">성능 지표</div>
            <div className="page-detail-round-data">
              <div className="page-content-detail-row2">
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">CPU</div>
                  <div className="page-detail-round-data page-h-548 page-p-24">
                    차트 그래프 or 그래픽 요소
                  </div>
                </div>
                <div className="page-detail-round-box page-detail-round-color page-flex-1 page-mt-0">
                  <div className="page-detail-round-name">CPU load average</div>
                  <div className="page-detail-round-data page-h-548 page-p-24">
                    차트 그래프 or 그래픽 요소
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
