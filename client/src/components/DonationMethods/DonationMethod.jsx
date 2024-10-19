import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Search from '../Search/Search';

function DonationMethod() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [campaignData, setCampaignData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  const allCards = new Array(12).fill(null);

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  // Fetch campaign data
  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await fetch('http://localhost:9090/api/campaign'); 
        const data = await response.json();
        setCampaignData(data);
      } catch (error) {
        console.error('Error fetching campaign data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignData();
  }, []);

  // Filter campaigns based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = campaignData.filter((campaign) =>
        campaign.District.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCampaigns(filtered);
    } else {
      setFilteredCampaigns([]);
    }
  }, [searchTerm, campaignData]);

  return (
    <div className='my-8'>
      <div className='methodOne'>
        <h2 className='text-center font-semibold text-2xl my-6 '>Search And Find Place to Donate Blood</h2>
        <Search onSearch={setSearchTerm} />

        {loading ? (
          <p>Loading campaigns...</p>
        ) : searchTerm ? (
          <>
            <h1 className='text-center text-2xl font-semibold my-8'>
              Blood Donation Place In Your Area
            </h1>

            <div className='grid grid-cols-3 w-3/4 gap-4 m-auto'>
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.slice(0, visibleCards).map((campaign, index) => (
                  <Card key={index} district={campaign.District} date={campaign.Date} title={"Donate"} address={campaign.Address} />
                ))
              ) : (
                <p className='text-center text-red-500 mt-4'>
                  No place found for "{searchTerm}". Try another area.
                </p>
              )}
            </div>

            {visibleCards < filteredCampaigns.length && (
              <button
                onClick={loadMoreCards}
                className='bg-red-500 text-white py-2 px-4 rounded mt-4 block mx-auto'>
                More
              </button>
            )}
          </>
        ) : (
          <p className='text-center text-gray-500 mt-4'>
            Please enter a district to find relevant blood donation campaigns.
          </p>
        )}
      </div>

      <div className='methodTwo'>
        <h1 className='text-center font-semibold text-2xl mb-6 mt-16'>
          Donate Blood through Blood Donation Campaign
        </h1>
        <div className='grid grid-cols-3 w-3/4 gap-4 m-auto'>
          {campaignData.slice(0, visibleCards).map((campaign,index) => (
            <Card key={index} district={campaign.District} date={campaign.Date} title={"Donate"} address={campaign.Address} />
          ))}
        </div>

        {visibleCards < allCards.length && (
          <button 
            onClick={loadMoreCards}
            className='bg-red-500 text-white py-2 px-4 rounded mt-4 block mx-auto'>
            More
          </button>
        )}
      </div>

      <div className='methodThree'>
        <h1 className='text-center font-semibold text-2xl mb-6 mt-16'>
          Donate Blood through Blood Bank
        </h1>
        <div className='grid grid-cols-3 w-3/4 gap-4 m-auto'>
          {allCards.slice(0, visibleCards).map((_, index) => (
            <Card key={index} />
          ))}
        </div>

        {visibleCards < allCards.length && (
          <button 
            onClick={loadMoreCards}
            className='bg-red-500 text-white py-2 px-4 rounded mt-4 block mx-auto'>
            More
          </button>
        )}
      </div>
    </div>
  );
}

export default DonationMethod;
