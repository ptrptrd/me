import { GitHubProvider } from 'tinacms-gitprovider-github'
import { createDatabase, createLocalDatabase } from '@tinacms/datalayer'

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default isLocal ? createLocalDatabase() : createDatabase({
    gitProvider: new GitHubProvider({
        branch,
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    }),
    namespace: branch,
});