import React from 'react';
import ResidentCard from './ResidentCard';

const Residents = ({residents}) => {
    return (
        <section className='max-w-5xl m-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {
                residents.map((resident)=><ResidentCard key={resident} residentEndPoint={resident}/>)
            }
            </div>
        </section>
    );
};

export default Residents;