'use client';

import React, { useState, useEffect } from 'react';

interface VisitorCounterProps {
  className?: string;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ className = '' }) => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/counter');
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setCount(data.count);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      data-testid="visitor-counter"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-terminal-900 border border-terminal-800 text-xs font-mono text-slate-400 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span>Visitors:</span>
      {loading ? (
        <span className="text-slate-500 animate-pulse">...</span>
      ) : error ? (
        <span className="text-slate-500 font-mono">live</span>
      ) : (
        <span className="font-semibold text-white">{count?.toLocaleString()}</span>
      )}
    </div>
  );
};

export default VisitorCounter;
