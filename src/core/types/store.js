const STORE = {
  GLOBAL: {
    MUTATION: {
      LOADER_SET: "global/mutation/loaderSet",
    },
    ACTION: {
      LOADER_SET: "global/action/loaderSet",
    },
  },
  USERS: {
    MUTATION: {
      FETCH: "users/mutation/fetch",
      FETCHED: "users/mutation/fetched",
      SET: "users/mutation/set",
    },
    ACTION: {
      GET: "users/action/get",
    },
  },
  LIKES: {
    MUTATION: {
      SET: "likes/mutation/set",
    },
    ACTION: {
      GET: "likes/action/get",
    },
  },
};

export { STORE };
