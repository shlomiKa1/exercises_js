// Exercise 1
async function getTodo(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if (!res.ok) throw new Error("Status: ", res.status, res.statusText);

    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Server faild:");
    throw err;
  }
}
// getTodo(1).then((data) => console.log(data))

// Exercise 2
async function getPostAndComments(postId) {
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );

    if (!resPost.ok)
      throw new Error(`Status: ${resPost.status}, ID post: ${postId}`);
    const postData = await resPost.json();
    
    const resComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    
    if (!resComments.ok) throw new Error("Status: ", resComments.status);
    const commentData = await resComments.json();

    return { post: postData, comments: commentData };

  } catch (err) {
    console.log("Error:", err.message);
    throw err;
  }
}
getPostAndComments(1).then((data) => console.log(data));
//   .catch(console.error)

async function fetchUserNames(userIds) {
  const names = [];

  for (const id of userIds) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!res.ok) throw new Error("Status: ", res.status);
      const data = await res.json();
      names.push({ id: data.name });
    } catch (err) {
      console.log(`Error: ID '${id}'`);
      throw err;
    }
  }
  return names
}
fetchUserNames([1, 2, 3])
.then(console.log)
.catch(console.error)