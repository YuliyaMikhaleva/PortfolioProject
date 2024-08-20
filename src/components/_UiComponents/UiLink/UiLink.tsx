import "./UiLink.scss"
import React, {memo} from "react";

export interface IUiLinkProps {
    className?: string,
    href?: string,
    children?: React.ReactNode
}

const UiLink: React.FC<IUiLinkProps> = memo(({className, href, children}) => {

    const classes = [
        'ui-link',
        className

    ].join(' ');


    return (
        <a href={href} className={classes}>
            {children}
        </a>
    )
});

export default UiLink