import React from 'react';
import { courses } from './courses';

function CourseDetails() {
    return (
        <div>
            <h1>Course Details</h1>
            {courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.name}</h2>
                    <p>{course.date}</p>
                </div>
            ))}
        </div>
    );
}

export default CourseDetails;