import CardJob from "../components/CardJob";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("Brasil");
  const [keyword, setKeyword] = useState("ti");

  useEffect(() => {
    getData(page);
  }, [page, location, keyword]);

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
        keywords: keyword,
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

  const getKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="container mx-auto px-2 md:px-0">
      <h1 className="text-2xl font-bold text-[#282538] py-8">
        Github <span className="font-light">Jobs</span>
      </h1>
      <Search getKeyword={getKeyword} />
      <div className="grid grid-cols-6 gap-8">
        <Sidebar getLocation={getLocation} />
        <div className=" col-span-6 sm:col-span-4">
          {data ? (
            data.jobs.map((job) => (
              <Link
                key={job.id}
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
            ))
          ) : (
            <>
              <div className="flex gap-4 mb-3 bg-gray-100">
                <Skeleton width={"90px"} height={"90px"} />
                <div>
                  <Skeleton width={"500px"} />
                  <Skeleton width={"200px"} />
                  <Skeleton width={"70px"} height={"25px"} />
                </div>
              </div>
              <div className="flex gap-4 mb-4 bg-gray-100">
                <Skeleton width={"90px"} height={"90px"} />
                <div>
                  <Skeleton width={"500px"} />
                  <Skeleton width={"200px"} />
                  <Skeleton width={"70px"} height={"25px"} />
                </div>
              </div>
              <div className="flex gap-4 mb-4 bg-gray-100">
                <Skeleton width={"90px"} height={"90px"} />
                <div>
                  <Skeleton width={"500px"} />
                  <Skeleton width={"200px"} />
                  <Skeleton width={"70px"} height={"25px"} />
                </div>
              </div>
              <div className="flex gap-4 mb-4 bg-gray-100">
                <Skeleton width={"90px"} height={"90px"} />
                <div>
                  <Skeleton width={"500px"} />
                  <Skeleton width={"200px"} />
                  <Skeleton width={"70px"} height={"25px"} />
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <Skeleton width={"90px"} height={"90px"} />
                <div>
                  <Skeleton width={"500px"} />
                  <Skeleton width={"200px"} />
                  <Skeleton width={"70px"} height={"25px"} />
                </div>
              </div>
            </>
          )}
          {data && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              marginPagesDisplayed={3}
              pageRangeDisplayed={0}
              pageCount={20}
              onPageChange={handlePageClick}
              containerClassName={"container-pagination"}
              pageClassName={"square"}
              nextClassName={"square"}
              previousClassName={"square"}
              activeClassName={"square-active"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
