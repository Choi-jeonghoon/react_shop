import ContaninerNav from "./Nav";

const CommonContainer = ({ children }) => {
  return (
    <div>
      <ContaninerNav />
      {children}
    </div>
  );
};

export default CommonContainer;
