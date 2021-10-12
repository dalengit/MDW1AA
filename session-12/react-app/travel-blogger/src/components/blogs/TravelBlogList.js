import classes from './TravelBlogList.module.css';
import TravelBlogItem from './TravelBlogItem';

const TravelBlogList = ({ blogs }) => {
    return (
        <ul className={ classes.list }>
            {blogs.map((blog) => (
                <TravelBlogItem 
                key={blog.id} 
                id={blog.id} 
                image={blog.image}
                title={blog.title}
                description={blog.description}
                city={blog.city}
                />
            ))}
        </ul>
    )
}

export default TravelBlogList;