import { FC } from "react";

const ProgressBar: FC<{ stage: number }> = ({ stage }) => {
  return (
    <div className="progressBar">
      <div className="bar"></div>
      <div className={`stage stage1${stage == 1 ? " active" : ""}`}>1</div>
      <div className={`stage stage2${stage == 2 ? " active" : ""}`}>2</div>
    </div>
  );
};

export default ProgressBar;
