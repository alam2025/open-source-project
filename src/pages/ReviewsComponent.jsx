import React from 'react';
const customerReviews = [
    {
        id: 1,
        name: 'John Doe',
        rating: 5,
        review: 'This open-source project is fantastic! It has helped me a lot with my development tasks.',
    },
    {
        id: 2,
        name: 'Alice Smith',
        rating: 4,
        review: 'I found this project very useful and well-documented. However, there are some areas that could be improved.',
    },
    {
        id: 3,
        name: 'Robert Johnson',
        rating: 5,
        review: 'Amazing open-source initiative! The community support is excellent, and the features are top-notch.',
    },
    {
        id: 4,
        name: 'Sarah Davis',
        rating: 3,
        review: 'The project has potential, but it needs more updates and additional functionalities to compete with similar projects.',
    },
    {
        id: 5,
        name: 'Michael Thompson',
        rating: 4,
        review: 'A great open-source project that has saved me a lot of time and effort. I highly recommend it.',
    },
    {
        id: 6,
        name: 'Emily Clark',
        rating: 5,
        review: `I love this project! It's user-friendly, well-maintained, and the community is very helpful.'`,
    },
    {
        id: 7,
        name: 'David Baker',
        rating: 4,
        review: 'Solid open-source software. The UI could be improved for a better user experience.',
    },
    {
        id: 8,
        name: 'Laura White',
        rating: 5,
        review: 'Incredible project! The developer community is very active and responsive to issues and questions.',
    },
    {
        id: 9,
        name: 'Mark Anderson',
        rating: 3,
        review: 'Good project overall. However, the documentation could use some enhancements for clarity.',
    },
    {
        id: 10,
        name: 'Jennifer Lee',
        rating: 5,
        review: 'This project is a game-changer! It has all the features I need and is constantly improving. Highly recommended.',
    },
];



const CustomerReview = ({ review }) => {
    const { name, rating, review: reviewText } = review;
    const stars = Array.from({ length: rating }, (_, index) => (
        <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current text-yellow-500"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M2.293 5.293a1 1 0 011.414 0L10 10.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    ));

    return (
        <div className=" card.purple card.green card text-white  shadow-2xl bg-white rounded-lg p-6 mb-4 transition-transform transform hover:scale-105 duration-300">
            <div className=" mb-2 flex justify-between items-center">
                <div className="font-bold text-black text-xl">{name}</div>
                <div className="flex items-center">{stars}</div>
            </div>
            <div className="text-gray-700">{reviewText}</div>
        </div>
    );
};

const ReviewsComponent = () => {
    return (
        <div className="w-[95%] mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {customerReviews.map((review) => (
                    <CustomerReview key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsComponent;