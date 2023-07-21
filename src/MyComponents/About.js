import React from 'react'
import './About.css';

const About = () => {
return (
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">TODO List </h1>
            <p class="col-md-8 fs-4">ToDo List App is a kind of app that
                generally used to maintain our day-to-day tasks or list
                everything that we have to do, with the most important
                tasks at the top of the list, and the least important tasks
                at the bottom. It is helpful in planning our daily schedules.</p>
            <button class="btn btn-primary btn-lg" type="button"><a href="/">Go to Home</a></button>
        </div>
    </div>
)
}

export default About;