// Book component
function Book({ title }) {
  return <div className="book-card">{title}</div>;
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

// Header component
function Header() {
    return (
        <header className="header">
            <h1>My Favourite Books</h1>
        </header>
    );
}

// create root component
function App() {
  return (
    <div>
        <Header />
        <BookList />
    </div>
  );
}

export default App;
