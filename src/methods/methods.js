import { constants } from "../constants/constants";

export const getTopics = (limit = constants.LIMIT, offset = 0) => (
  setItems,
  setIsLoaded,
  setError
) => {
  const parameters = `?limit=${limit}&offset=${offset}`;
  fetch(`/topics${parameters}`)
    .then((res) => res.json())
    .then(
      (result) => {
        setItems(result);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
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

export const postPost = (values, topicId) => {
  fetch(`/topics/${topicId}`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const getTopicWithPosts = (id) => (
  before = constants.BEFORE,
  after = constants.AFTER,
  offset = 0
) => (setItems, setIsLoaded, setError) => {
  const parameters = `offset=${offset}&before=${before}&after=${after}`;

  fetch(`/topics/${id}?${parameters}`)
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        setItems(result);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
};
