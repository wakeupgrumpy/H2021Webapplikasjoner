const Wrapper = (props) => {
  return (
    <section className='flex'>
      {props.children}
    </section>
  )
}

export default Wrapper;