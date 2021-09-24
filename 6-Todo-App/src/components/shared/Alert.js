const Alert = ({ content, type }) => {
  //   const color = {
  //     primary: "blue",
  //     success: "green",
  //     danger: "red",
  //     warning: "yellow",
  //   };
  return (
    <div
      role="alert"
      className={`relative py-3 my-10 pl-4 pr-10 leading-normal text-${type}-700 bg-${type}-100 rounded-lg`}
    >
      <p>{content}</p>
    </div>
  );
};

export default Alert;
