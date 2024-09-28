import React,{ useState, useEffect, useRef } from "react";

type RangeSliderProps = {
  initialMin: string,
  initialMax: string,
  min: string,
  max: string,
  step: string,
  priceCap: string,
}

type ProgressRef = {
  current: {
    style: {
      left: string | string,
      right: string | string,
    }
  }
}

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap }: RangeSliderProps) => {
  const progressRef = useRef() as any
  const [minValue, setMinValue] = useState<string>(initialMin);
  const [maxValue, setMaxValue] = useState<string>(initialMax);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(maxValue) - Number(minValue) >= Number(priceCap) && maxValue <= max) {
      if (Number(e.target.value) > Number(maxValue)) {
      } else {
        setMinValue(e.target.value);
      }
    } else {
      if (Number(e.target.value) < Number(minValue)) {
        setMinValue(e.target.value);
      }
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(maxValue) - Number(minValue) >= Number(priceCap) && maxValue <= max) {
      if (Number(e.target.value) < Number(minValue)) {
      } else {
        setMaxValue(e.target.value);
      }
    } else {
      if (Number(e.target.value) > Number(maxValue)) {
        setMaxValue(e.target.value);
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (Number(minValue) / Number(max)) * Number(step) + "%";
    progressRef.current.style.right = Number(step) - (Number(maxValue) / Number(max)) * Number(step) + "%";
  }, [minValue, maxValue, max, step]);

  return (
    <div className=" grid place-items-center">
      <div className="flex flex-col w-96 rounded-lg px-6 py-4">

        <div className="mb-4">
          <div className="slider relative h-1 rounded-md bg-[#515151]">
            <div
              className="progress absolute h-1 bg-[#CA323D] rounded "
              ref={progressRef}
            ></div>
          </div>

          <div className="range-input relative  ">
            <input
              onChange={handleMin}
              type="range"
              min={Number(min)}
              step={Number(step)}
              max={Number(max)}
              value={Number(minValue)}
              className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none accent-white "
            />

            <input
              onChange={handleMax}
              type="range"
              min={Number(min)}
              step={Number(step)}
              max={Number(max)}
              value={Number(maxValue)}
              className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none accent-white "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;