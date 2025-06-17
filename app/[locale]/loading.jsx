export default function Loading() {
  return (
    <div className="container">
      <div className="w-100 d-flex justify-content-center">
        <div
          className="spinner-border m-5"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
