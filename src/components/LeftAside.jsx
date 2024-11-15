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
                    categories.map((category) =>
                        <button className='btn px-0' key={category.category_id}>
                            <NavLink to={`category/${category.category_id}`} 
                                className="w-full h-full flex justify-start items-center px-2">
                                {/* <button className='btn'>{category.category_name}</button> */}
                                {category.category_name}
                            </NavLink>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default LeftAside;