export const getPosts = async (
  id: string
): Promise<{ data: any; statusCode: number }> => {
  const { data: user } = await useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  console.log("Response:: ", user);

  return { data: user, statusCode: 200 };
};
