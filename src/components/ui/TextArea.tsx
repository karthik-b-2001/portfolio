import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, id, className = '', ...props }: TextAreaProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
        ${className}`}
      {...props}
    />
  </div>
);

export default TextArea;