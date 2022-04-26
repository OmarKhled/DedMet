import React, { FC } from "react";

const LoadingSpinner: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`spinner ${className}`}>
      <div className="dot1"></div>
      <div className="dot2"></div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  className: "",
};

export default LoadingSpinner;
