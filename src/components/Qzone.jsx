import React from 'react';
import classImg from '../assets/class.png'
import playground from '../assets/playground.png'
import swimming from '../assets/swimming.png'


function Qzone() {
    const images = [
        { title: 'Swimming', image: swimming },
        { title: 'Class', image: classImg },
        { title: 'Play Ground', image: playground },
    ];

    return (
        <div className="p-4 bg-gray-100 border rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Q-Zone</h2>
            <div className="space-y-4">
                {images.map((activity, index) => (
                    <div key={index} className="border-2 border-dashed rounded-lg p-4">
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-40 object-cover rounded-lg mb-2 shadow"
                        />
                        <h3 className="text-center font-medium">{activity.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Qzone;
