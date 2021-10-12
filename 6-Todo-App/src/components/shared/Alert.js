const Alert = ({ type, children }) => (
  <div role="alert" className={`alert ${type}`}>
    {children}
  </div>
);

export default Alert;
