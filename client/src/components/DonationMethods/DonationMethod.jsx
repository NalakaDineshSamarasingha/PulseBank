import React, { useState } from 'react';
import Card from '../Card/Card';
import Search from '../Search/Search';

function DonationMethod() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const allCampaigns = [
    { id: 1, district: 'Colombo' },
    { id: 2, district: 'Gampaha' },
    { id: 3, district: 'Kandy' },
    { id: 4, district: 'Matara' },
    { id: 5, district: 'Galle' },
    { id: 6, district: 'Kurunegala' },
    { id: 7, district: 'Colombo' },
    { id: 8, district: 'Kandy' },
    { id: 9, district: 'Nuwara Eliya' },
    { id: 10, district: 'Ratnapura' },
    { id: 11, district: 'Anuradhapura' },
    { id: 12, district: 'Jaffna' }
  ];

  const allCards = new Array(12).fill(null);

  const filteredCampaigns = allCampaigns.filter((campaign) =>
    campaign.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <div className='my-8'>
      <div className='methodOne '>
        <h2 className='text-center font-semibold text-2xl my-6 '>Search And Find Place to Donate Blood</h2>
        <Search onSearch={setSearchTerm} />

        {searchTerm ? (
          <>
            <h1 className='text-center text-2xl font-semibold my-8'>
              Blood Donation Place In Your Area
            </h1>

            <div className='grid grid-cols-3 w-3/4 gap-4 m-auto'>
              {filteredCampaigns.slice(0, visibleCards).map((campaign, index) => (
                <Card key={index} district={campaign.district} />
              ))}
            </div>

            {visibleCards < filteredCampaigns.length && (
              <button
                onClick={loadMoreCards}
                className='bg-red-500 text-white py-2 px-4 rounded mt-4 block mx-auto'>
                More
              </button>
            )}

            {filteredCampaigns.length === 0 && (
              <p className='text-center text-red-500 mt-4'>
                No place found for "{searchTerm} ! Try another area."
              </p>
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
          {}
          {allCards.slice(0, visibleCards).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        {}
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
          {}
          {allCards.slice(0, visibleCards).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        {}
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
