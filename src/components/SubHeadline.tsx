
interface Props {
  title: string;
}
const SubHeadline: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center w-full gap-3">
      <h2 className="font-[oswald] text-[24px] uppercase tracking-wide text-[color:var(--ms-text)]" style={{ fontWeight: 600 }}>
        {title}
      </h2>
      <div
        className="mt-3 h-px flex-1 bg-[color:var(--ms-border-strong)]"
      ></div>
    </div>
  );
};


export default SubHeadline;
