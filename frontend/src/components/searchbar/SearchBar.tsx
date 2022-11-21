import { useState } from "react";
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons'
import { TextInput } from "../textInput/TextInput";
import { Button } from "../button/Button";

export interface SearchBarProps {
    placeholder: string;
    buttonLabel: string;
    onSearch: (value: string) => void;
}

export const SearchBar = ({ placeholder, buttonLabel, onSearch }: SearchBarProps) => {

    const [value, setValue] = useState('');

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    }

    return (
        <div className="grid grid-flow-row  gap-3 w-full sm:grid-flow-col md:grid-cols-6">
            <div className="col-span-1 md:col-span-5 sm:col-span-4">
                <TextInput.Root inputsize="large">
                    <TextInput.Icon>
                        <MagnifyingGlassIcon className="text-slate-300" />
                    </TextInput.Icon>
                    <TextInput.Input
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    {!value ? '' :
                        <TextInput.Icon>
                            <Cross2Icon onClick={() => setValue('')} className="text-slate-300 hover:text-slate-600" />
                        </TextInput.Icon>
                    }
                </TextInput.Root>
            </div>
            <div className="col-span-1">
                <Button.Root btnsize="large" onClick={() => onSearch(value)}>
                    <Button.Button>{buttonLabel}</Button.Button>
                </Button.Root>
            </div>
        </div>
    );
};