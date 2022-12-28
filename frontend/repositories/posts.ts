export const getPosts = async () => {
  const { data: users } = await useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log("Response:: ", users);

  return { data: users, statusCode: 200 };
};
