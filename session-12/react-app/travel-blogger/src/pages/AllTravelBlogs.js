import React from 'react'
import TravelBlogList from '../components/blogs/TravelBlogList';

// Mock data 
const BLOG_DATA = [
    { 
        id: 1,
        title: "This is my first trip to Darwen",
        image: 'https://www.lancashiretelegraph.co.uk/resources/images/2814496?type=responsive-gallery-fullscreen',
        address: 'Darwen Town Centre',
        city: 'Also known as "Darren"',
        description: 'Number 2 town in the UK.',
    },
    {
        id: 2,
        title: "This is my first trip to Bolton",
        image: 'https://www.theboltonnews.co.uk/resources/images/2700631/',
        address: 'Bolton Town Centre',
        city: 'Bolton',
        description: 'Number 1 town in the UK.',
    },
];

const AllTravelBlogs = () => {
    return (
        <section>
            <h1>All Travel Blogs</h1>
            <TravelBlogList blogs={BLOG_DATA}/>

        </section>
    );
};

export default AllTravelBlogs;