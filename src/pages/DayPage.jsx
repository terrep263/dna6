function DayPage({ trialStatus }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Day Page</h1>
      <p className="text-xl text-gray-600">This is day {trialStatus.day + 1}</p>
    </div>
  );
}

export default DayPage;
