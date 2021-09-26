const Alert = ({ props }) => {
  const { content, type } = { ...props };

  // Different alert roles and colors
  const ROLE = {
    primary: "blue",
    success: "green",
    danger: "red",
    warning: "yellow",
  };

  // Component CSS-styles
  const styles = `relative py-3 my-10 pl-4 pr-10 leading-normal text-${ROLE[type]}-700 bg-${ROLE[type]}-100 rounded-lg`;

  return (
    <div role="alert" className={styles}>
      <p>{content}</p>
    </div>
  );
};

export default Alert;
