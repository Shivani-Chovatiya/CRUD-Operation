const Time = () => {
  var showDate = new Date();
  var distime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    ":" +
    showDate.getSeconds();
  return (
    <div>
      <input type="text" value={distime} readOnly="true" />
    </div>
  );
};
export default Time;
