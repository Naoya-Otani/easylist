import { useState, useEffect, FC } from "react";

const AvgStar: FC<{ reputationSum: number[] }> = ({ reputationSum }) => {
  const [average, setAverage] = useState(0);

  // 平均値の計算
  const calculateAverage = (arr: number[]) => {
    if (arr.length === 0) {
      return 0;
    }
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  };

  // 平均値の小数点第一位の判定
  const isDecimalLessThan5 = (num: number) => {
    const decimal = num % 1;
    return decimal <= 0.5;
  };

  // コンポーネントの描画時に平均値を計算
  useEffect(() => {
    const avg = calculateAverage(reputationSum);
    setAverage(avg);
  }, [reputationSum]);

  return (
    <div className="flex items-center mb-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <svg
          key={index}
          aria-hidden="true"
          className={`w-5 h-5 ${
            index <= Math.ceil(average) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
      <p className="ml-2 text-gray-500 pb-[2px]">{average.toFixed(1)}</p>
    </div>
  );
};

export default AvgStar;
