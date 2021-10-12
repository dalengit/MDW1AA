import React from 'react'
import NewTravelBlogForm from '../components/blogs/NewTravelBlogForm';

const NewTravelBlog = () => {

    const addNewTravelBlogHandler = (newBlogData) => {
        fetch('https://react-travel-blogger-default-rtdb.europe-west1.firebasedatabase.app/travelblogs.json', {
            method: 'POST',
            body: JSON.stringify(newBlogData),
            // Headers: telling server metadata about the data it is receiving
            headers: {
                'Content-Type': 'application/json'
            },
        });
    };

    return (
        <div>
            <h1>New Travel Blog</h1>

            <NewTravelBlogForm onAddTravelBlog={addNewTravelBlogHandler} />
        </div>
    )
}

export default NewTravelBlog;