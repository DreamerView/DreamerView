const AppListPreloader = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <div className="container">
        <div className="row mx-auto">
          {list.map((key) => (
            <div
              key={key}
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4"
            >
              <div
                className="skeleton card border-0 rounded-4"
                style={{ aspectRatio: '17/9' }}
              />

              <h6 className="skeleton text-line m-0 my-3" />

              <p className="skeleton text-short m-0 mb-3" />

              <div className="d-flex gap-2">
                <span
                  className="skeleton"
                  style={{ width: '72px', height: '29px', borderRadius: '9999px' }}
                />
                <span
                  className="skeleton"
                  style={{ width: '72px', height: '29px', borderRadius: '9999px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppListPreloader;
