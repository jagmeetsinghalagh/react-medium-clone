import React from 'react';

const Loader = () => {
    return (
        <div className="mt-5  d-flex justify-content-center">
            <div className="spinner-border tex-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;