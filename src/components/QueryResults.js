export const QueryResult = ({loading, error, data, children}) => {
    if (error) {
      return <p>ERROR: {error.message}</p>;
    }
    if (loading) {
      return (
        // <SpinnerContainer>
        //   <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
        // </SpinnerContainer>
        <p>Loading...</p>
      );
    }
    if (!data) {
      return <p>No Data Available</p>;
    }
    if (data) {
      return children;
    }
  };