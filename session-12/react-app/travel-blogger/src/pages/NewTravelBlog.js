import React from 'react'
import NewTravelBlogForm from '../components/blogs/NewTravelBlogForm';

const NewTravelBlog = () => {

    const addNewTravelBlogHandler = (newBlogData) => {
        const apiURL = process.env.REACT_APP_TRAVEL_API_URL;

        console.log(apiURL);
        fetch(apiURL, {

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