import React, { FC, useEffect, useState } from 'react';

interface VisitorCounterProps {
  className?: string;
}

const VisitorCounter: FC<VisitorCounterProps> = ({ className }) => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_COUNTER_API_URL || '/api/counter', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (typeof data.count !== 'number') {
          throw new Error('Invalid response format');
        }

        setCount(data.count);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load visitor count';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  if (loading) {
    return <div className={className}>Loading visitor count...</div>;
  }

  if (error) {
    return <div className={className}>Error loading visitor count</div>;
  }

  return (
    <div className={className}>
      <p className="text-sm text-gray-600 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold">{count?.toLocaleString()}</span> visitors
      </p>
    </div>
  );
};

export default VisitorCounter;
