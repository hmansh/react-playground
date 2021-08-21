import React, { Component } from 'react';
import JobInstance from './JobInstance';

export default class JobContainer extends Component {
    render() {
        return (
            <div className="jobs-container">
                <div className="jobs-container-header">
                    Jobs
                </div>
                <div className="job-instance-container">
                    {[1,2,3,4,5,6,7].map(item => <JobInstance/>)}
                </div>
                <button className="view-all-job-btn btn">
                    View all Openings
                </button>
            </div>
        )
    }
}
