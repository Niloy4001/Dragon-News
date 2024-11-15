import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Header from './Header';
import RightAside from './RightAside';

const NewsDetails = () => {
    const navigate = useNavigate()
    const { data } = useLoaderData()
    const { title, details, image_url, author, category_id } = data[0]

//    console.log(navigate);
   

    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
            </header>
            <section className='grid grid-cols-12 gap-6 w-11/12 mx-auto'>
                {/* left side */}
                <div className='col-span-9 border border-[#E7E7E7] rounded-md'>
                    <div className="w-full bg-white shadow-lg rounded-lg">
                        <div className='p-6 h-[700px]'>
                            <img className="w-full h-full object-fill" src={image_url} alt="Card image" />
                        </div>

                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">
                                {title}
                            </h2>

                            <p className="text-sm text-gray-600 mb-4">
                                Published : {author.published_date}
                            </p>

                            <p className="text-gray-700 mb-4">
                                {details}
                            </p>

                            <div>
                                <button 
                                    onClick={()=>navigate(`/category/${category_id}`)}
                                    className="btn rounded-none bg-[#D72050] text-white hover:bg-transparent hover:text-black">
                                    All news in this category
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
                {/* right side */}
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </section>
        </div>
    );
};

export default NewsDetails;