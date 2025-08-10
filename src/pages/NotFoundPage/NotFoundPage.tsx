import "./NotFoundPage.css";

const NotFoundPage = () => (
  <div className="not-found" data-testid="not-found-container">
    <div className="not-found-content" data-testid="not-found-content">
      <h1>404 - Page Not Found</h1>
      <a href="/" className="home-link">
        Return to Main Page
      </a>
    </div>
  </div>
);

export default NotFoundPage;
