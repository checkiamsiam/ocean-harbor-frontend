import { Link } from "@/lib/router-events";

const GABreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  return (
    <>
      <nav className="flex">
        <ul className="inline-flex list-none items-center space-x-1 md:space-x-2">
          <li className="inline-flex items-center">
            <Link
              href={items[0].link}
              className="inline-flex items-center text-body font-medium text-secondary hover:text-primary dark:text-secondary dark:hover:text-white no-underline hover:underline"
            >
              {items[0].label}
            </Link>
          </li>
          {items.slice(1).map((item, index) => {
            return (
              <li key={index}>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-secondary mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <Link
                    href={item.link}
                    className="ml-1 inline-flex items-center text-body font-medium text-secondary hover:text-primary dark:text-secondary dark:hover:text-white no-underline hover:underline"
                  >
                    {item.label}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default GABreadCrumb;
