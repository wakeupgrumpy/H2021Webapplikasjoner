const Modal = ({ children, toggleModal }) => {
  const toggle = () => toggleModal()
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-20 border w-2/4 shadow-lg rounded-md bg-white z-40">
        <button
          className="absolute inset-y-1 right-0 flex items-top mr-4 text-3xl text-gray-400 hover:text-gray-900"
          onClick={toggle}
          type="button"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
