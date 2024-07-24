import "./ContainerTemplate.scss";
import * as React from "react";
import {memo} from "react";

export interface IContainerProps {
    children: React.ReactNode;
    className?: string;
    allWidth?: string;
}

const ContainerTemplate: React.FC<IContainerProps> = memo(({children, className, allWidth}) => {

    const classes = ['container-template', className, allWidth ? "container-template--all-width" : ""].join('')


  return (
      <div className={classes}>
          {children}
      </div>
  );
});

export default ContainerTemplate;
