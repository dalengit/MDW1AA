import React from 'react'
import Card from '../ui/Card';
import classes from './NewTravelBlogForm.module.css';

const NewTravelBlogForm = () => {
    return (
        <Card>
            <form className={ classes.form }>
                <div className={ classes.control }>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required />
                </div>
                <div className={ classes.control }>
                    <label htmlFor="image">Image URL</label>
                    <input type="url" id="image" required />
                </div>
                <div className={ classes.control }>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required />
                </div>
                <div className={ classes.control }>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required />
                </div>
            </form>
        </Card>
    );
};

export default NewTravelBlogForm;
