import React from 'react';
import { Helmet } from 'react-helmet';
const customerReviews = [
    {
        id: 1,
        name: 'John Doe',
        rating: 5,
        review: 'This open-source project is fantastic! It has helped me a lot with my development tasks.',
        imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        name: 'Alice Smith',
        rating: 4,
        review: 'I found this project very useful and well-documented. However, there are some areas that could be improved.',
        imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        name: 'Robert Johnson',
        rating: 5,
        review: 'Amazing open-source initiative! The community support is excellent, and the features are top-notch.',
        imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
        id: 4,
        name: 'Sarah Davis',
        rating: 3,
        review: 'The project has potential, but it needs more updates and additional functionalities to compete with similar projects.',
        imageUrl: 'https://media.istockphoto.com/id/1247693979/photo/close-up-portrait-of-young-smiling-handsome-man-wearing-blue-shirt-and-glasses-feeling.jpg?s=612x612&w=0&k=20&c=PgpEGomO4XLVvRHlFxuqneqm0E68_zYkXVqzr5WN_eo='
    },
    {
        id: 5,
        name: 'Michael Thompson',
        rating: 4,
        review: 'A great open-source project that has saved me a lot of time and effort. I highly recommend it.',
        imageUrl: 'https://media.istockphoto.com/photos/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view-picture-id1360063450'
    },
    {
        id: 6,
        name: 'Emily Clark',
        rating: 5,
        review: `I love this project! It's user-friendly, well-maintained, and the community is very helpful.'`,
        imageUrl: 'url_to_john_doe_image'
    },
    {
        id: 7,
        name: 'David Baker',
        rating: 4,
        review: 'Solid open-source software. The UI could be improved for a better user experience.',
        imageUrl: 'url_to_john_doe_image'
    },
    {
        id: 8,
        name: 'Laura White',
        rating: 5,
        review: 'Incredible project! The developer community is very active and responsive to issues and questions.',
        imageUrl: 'url_to_john_doe_image'
    },
    {
        id: 9,
        name: 'Mark Anderson',
        rating: 3,
        review: 'Good project overall. However, the documentation could use some enhancements for clarity.',
        imageUrl: 'url_to_john_doe_image'
    },
    {
        id: 10,
        name: 'Jennifer Lee',
        rating: 5,
        review: 'This project is a game-changer! It has all the features I need and is constantly improving. Highly recommended.',
        imageUrl: 'url_to_john_doe_image'
    },
];



const CustomerReview = ({ review }) => {
    const { name, rating, review: reviewText, imageUrl } = review;
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
        <div className="card.purple card.green card glass text-white shadow-2xl bg-white rounded-lg p-6 mb-4 transition-transform transform hover:scale-105 duration-300 ">
            <div className="w-full flex justify-center items-center">
                <img src={imageUrl} alt="User" className="user-image w-full h-[200px] rounded-xl" />
            </div>

            <div className="mb-2 flex justify-between items-center">
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
            <Helmet><title>Home | Reviews</title></Helmet>
            <h2 className="text-2xl font-bold mb-6">Users Reviews</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {customerReviews.map((review) => (
                    <CustomerReview key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsComponent;