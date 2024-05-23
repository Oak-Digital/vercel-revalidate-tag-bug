
const getTime = async () => {
  const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Copenhagen');
  const data = await response.json();
  return data.datetime as string;
}

const TimePage = async () => {
  const time = await getTime();

  return (
    <div>
      <h1>Current time in Copenhagen</h1>
      <p>{time}</p>
    </div>
  );
};

export default TimePage;
