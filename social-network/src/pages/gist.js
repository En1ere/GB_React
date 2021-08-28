import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists, searchGistsByUserName } from "../store/gists";

export function Gist() {
  const { gistsPending, gists, gistsError } = useSelector(
    (state) => state.gists
  );

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);

  useEffect(() => {
    if (search) {
      dispatch(searchGistsByUserName(search));
    }
  }, [search, dispatch]);

  if (gistsError) {
    return <h1>oooppss...</h1>;
  }

  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <button key={index} onClick={() => dispatch(getGists(index + 1))}>
          button {index}
        </button>
      ))}
      <hr />
      <h1>Search</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />

      {gistsPending ? (
        <h1>pending...</h1>
      ) : (
        <ul>
          {gists.map((gist, index) => (
            <li key={index}>{gist.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
