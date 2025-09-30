'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  align = 'end',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleTriggerClick}>
        {trigger}
      </div>

      {isOpen && (
        <div className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${align === 'end' ? 'right-0' : align === 'start' ? 'left-0' : 'left-1/2 transform -translate-x-1/2'} ${className}`}>
          <div onClick={() => setIsOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Additional components for compatibility
const DropdownMenuTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => <>{children}</>;
const DropdownMenuContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => <div className={className}>{children}</div>;
const DropdownMenuLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="px-2 py-1.5 text-sm font-semibold">{children}</div>;
const DropdownMenuSeparator: React.FC = () => <div className="-mx-1 my-1 h-px bg-muted" />;
const DropdownMenuCheckboxItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: () => void;
  className?: string;
}> = ({ children, checked = false, onCheckedChange, className = '' }) => (
  <div
    className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${className}`}
    onClick={onCheckedChange}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {checked && <span className="h-2 w-2 bg-current rounded-full" />}
    </span>
    <span className="pl-6">{children}</span>
  </div>
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
};
export default DropdownMenu;