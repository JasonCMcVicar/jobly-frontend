import "./JobCard.css"
/** To render Job details.
 *
 *  Props:
 *    - job
 *      (i.e. { id, title, salary, equity, companyHandle, companyName })
 *
 *  No state.
 *
 *  JobList -> JobCard
 */

function JobCard({ job }) {
    return (
        <div className="JobCard">
            <h1>{job.title}</h1>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity !== null && job.equity}</p>
        </div>
    );
}

export default JobCard;
