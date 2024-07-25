import "./MainLayout.scss";
import * as React from "react";
import {memo} from "react";

export interface IMainLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const MainLayout: React.FC<IMainLayoutProps> = memo(({children, className}) => {

    const classes = ['main-layout', className].join('')


  return (
      <div className={classes}>
          {children}
      </div>
  );
});

export default MainLayout;
