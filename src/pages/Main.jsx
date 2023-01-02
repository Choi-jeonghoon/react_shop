import React from "react";
import MainPage from "../components/Main";
import CommonContainer from "../container/CommonContainer";
import useData from "../hooks/useData";
import Paging from "../components/Pagination";

const Main = () => {
  const { mockData, handleDetailButtonClick } = useData();

  return (
    <CommonContainer>
      <MainPage
        mockData={mockData}
        onDetailButtonClickEvent={handleDetailButtonClick}
      />
      <Paging />
    </CommonContainer>
  );
};

export default Main;
