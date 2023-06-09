import { createArray } from "@/utils/createArray";

type Props = {
  page: number;
  setPage: (param: number) => void;
};

const Pagination = ({ page, setPage }: Props) => {
  const allPages = createArray(10);

  return (
    <ul>
      {allPages.map((num) => (
        <li
          className={page === num ? "active" : ""}
          onClick={() => setPage(num)}
          key={num}
        >
          {num}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
