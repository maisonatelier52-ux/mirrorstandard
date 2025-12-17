
interface Props{
    title:string;
}
const SubHeadlineTwo: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center w-full">
      <h2 className="font-[oswald] text-[20px] uppercase tracking-wide" style={{ fontWeight: 600 }}>
        {title}
      </h2>
      <div className="flex-1 h-[0.1px] bg-gray-400 ml-2"></div>
    </div>
  );
};


export default SubHeadlineTwo;