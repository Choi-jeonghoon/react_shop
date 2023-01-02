const mockData = [];

Array.from({ length: 252 })
  .fill(0)
  .forEach((_, idx) => {
    const obj = {
      title: `Mock data ${idx + 1}`,
      description: `Mock data for description ${idx + 1}`,
      imgUrl:
        "https://images.unsplash.com/photo-1672345158827-7f4aa9467b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      price: 100 + idx + 1,
    };
    mockData.push(obj);
  });

mockData.user = {
  email: "jei@jei.com",
  password: "jei1234@",
};

Object.freeze(mockData);
export default mockData;
