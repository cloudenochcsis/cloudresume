import React, { useState, useEffect } from 'react';

const ViewCounter: React.FC = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await fetch('/api/views');
        const data: { views: number } = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error('Error fetching view count:', error);
      }
    };

    fetchViewCount();
  }, []);

  return <div>Portfolio Views: {views}</div>;
};

export default ViewCounter;