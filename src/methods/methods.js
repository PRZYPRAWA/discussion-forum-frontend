export const getTopics = (limit = 50, offset = 0) => (
  setItems,
  setIsLoaded,
  setError
) => {
  const parameters = `?limit=${limit}&offset=${offset}`;
  fetch(`/topics${parameters}`)
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
};

export const postTopic = (values) => {
  fetch("/topics", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
