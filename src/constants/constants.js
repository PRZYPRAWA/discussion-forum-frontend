const limit = 50;

export const constants = {
  TOPIC_MAX: 200,
  CONTENT_MAX: 2000,
  USERNAME_MAX: 50,
  LIMIT: limit,
  AFTER: Math.round((limit * 2) / 3),
  BEFORE: Math.round(limit / 3),
};
