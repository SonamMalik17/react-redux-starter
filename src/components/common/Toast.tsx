'use client';

import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface toastProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive';
  duration?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface toastActionProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface toastCloseProps {
  className?: string;
  onClick?: () => void;
}

interface toastTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface toastDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface toastViewportProps {
  className?: string;
}

const toastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const toastViewport: React.FC<toastViewportProps> = ({ className = '' }) => {
  return (
    <div
      className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className}`}
    />
  );
};

const Toast: React.FC<toastProps> = ({
  children,
  className = '',
  variant = 'default',
  duration = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!isVisible) return null;

  const variantClasses = {
    default: "border bg-background text-foreground",
    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
  };

  return (
    <div
      className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

const toastAction: React.FC<toastActionProps> = ({ children, className = '', onClick }) => {
  return (
    <button
      className={`inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const toastClose: React.FC<toastCloseProps> = ({ className = '', onClick }) => {
  return (
    <button
      className={`absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 ${className}`}
      onClick={onClick}
    >
      <FaTimes className="h-4 w-4" />
    </button>
  );
};

const toastTitle: React.FC<toastTitleProps> = ({ children, className = '' }) => {
  return (
    <div className={`text-sm font-semibold ${className}`}>
      {children}
    </div>
  );
};

const toastDescription: React.FC<toastDescriptionProps> = ({ children, className = '' }) => {
  return (
    <div className={`text-sm opacity-90 ${className}`}>
      {children}
    </div>
  );
};

type ToastProps = toastProps;
type ToastActionElement = React.ReactElement<typeof toastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  toastProvider,
  toastViewport,
  Toast,
  toastTitle,
  toastDescription,
  toastClose,
  toastAction,
};

export default Toast;