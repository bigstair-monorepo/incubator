import React from 'react';
import Button from '@atoms/Button';
import Text from '@atoms/Text';

interface TrendingSearchesProps {
  searches: string[]; // Assuming searches is an array of strings
}

const TrendingSearches: React.FC<TrendingSearchesProps> = ({ searches }) => {
  return (
    <div className='flex flex-wrap gap-2 mx-1 justify-center'>
      <Text text='Trending searches: '/>
      {searches.map((trend, index) => (
        <Button
          key={index}
          variant="tertiary"
          borderRadius="15px"
          color='black'
          fontSize="sm">
          {trend}
        </Button>
      ))}
    </div>
  );
};

export default TrendingSearches;
