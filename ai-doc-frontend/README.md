## Getting Started


Set up your environment variables by creating a `.env.local` file in the root of the project with the following content:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=randomly_generated_secret
```

Replace `your_github_client_id` and `your_github_client_secret` with the values obtained from your GitHub OAuth App settings. For more information on how to create a GitHub OAuth App, refer to the [NextAuth.js GitHub Provider Documentation](https://next-auth.js.org/providers/github).
You can get NextAuth secret by running the following command in your terminal:

```bash
openssl rand -base64 32
```

or visit [https://generate.plus/en/base64](https://generate.plus/en/base64)

Install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.