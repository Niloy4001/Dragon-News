import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [categories, setCategories] = useState([])
    // const {data} = categories
    // console.log(categories);


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])


    return (
        <div>
            <h2 className='font-semibold text-xl text-[#403F3F]'> All Category {categories.length}</h2>
            <div className='flex flex-col gap-2 w-full'>
                {
                    categories.map((category) => <NavLink to={`category/${category.category_id}`} key={category.category_id} className="w-full text-[#9F9F9F] font-medium text-xl"><button className='btn bg-base-300 rounded-none  w-full flex justify-start '>{category.category_name}</button></NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;