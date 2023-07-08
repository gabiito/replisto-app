import { authorGithub, authorName } from "@/constants";

const date = new Date();
export const footerDisclaimer: React.ReactElement = (
  <p className="text-center">
    Replisto! is a project by{" "}
    <a href={authorGithub} target="_blank" rel="noreferrer">
      {authorName}
    </a>
    {' - '} &copy; {date.getFullYear()}.
  </p>
);
