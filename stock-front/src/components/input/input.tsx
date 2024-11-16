import { useState, useEffect } from "react";

interface inputProps {
    setValue: (value: string) => void;
    name: string;
    type: string;
    value: any; 
}

export function InputText({ setValue, name, type, value }: inputProps) {
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
        setValue(value);
        setLocalValue(value);
    }, [value]);

    return (
        <label className="flex gap-4">
            {name}
            <input
                className={`bg-transparent border-[#086632] rounded-lg border-2 ${
                    type === "number" ? "w-14" : "w-26"
                }`}
                value={localValue}
                type={type}
                onChange={(e) => {
                    const newValue = e.target.value;
                    setLocalValue(newValue);
                    setValue(newValue); 
                }}
            />
        </label>
    );
}
