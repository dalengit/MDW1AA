import { useState, useEffect } from 'react';
import TravelBlogList from '../components/blogs/TravelBlogList';

// // Mock data 
// const BLOG_DATA = [
//     { 
//         id: 1,
//         title: "This is my first trip to Darwen",
//         image: 'https://www.lancashiretelegraph.co.uk/resources/images/2814496?type=responsive-gallery-fullscreen',
//         address: 'Darwen Town Centre',
//         city: 'Also known as "Darren"',
//         description: 'Number 2 town in the UK.',
//     },
//     {
//         id: 2,
//         title: "This is my first trip to Bolton",
//         image: 'https://www.theboltonnews.co.uk/resources/images/2700631/',
//         address: 'Bolton Town Centre',
//         city: 'Bolton',
//         description: 'Number 1 town in the UK.',
//     },
// ];

const AllTravelBlogs = () => {


    const [ isLoading, setIsloading ] = useState(true);
    const [ travelBlogs, setTravelblogs ] = useState([]);

    useEffect(() => {
        const apiURL = process.env.REACT_APP_TRAVEL_API_URL;

        fetch(apiURL)
        .then(res => {
            return res.json();
        })

        .then((data) => {
            const travelBlogs = [];

            for (const key in data) {
                const travelBlog = {
                    id: key,
                    ...data[key],
                };

                travelBlogs.push(travelBlog);
            }

            setIsloading(false);
            setTravelblogs(travelBlogs);

        });
    }, []);

    if (isLoading) {
        return (<section>
            <p>Loading .... </p>
        </section>)
    }

    return (
        <section>
            <h1>All Travel Blogs</h1>
            <TravelBlogList blogs={travelBlogs} />

        </section>
    );
};

export default AllTravelBlogs;