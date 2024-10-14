import React, { Suspense, useState, useEffect } from 'react';
import Nav from '../components/Navbar/Nav';
import Hero from '../components/Hero/Hero';


const Volunteer = React.lazy(() => import('../components/Volunteer/Volunteer'));
const Campaign = React.lazy(() => import('../components/Campaign/Campaign'));
const Stats = React.lazy(() => import('../components/Stats/Stats'));

function Home() {
  const [isInView, setIsInView] = useState({
    volunteer: false,
    campaign: false,
    stats: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const volunteerElement = document.getElementById('volunteer');
      const campaignElement = document.getElementById('campaign');
      const statsElement = document.getElementById('stats');

      setIsInView({
        volunteer: volunteerElement && volunteerElement.getBoundingClientRect().top <= window.innerHeight,
        campaign: campaignElement && campaignElement.getBoundingClientRect().top <= window.innerHeight,
        stats: statsElement && statsElement.getBoundingClientRect().top <= window.innerHeight,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Hero />
      <div id="volunteer">
        <Suspense fallback={<div>Loading Volunteer...</div>}>
          {isInView.volunteer && <Volunteer />}
        </Suspense>
      </div>
      <div id="campaign">
        <Suspense fallback={<div>Loading Campaign...</div>}>
          {isInView.campaign && <Campaign />}
        </Suspense>
      </div>
      <div id="stats">
        <Suspense fallback={<div>Loading Stats...</div>}>
          {isInView.stats && <Stats />}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
