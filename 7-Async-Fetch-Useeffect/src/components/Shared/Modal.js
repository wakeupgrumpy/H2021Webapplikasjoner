const Modal = ({ children, toggleModal }) => {
  const toggle = () => toggleModal()
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-20 border w-2/4 shadow-lg rounded-md bg-white">
        <span
          className="absolute inset-y-1 right-0 flex items-top mr-4 text-3xl text-gray-400 hover:text-gray-900"
          onClick={toggle}
          role="button"
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
