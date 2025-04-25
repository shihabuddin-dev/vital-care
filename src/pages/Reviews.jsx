import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Reviews = () => {
    // Review data
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: "Rahim Khan",
            rating: 5,
            date: "June 10, 2023",
            comment: "Excellent service! The doctors at Vital Care are very professional and caring. Highly recommended.",
            category: "General Consultation",
        },
        {
            id: 2,
            name: "Fatima Ahmed",
            rating: 4,
            date: "May 25, 2023",
            comment: "Good experience overall. The waiting time was a bit long, but the treatment was effective.",
            category: "Pediatrics",
        },
        {
            id: 3,
            name: "Abdul Karim",
            rating: 5,
            date: "May 15, 2023",
            comment: "The cardiology department is outstanding. Dr. Rahman is very knowledgeable and patient-friendly.",
            category: "Cardiology",
        },
        {
            id: 4,
            name: "Nusrat Jahan",
            rating: 3,
            date: "April 30, 2023",
            comment: "Average experience. The clinic is clean, but the front desk could be more organized.",
            category: "Women's Health",
        },
        {
            id: 5,
            name: "Tareq Hasan",
            rating: 5,
            date: "April 10, 2023",
            comment: "Emergency service saved my father’s life. Very grateful to the team at Vital Care!",
            category: "Emergency Care",
        },
    ]);

    // Filter categories
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "General Consultation", "Pediatrics", "Cardiology", "Women's Health", "Emergency Care"];

    // New review form state
    const [newReview, setNewReview] = useState({
        name: "",
        rating: 0,
        comment: "",
        category: "General Consultation",
    });

    // Filter reviews by category
    const filteredReviews = selectedCategory === "All"
        ? reviews
        : reviews.filter(review => review.category === selectedCategory);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewToAdd = {
            id: reviews.length + 1,
            name: newReview.name,
            rating: newReview.rating,
            date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
            comment: newReview.comment,
            category: newReview.category,
        };
        setReviews([...reviews, reviewToAdd]);
        setNewReview({ name: "", rating: 0, comment: "", category: "General Consultation" });
    };

    return (
        <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8 rounded-2xl">
            <title>Reviews || Vital Care</title>
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-3">Patient Reviews</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Read what our patients say about their experience at <strong>Vital Care Bogura</strong>.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category ? 'bg-[#176AE5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Reviews List */}
                <div className="space-y-6 mb-12">
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-semibold text-lg">{review.name}</h3>
                                    <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">{review.category}</span>
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 py-8">No reviews found for this category.</p>
                    )}
                </div>

                {/* Add a Review Form */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    value={newReview.name}
                                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#176AE5] focus:border-[#176AE5]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service Category</label>
                                <select
                                    value={newReview.category}
                                    onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#176AE5] focus:border-[#176AE5]"
                                    required
                                >
                                    {categories.filter(cat => cat !== "All").map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        onClick={() => setNewReview({ ...newReview, rating: star })}
                                        className="focus:outline-none"
                                    >
                                        <StarIcon
                                            className={`h-8 w-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                            <textarea
                                value={newReview.comment}
                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#176AE5] focus:border-[#176AE5]"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#176AE5] hover:bg-[#1256c4] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;