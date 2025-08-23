function Trial({ trialStatus }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Trial</h1>
      <p className="text-xl text-gray-600">Day {trialStatus.day + 1} of your trial</p>
    </div>
  );
}

export default Trial;
