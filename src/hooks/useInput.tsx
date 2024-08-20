import * as React from "react";

export interface IUseInputBind {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface IUseInput {
    value: string;
    setValue: (val: string) => void;
    reset: () => void;
    bind: IUseInputBind;
}

export const useInput = (initialValue: string): IUseInput => {
    const [value, setValue] = React.useState(initialValue);
    const reset = (): void => {
        setValue("");
    };
    const onChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            if (e.target){
                setValue(e.target.value);
            } else {
                // @ts-ignore
                setValue(e)
            }

        },
        []
    );

    return {
        value,
        reset,
        setValue,
        bind: {
            value,
            onChange,
        },
    };
};

