import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/620099.webp?k=93e8bfacbaec3c2a2b846d44fbd383dec7e37861abae778f316c499c91e1ae4c&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/620099.webp?k=93e8bfacbaec3c2a2b846d44fbd383dec7e37861abae778f316c499c91e1ae4c&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/city/540x270/620099.webp?k=93e8bfacbaec3c2a2b846d44fbd383dec7e37861abae778f316c499c91e1ae4c&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
