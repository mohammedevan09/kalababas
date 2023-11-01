const DashTitle = ({ title, subtitle }) => {
  return (
    <div className="md:mx-10 mx-2">
      <div className="text-4xl font-bold text-[#539eff]">{title}</div>
      <div className="text-[#6fddff] text-xl">{subtitle}</div>
    </div>
  )
}

export default DashTitle
