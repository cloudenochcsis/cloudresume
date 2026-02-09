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
        setError(err instanceof Error ? err.message : 'Failed to fetch visitor count');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] transition-all duration-300 hover:border-white/10">
        <span className="flex items-center justify-center w-5 h-5">
          <svg className="w-4 h-4 text-[#0da6f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        {loading ? (
          <span className="text-gray-500 text-sm">Loading...</span>
        ) : error ? (
          <span className="text-gray-600 text-sm">Visitor count unavailable</span>
        ) : (
          <span className="text-gray-400 text-sm font-medium count-animate">
            <span className="text-white font-semibold">{count?.toLocaleString()}</span>{' '}
            {count === 1 ? 'visitor' : 'visitors'}
          </span>
        )}
      </div>
    </div>
  );
};

export default VisitorCounter;
