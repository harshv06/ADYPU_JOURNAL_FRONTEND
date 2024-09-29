import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer'

function Publications(props) {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Latest Publications</h1>
                <div>
                    <h3>Vol.1</h3>
                    <ol>
                        <li>Publication 1</li>
                        <button>View Paper</button>
                        <li>Publication 2</li>
                        <button>View Paper</button>
                        <li>Publication 3</li>
                        <button>View Paper</button>
                    </ol>
                </div>
                <hr />
                <div>
                    <h3>Vol.2</h3>
                    <ol>
                        <li>Publication 1</li>
                        <button>View Paper</button>
                        <li>Publication 2</li>
                        <button>View Paper</button>
                        <li>Publication 3</li>
                        <button>View Paper</button>
                    </ol>
                </div>
                <hr />
                <div>
                    <h3>Vol.3</h3>
                    <ol>
                        <li>Publication 1</li>
                        <button>View Paper</button>
                        <li>Publication 2</li>
                        <button>View Paper</button>
                        <li>Publication 3</li>
                        <button>View Paper</button>
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Publications;