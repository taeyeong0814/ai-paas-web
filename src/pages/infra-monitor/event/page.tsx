import { TimelineGraph } from '@/components/ui/timeline-graph';
import { BreadCrumb, Button, Select, type SelectSingleValue } from 'innogrid-ui';
import { useState } from 'react';

//select option
type OptionType = { text: string; value: string };

const options = [
  { text: '옵션 1', value: 'option1' },
  { text: '옵션 2', value: 'option2' },
  { text: '옵션 3', value: 'option3' },
];

export default function EventPage() {
  //select
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const onChangeSelect = (option: SelectSingleValue<OptionType>) => {
    setSelectedValue(option);
  };

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
        <Select
          className="page-input_item-data_select"
          options={options}
          getOptionLabel={(option) => option.text}
          getOptionValue={(option) => option.value}
          value={selectedValue}
          onChange={onChangeSelect}
        />
        <div className="mt-4 rounded-lg border border-[#DEDEDE] bg-[#F9F9F9]">
          <div className="p-4">
            <Button color="tertiary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path d="M2.5 11.5H0V0.5H2.5V11.5ZM8 11.5H5.5V0.5H8V11.5Z" fill="#999999" />
              </svg>
              <span className="ml-1.5">스트리밍 일시정지</span>
            </Button>
          </div>
          <TimelineGraph></TimelineGraph>;
        </div>
      </div>
    </main>
  );
}
