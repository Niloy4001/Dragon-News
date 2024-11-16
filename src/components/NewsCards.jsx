import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCard from './SingleCard';

const NewsCards = () => {
    const { data: news } = useLoaderData()
    console.log(news);

    // console.log(news);

    return (
        <div>
            <h2 className='font-semibold text-xl text-[#403F3F] mb-5'>Dragon News Home</h2>
            <div className='space-y-6'>
                {
                    news.length === 0 ? 
                    <p className='text-3xl font-extrabold text-center mt-60'>No Data Found</p>
                    :
                    news.map(news => <SingleCard news={news} key={news._id}></SingleCard>) 
                }
            </div>
        </div>
    );
};

export default NewsCards;