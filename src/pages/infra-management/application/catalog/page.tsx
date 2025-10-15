import { useState } from 'react';
import {
  BreadCrumb,
  Button,
  Pagination,
  SearchInput,
  Select,
  useSearchInputState,
  type SelectSingleValue,
} from '@innogrid/ui';

import ImgCatalog1 from '../../../../assets/img/catalog/img_catalog1.png';
import styles from '../../inframonitor.module.scss';

//breadcrumb
const items = [
  { label: '인프라 모니터', path: '/infra-monitor' },
  { label: '애플리케이션' },
  { label: '카탈로그' },
];

//select option
type OptionType = { text: string; value: string };

const options = [
  { text: '옵션 1', value: 'option1' },
  { text: '옵션 2', value: 'option2' },
  { text: '옵션 3', value: 'option3' },
];

export default function ApplicationCatalogPage() {
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const onChangeSelect = (option: SelectSingleValue<OptionType>) => {
    setSelectedValue(option);
  };

  //SearchInput
  const { searchValue, ...restProps } = useSearchInputState();

  //pagination
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const totalCount = 100;
  const pageSizeOption = [10, 15, 20, 30, 50, 100, 500];

  return (
    <main>
      <BreadCrumb items={items} onNavigate={(path: string) => {}} className="breadcrumbBox" />
      <div className="page-title-box">
        <h2 className="page-title">카탈로그</h2>
      </div>
      <div className="page-content">
        <div className={styles.flexBox}>
          <Select
            className="page-input_item-data_select"
            options={options}
            getOptionLabel={(option) => option.text}
            getOptionValue={(option) => option.value}
            value={selectedValue}
            onChange={onChangeSelect}
            size="m-small"
          />
          <SearchInput size="m-medium" placeholder="검색어를 입력해주세요" {...restProps} />
        </div>
        <div className="page-content-detail-row2 page-mt-24 flex-wrap">
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project. Build great things at any scale! The leading open source
                    automation server, Jenkins provides over 1800 plugins to support building,
                    deploying and automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}>
                    <span>Jenkins</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                  </div>
                  <button type="button" className={styles.btnKeywordNum}>
                    +5
                  </button>
                  <div className={styles.keywordNumList}>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}></div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project. Build great things at any scale! The leading open source
                    automation server, Jenkins provides over 1800 plugins to support building,
                    deploying and automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}>
                    <span>Jenkins</span>
                    <span>Keyword</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project. Build great things at any scale! The leading open source
                    automation server, Jenkins provides over 1800 plugins to support building,
                    deploying and automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}>
                    <span>Jenkins</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                  </div>
                  <button type="button" className={styles.btnKeywordNum}>
                    +5
                  </button>
                  <div className={styles.keywordNumList}>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}></div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project. Build great things at any scale! The leading open source
                    automation server, Jenkins provides over 1800 plugins to support building,
                    deploying and automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}>
                    <span>Jenkins</span>
                    <span>Keyword</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project. Build great things at any scale! The leading open source
                    automation server, Jenkins provides over 1800 plugins to support building,
                    deploying and automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}>
                    <span>Jenkins</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                  </div>
                  <button type="button" className={styles.btnKeywordNum}>
                    +5
                  </button>
                  <div className={styles.keywordNumList}>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                    <span>Keyword</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}></div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
          <div className={styles.catalogBox}>
            <div className={styles.catalogInfo}>
              <div className={styles.catalogImg}>
                <img src={ImgCatalog1} alt="ImgCatalog1" height="84px" width="84px" />
              </div>
              <div className={styles.catalogDesc}>
                <div>
                  <div className={styles.catalogTit}>
                    <p>Jenkins</p>
                    <span>5.0.13</span>
                  </div>
                  <div className={styles.catalogTxt}>
                    Jenkins - Build great things at any scale! The leading open source automation
                    server, Jenkins provides over 1800 plugins to support building, deploying and
                    automating any project. Build great things at any scale! The leading open source
                    automation server, Jenkins provides over 1800 plugins to support building,
                    deploying and automating any project.
                  </div>
                </div>
                <div className={styles.catalogKeyword}>
                  <div className={styles.catalogKeywordDetail}>
                    <span>Jenkins</span>
                    <span>Keyword</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.catalogBtns}>
              <Button onClick={() => alert('Button clicked!')} color="secondary">
                상세 정보
              </Button>
              <Button onClick={() => alert('Button clicked!')} color="focus">
                헬름 배포
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.paginationBox}>
          <Pagination
            page={page}
            pageSizeOption={pageSizeOption}
            size={size}
            totalCount={totalCount}
            onChangePageInput={(event) => setPage(+event.target.value)}
            onChangePageSize={(event) => setSize(+event.target.value)}
            onClickNext={() => setPage(page + 1)}
            onClickPrev={() => setPage(page - 1)}
          />
        </div>
      </div>
    </main>
  );
}
