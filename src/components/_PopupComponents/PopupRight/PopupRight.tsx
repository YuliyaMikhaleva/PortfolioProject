import * as React from "react";
import "./PopupRight.scss";
import {useEffect, useState} from "react";
import {setOverflowHidden, setOverflowNo} from "helpers/overflowPopup.ts";
// @ts-ignore
import CloseIcon from "../../../assets/icons/_UiComponents/CloseIcon.svg?react"
export interface IHeaderMobileMenuProps {
    className?: string
    showPopup: boolean
    closePopup: () => void
    children: React.ReactNode
}

const PopupRight: React.FunctionComponent<IHeaderMobileMenuProps> = ({
                                                                       className,
                                                                       showPopup,
                                                                       closePopup,
                                                                       children
                                                                   }) => {
    const classes = ["popup-right", className, showPopup && 'popup-right--active'].join(' ');
    const [pageScrollTop, setPageScrollTop] = useState<number>(0)

    useEffect(() => {
        const pageYOffset = window.pageYOffset;
        if (showPopup) {
            setPageScrollTop(pageYOffset)
            setOverflowHidden(pageYOffset)
        } else {
            setOverflowNo()
            window.scrollTo(0, pageScrollTop);
            setTimeout(() => {
                setPageScrollTop(0)
            }, 200);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showPopup]);

    return (
        <div className={classes} onClick={closePopup}>
            <div className="popup-right__inner" onClick={event => event.stopPropagation()}>
                <div className="popup-right__close-btn" onClick={closePopup}>
                    <CloseIcon />
                </div>
                {children}
            </div>
        </div>
    )
};

export default PopupRight;
