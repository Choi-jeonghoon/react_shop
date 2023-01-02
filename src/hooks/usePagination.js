// import { useState, useCallback } from "react";

// // 전체 데이터 갯수, 몇 개 씩 짤라주는가
// // 시작페이지인가, 마지막페이지인가에 따라서 버튼 비활성화
// function usePagin() {

//   const limit = 10; // posts가 보일 최대한의 갯수
//   const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

//   const postsData = useCallback((posts) => {
//     if (posts) {
//       let result = posts.slice(offset, offset + limit);
//       return result;
//     }
//   });
//   return {
//     postsData,
//   };
// }
// export default usePagin;
