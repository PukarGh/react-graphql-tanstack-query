import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://odyssey-lift-off-server.herokuapp.com/",
  documents: ["src/api/**/*.ts"],
  generates: {
    "src/types/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
