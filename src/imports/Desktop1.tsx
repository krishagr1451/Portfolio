import svgPaths from "./svg-zruuauq5f8";

function Group() {
  return (
    <div className="absolute contents left-[20px] top-[20px]">
      <div className="absolute h-[78px] left-[20px] top-[20px] w-[79px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 78">
          <ellipse cx="39.5" cy="39" fill="var(--fill-0, #FF0000)" id="Ellipse 2" rx="39.5" ry="39" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[21.84px] leading-[normal] left-[40.54px] not-italic text-[23px] text-white top-[48.08px] w-[37.13px]">logo</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[392px] left-[702px] top-[360px] w-[577px]">
      <div className="absolute inset-[-2.3%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 577 401">
          <g id="Group 6">
            <line id="Line 16" stroke="var(--stroke-0, black)" strokeWidth="9" x2="523.898" y1="4.5" y2="4.5" />
            <line id="Line 17" stroke="var(--stroke-0, black)" x1="53.1024" x2="577" y1="149.028" y2="149.028" />
            <line id="Line 18" stroke="var(--stroke-0, black)" x1="53.1024" x2="577" y1="237.783" y2="237.783" />
            <line id="Line 19" stroke="var(--stroke-0, black)" x1="53.1024" x2="577" y1="311.745" y2="311.745" />
            <line id="Line 20" stroke="var(--stroke-0, black)" x1="53.1024" x2="577" y1="400.5" y2="400.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <div className="absolute bg-[#d9d9d9] h-[141px] left-0 top-0 w-[1461px]" />
      <div className="absolute h-[65px] left-[12px] top-[992px] w-[1440px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 65">
          <ellipse cx="720" cy="32.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" rx="720" ry="32.5" />
        </svg>
      </div>
      <Group />
      <div className="absolute flex h-[33.5px] items-center justify-center left-[719px] top-[958px] w-[2.092px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-91.79deg]">
          <div className="h-[1.046px] relative w-[33.484px]">
            <div className="absolute inset-[-3512.32%_-14.93%_-3422.35%_-12.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7982 73.6086">
                <path d={svgPaths.p13779800} fill="var(--stroke-0, #888585)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[99px] size-[510px] top-[257px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 510 510">
          <circle cx="255" cy="255" fill="var(--fill-0, #D9D9D9)" id="Ellipse 7" r="255" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}