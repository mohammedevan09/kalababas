const Title = ({ title }) => {
  return (
    <div className="relative md:text-[110px] text-[64px] flex justify-center items-center text-white md:mb-14 mb-10 tracking-[5px] md:w-[500px] w-[360px] mx-auto z-0">
      <div className="absolute text-gray-500 titleText">{title}</div>
      <div className="md:text-6xl text-4xl relative z-10 childTitle border-b">
        {title}
      </div>
    </div>
  )
}

export default Title
