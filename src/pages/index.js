import CardJob from "../components/CardJob";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("Brasil");

  console.log(data);

  useEffect(() => {
    getData(page);
  }, [page, location]);

  async function getData(page) {
    const url = "https://br.jooble.org/api/";
    const key = "6537d598-dc5a-422f-a474-e6a272167cf1";

    await fetch(url + key, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location: location,
        keywords: "ti",
        page: page,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  const getLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h1 className="text-2xl font-bold text-[#282538] py-8">
        Github <span className="font-light">Jobs</span>
      </h1>
      <Search />
      <div className="grid grid-cols-6 gap-8">
        <Sidebar getLocation={getLocation} />
        <div className=" col-span-6 sm:col-span-4">
          {data &&
            data.jobs.map((job) => (
              <Link
                href={{
                  pathname: `/${job.id}`,
                  query: {
                    title: `${job.title}`,
                    company: `${job.company}`,
                    location: `${job.location}`,
                    snippet: `${job.snippet}`,
                  },
                }}
              >
                <a>
                  <CardJob job={job} />
                </a>
              </Link>
            ))}
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={500}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"container-pagination"}
            pageClassName={"square"}
            nextClassName={"square"}
            previousClassName={"square"}
            activeClassName={"square-active"}
          />
        </div>
      </div>
    </div>
  );
}
