import { Link } from "react-router-dom";

const GithubLink = () => {
  return (
    <li className=" self-center">
    <Link
      to="https://github.com/its-serah/secureAI"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center p-1 ml-4 mr-4 bg-transparent rounded-lg fill-gray-700 hover:fill-neutral-100  hover:bg-gray-700 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.04c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.302 3.492.995.108-.776.42-1.303.763-1.602-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.922.43.372.823 1.103.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </Link>
    </li>
  );
};

export default GithubLink;
