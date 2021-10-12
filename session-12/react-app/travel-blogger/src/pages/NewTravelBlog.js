import { useHistory } from 'react-router-dom';
import NewTravelBlogForm from '../components/blogs/NewTravelBlogForm';

const NewTravelBlog = () => {

    const history = useHistory();

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


        })
        
        .then(() => {
            history.replace("/");
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