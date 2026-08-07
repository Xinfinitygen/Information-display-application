import React from 'react'
import './index.css'

// Book component
function Book({ title }) {
    return <div className="book-card">{title}</div>;
}

// Header component
function Header() {
    return (
        <header className="header">
            <h1>My Favourite Books</h1>
        </header>
    );
}

// Create a Book list component about my favourite books
function BookList() {
    return (
        <div className="book-list">
            <Book title="Things fall apart" />
            <Book title="Half of a yellow sun" />
            <Book title="To kill a mockingbird" />
        </div>
    );
}

// Header 2 component
function Header2() {
    return (
        <header>
            <h2>Second Assessment Section</h2>
        </header>
    )
}
// Contact information props
function ListCard({ name, job, email }) {
    return (
        <li className='contact-card'>
            <h2>{name}</h2>

            <dl>
                <dt>Job</dt>
                <dd>{job}</dd>

                <dt>Email</dt>
                <dd>{email}</dd>
            </dl>
        </li>
    );
}

// create root component
function App() {
    return (
        <div>
            <Header />
            <BookList />

            <Header2 />
            <div className="secondAssessment">

                <ul>
                    <ListCard
                        name="Sunita Kumar"
                        job="Electrical Engineer"
                        email="sunita.kumar@acme.co"
                    />
                </ul>
                <ul>
                    <ListCard
                        name="Okechukwu Ezekiel"
                        job="Software Developer"
                        email="ezekielpromzyokechukwu@gmail.com"
                    />
                </ul>

            </div>
        </div>
    );
}

export default App;
