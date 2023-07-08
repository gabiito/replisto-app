interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 md:p-8 mb-8 rounded-lg">
      {children}
    </div>
  );
}

export default ContentBox;
