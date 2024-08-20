import * as React from "react";

import "./Switch.scss";

export interface ISwitchProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  active: boolean;
  onClick(): void;
}

const Switch: React.FunctionComponent<ISwitchProps> = ({
  className,
  disabled,
  active,
  children,
  onClick,
}) => {

  const classes = [
    "switch",
    disabled ? "switch--disabled" : '',
    className
  ].join(' ')

  return (
    <div
      className={classes}
      onClick={(e) => {
        onClick();
      }}
    >
      <div className="switch__container">
        <div
          className={[
             "switch__track",
              active ? "switch__track--active" : "",
            disabled ? "switch__track--disabled" : "",
          ].join(' ')}
        >
          <div
            className={[
                "switch__thumb",
                disabled ? "switch__thumb--disabled" : "",
            ].join(' ')}
          ></div>
        </div>
      </div>
      <div
        className={[
            "switch__label",
          disabled ? "switch__label--disabled" : "",
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

export default Switch;
