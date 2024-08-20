import * as React from "react";

export const useSwitch = (initialValue: boolean) => {
    const [value, setValue] = React.useState(initialValue);

    const toggle = () => {
        setValue(!value);
    };

    return { value, toggle, setValue };
};
