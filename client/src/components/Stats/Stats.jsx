import React, { useState, useEffect } from 'react';
import './Stats.css';

const useAnimatedNumber = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = count;
    const end = target;
    const increment = (end - start) / (duration / 30);

    const animate = () => {
      setCount((prev) => {
        if (prev < end) {
          return Math.min(prev + increment, end);
        } else {
          return end;
        }
      });
    };

    const interval = setInterval(animate, 30);

    return () => clearInterval(interval); 
  }, [target, duration]);

  return Math.floor(count); 
};

function Stats() {
  const [userTemplateCount, setUserTemplateCount] = useState(0);
  const [volunteerTemplateCount, setVolunteerTemplateCount] = useState(0);
  const [campaignTemplateCount, setCampaignTemplateCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9090/api/stats') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        return response.json();
      })
      .then((data) => {
        setUserTemplateCount(data.donors);
        setVolunteerTemplateCount(data.volunteers);
        setCampaignTemplateCount(data.pastCampaigns);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const animatedUserCount = useAnimatedNumber(userTemplateCount);
  const animatedCampaignCount = useAnimatedNumber(campaignTemplateCount);
  const animatedVolunteerTemplateCount = useAnimatedNumber(volunteerTemplateCount);

  if (loading) {
    return <div className="stats-container">Loading...</div>;
  }

  if (error) {
    return <div className="stats-container">Error: {error}</div>;
  }

  return (
    <div className="stats-container flex justify-center">
      <div className="flex justify-center w-fit space-x-8 px-2 py-4 next">
        <div className="text-center">
          <h3 className="text-lg font-bold">Registered</h3>
          <p className="text-4xl font-semibold" style={{ color: '#E70606' }}>{animatedUserCount}</p>
          <h3 className='text-lg font-bold'>Donors</h3>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Successfully Complete</h3>
          <p className="text-4xl font-semibold" style={{ color: '#E70606' }}>{animatedCampaignCount}</p>
          <h3 className='text-lg font-bold'>Blood Donation Campaign</h3>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold">Registered</h3>
          <p className="text-4xl font-semibold" style={{ color: '#E70606' }}>{animatedVolunteerTemplateCount}</p>
          <h3 className='text-lg font-bold'>Volunteers</h3>
        </div>
      </div>
    </div>
  );
}

export default Stats;
