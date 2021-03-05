import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/", // https://github.com/HoseokNa/movieql
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked,
          },
        });
      },
    },
  },
});

export default client;
