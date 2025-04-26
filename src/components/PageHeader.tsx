
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, description, children, className = '' }: PageHeaderProps) => {
  return (
    <div className={`bg-gradient-to-b from-clinic-blue/30 to-white py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-clinic-gray font-serif mb-4">{title}</h1>
          {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
