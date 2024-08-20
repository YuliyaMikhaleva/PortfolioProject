import "./SnapTemplate.scss";
import * as React from "react";
import {memo} from "react";
import SnapContainer from "components/_UiComponents/SnapContainer/SnapContainer.tsx";
import AppHeader from "components/AppHeader/AppHeader.tsx";
import CustomCursor from "components/_UiComponents/CustomCursor/CustomCursor.tsx";
import SnapBlock from "components/_UiComponents/SnapContainer/SnapBlock.tsx";
import AppFooter from "components/AppFooter/AppFooter.tsx";

export interface ISnapTemplateProps {
    children: React.ReactNode;
    className?: string;
}

const SnapTemplate: React.FC<ISnapTemplateProps> = memo(({children, className}) => {

 const classes = [' snap-template', className].join(' ')

  return (
      <SnapContainer className={classes}>
          <AppHeader />
          {children}
          <CustomCursor />
          <SnapBlock>
              <AppFooter />
          </SnapBlock>
      </SnapContainer>
  );
});

export default SnapTemplate;