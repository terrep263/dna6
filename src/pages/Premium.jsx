function Premium({ subscribed }) {
  if (!subscribed) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Access Required</h1>
        <p className="text-xl text-gray-600">Please subscribe to access premium content.</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Content</h1>
      <p className="text-xl text-gray-600">Welcome to your premium experience!</p>
    </div>
  );
}

export default Premium;
