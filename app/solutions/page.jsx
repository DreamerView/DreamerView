import jsonList from './list.js';

const SolutionSection = () => {
    return (
        <div className='container'>
            <div className="w-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Library/Class</th>
                            <th scope="col">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonList.map((html, index) => (
                            <tr key={index}>
                                <td>
                                    <h5>{html.title}</h5>
                                    <p className="m-0 mt-3 text-secondary" style={{ fontSize: "0.9rem" }}>
                                        {html.desc}
                                    </p>
                                </td>
                                <td className="align-middle">
                                    <a
                                        className="btn btn-dark rounded-4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={html.source}
                                    >
                                        Github
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SolutionSection;
