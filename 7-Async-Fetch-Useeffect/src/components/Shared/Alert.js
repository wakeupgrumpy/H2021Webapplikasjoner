const Alert = ({ type = 'primary', children }) => (
  <div role="alert" className={`alert ${type}`}>
    {children}
  </div>
)

export default Alert
