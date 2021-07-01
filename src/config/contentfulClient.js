import * as contentful from "contentful"
import env from "react-dotenv"

export const client = contentful.createClient({
  space: env.CONTENTFUL_SPACE,
  accessToken: env.CONTENTFUL_API_KEY
});
