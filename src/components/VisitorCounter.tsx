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
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
        <span className="material-symbols-outlined text-[#0da6f2]">visibility</span>
        {loading ? (
          <span className="text-gray-300">Loading visitors...</span>
        ) : error ? (
          <span className="text-gray-400">Visitor count unavailable</span>
        ) : (
          <span className="text-white font-medium">
            {count?.toLocaleString()} {count === 1 ? 'visitor' : 'visitors'}
          </span>
        )}
      </div>
    </div>
  );
};

export default VisitorCounter;
