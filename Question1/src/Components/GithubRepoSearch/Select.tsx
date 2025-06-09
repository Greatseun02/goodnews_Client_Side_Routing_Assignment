import type { setState } from '../../utils/types';
import { useState, useEffect, useRef } from 'react';


type selectProps = {
    options: {
        value: string;
        label: string;
    }[];
    title: string
    selectedValue: string;
    setSelectedValue: setState<string>;
}



export default function Select({ options, title, setSelectedValue}: selectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(options[0].label);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (selectRef.current && !selectRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:{value:string, label:string}) => {
    setSelectedValue(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false);
  };

  return (
    <div className='select' ref={selectRef} onClick={handleToggle}>
        <div className='label'>
            <p className='title-text'>{title}</p>
            <p className='label-text'>{selectedLabel} <span className='rotate'>›</span></p>
        </div>
        <div className='options-container'>
            {
                isOpen &&
                <div className='options'>
                    {
                        options.map((option)=> <div className='option' key={option.label} onClick={()=>{handleOptionClick(option)}} >{option.label}</div>)
                    }
                </div>
            }
        </div>
    </div>
  )
}
