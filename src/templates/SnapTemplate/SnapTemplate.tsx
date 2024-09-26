import "./SnapTemplate.scss";
import * as React from "react";
import {memo, useEffect, useState} from "react";
import SnapContainer from "components/_UiComponents/SnapContainer/SnapContainer.tsx";
import AppHeader from "components/AppHeader/AppHeader.tsx";
import CustomCursor from "components/_UiComponents/CustomCursor/CustomCursor.tsx";
import SnapBlock from "components/_UiComponents/SnapContainer/SnapBlock.tsx";
import AppFooter from "components/AppFooter/AppFooter.tsx";
import Button from "components/_UiComponents/Button/Button.tsx";

export interface ISnapTemplateProps {
    children: React.ReactNode;
    className?: string;
}

const SnapTemplate: React.FC<ISnapTemplateProps> = memo(({children, className}) => {
 const [visibleButton, setVisibleButton] = useState(false);
 const classes = [' snap-template', className].join(' ');


    useEffect(() => {
        const snapContainer = document.querySelector('.snap-container');
        if (snapContainer) {
            snapContainer.addEventListener('scroll', () => {
                if (snapContainer.scrollTop === 0) {
                    setVisibleButton(false);
                } else {
                    setVisibleButton(true)
                }
            });
        }
    }, []);

    const upHandler = () => {
        const snapContainer = document.querySelector('.snap-container');
        if (snapContainer) {
            snapContainer.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }
    }
  return (
      <SnapContainer className={classes}>
          <AppHeader />
          {children}
          <CustomCursor />
          <SnapBlock>
              <AppFooter />
          </SnapBlock>
          {visibleButton && (
              <Button circle className="app__up-button" onClick={upHandler}>Наверх</Button>
          )}
      </SnapContainer>
  );
});

export default SnapTemplate;