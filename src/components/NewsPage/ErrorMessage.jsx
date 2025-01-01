const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">{message}</p>
        <p className="text-sm text-red-500 mt-2">
          Please check your API key or try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;