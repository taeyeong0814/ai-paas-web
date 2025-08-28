const data = [
  {
    status: 'Warning',
    timestamp: '2024-06-25 14:23:45',
    name: 'Pod/testqa-1748395270316-fj2lg',
    description: "Pulling Image 'testqa'",
  },
  {
    status: 'Normal',
    timestamp: '2024-06-25 14:23:45',
    name: 'Pod/testqa-1748395270316-fj2lg',
    description: "Pulling Image 'testqa'",
  },
  {
    status: 'Noraml',
    timestamp: '2024-06-25 14:23:45',
    name: 'Pod/testqa-1748395270316-fj2lg',
    description: "Pulling Image 'testqa'",
  },
  {
    status: 'Warning',
    timestamp: '2024-06-25 14:23:45',
    name: 'Pod/testqa-1748395270316-fj2lg',
    description: "Pulling Image 'testqa'",
  },
];

export const TimelineGraph = () => {
  return (
    <div className="flex flex-[1_0_0] items-start self-stretch px-9 py-4">
      <div className="relative flex h-[810px] w-3.5 justify-center">
        <div className="h-[803px] w-1 shrink-0 rounded-[10px] bg-[#DEDEDE]" />
        <div className="absolute size-3.5 rounded-full bg-[#DEDEDE]" />
        {data.map((item, index) => (
          <div
            key={index}
            className="absolute flex items-center"
            style={{ top: `${index * 77 + 59}px` }}
          >
            <TimeNode isActive={item.status === 'Warning'} />
            {index % 2 === 0 ? (
              <>
                <div className="absolute left-6 h-0 w-[38px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="2"
                    viewBox="0 0 38 2"
                    fill="none"
                  >
                    <path d="M0 1H38" stroke="#CFCFCF" stroke-dasharray="2 2" />
                  </svg>
                </div>
                <div className="absolute left-16">
                  <TimelineCard />
                </div>
              </>
            ) : (
              <>
                <div className="absolute left-6 h-0 w-[840px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="840"
                    height="2"
                    viewBox="0 0 840 2"
                    fill="none"
                  >
                    <path d="M0 1H840" stroke="#CFCFCF" stroke-dasharray="2 2" />
                  </svg>
                </div>
                <div className="absolute left-[840px]">
                  <TimelineCard />
                </div>
              </>
            )}
          </div>
        ))}

        {/* <div className="absolute top-[59px] flex items-center">
          <TimeNode isActive />
          <div className="absolute left-6 h-0 w-[38px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="2"
              viewBox="0 0 38 2"
              fill="none"
            >
              <path d="M0 1H38" stroke="#CFCFCF" stroke-dasharray="2 2" />
            </svg>
          </div>
          <div className="absolute left-16">
            <TimelineCard />
          </div>
        </div>

        <div className="absolute top-[136px] flex items-center">
          <TimeNode />
          <div className="absolute left-6 h-0 w-[840px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="840"
              height="2"
              viewBox="0 0 840 2"
              fill="none"
            >
              <path d="M0 1H840" stroke="#CFCFCF" stroke-dasharray="2 2" />
            </svg>
          </div>
          <div className="absolute left-[840px]">
            <TimelineCard />
          </div>
        </div>

        <div className="absolute top-[210px] flex items-center">
          <TimeNode isActive />
          <div className="absolute left-6 h-0 w-[38px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="2"
              viewBox="0 0 38 2"
              fill="none"
            >
              <path d="M0 1H38" stroke="#CFCFCF" stroke-dasharray="2 2" />
            </svg>
          </div>
          <div className="absolute left-16">
            <TimelineCard />
          </div>
        </div> */}
      </div>
    </div>
  );
};

const TimelineCard = () => {
  return (
    <div className="flex w-[750px] flex-col items-start gap-3.5 rounded-md border-l-6 border-l-[#F5AB00] bg-white pt-4 pr-5 pb-5 pl-6 shadow-[3px_4px_6px_0_rgba(0,0,0,0.10)]">
      <div className="flex items-center justify-between self-stretch">
        <div className="flex h-6 items-center justify-center rounded-[20px] bg-[#FDFAE3] px-2.5 pb-0.5">
          <div className="text-[11px] font-medium -tracking-[0.055px] text-[#F5AB00]">Warning</div>
        </div>
        <div className="text-xs leading-[150%] font-medium -tracking-[-0.06px] text-[#999]">
          2025-07-29 10:32
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch px-0.5">
        <div className="text-xs leading-[150%] font-medium -tracking-[-0.06px] text-[#06F]">
          Pod/testqa-1748395270316-565cd67b6d-fj2lg
        </div>
        <div className="self-stretch text-xs leading-[150%] font-medium -tracking-[-0.06px] text-[#525252]">
          Pulling image "testqa"
        </div>
      </div>
    </div>
  );
};

const TimeNode = ({ isActive = false }) => {
  if (!isActive) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <circle cx="17" cy="17" r="5" fill="white" stroke="#DEDEDE" stroke-width="4" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
      <g filter="url(#filter0_d_3045_40833)">
        <circle cx="17" cy="17" r="7" fill="white" />
        <circle cx="17" cy="17" r="5" stroke="#F5AB00" stroke-width="4" />
      </g>
      <defs>
        <filter
          id="filter0_d_3045_40833"
          x="0"
          y="0"
          width="34"
          height="34"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.960784 0 0 0 0 0.670588 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3045_40833" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3045_40833"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
