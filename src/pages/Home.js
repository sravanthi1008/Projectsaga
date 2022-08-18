import React, { useEffect, useState } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersStart, searchUserStart, sortUserStart } from "../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const { users, loading, error } = useSelector((state) => state.data);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [sortValue, setSortValue] = useState("");
  const sortOption = ["title", "body", "userId"];

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  useEffect(() => error && toast.error(error), [error]);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUserStart(searchTerm));
    setSearchTerm("");
  }
  const onSortChange = (e) => {
    // let sortValue = e.target.value.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ");
    let sortValue = e.target.value;
    if (sortOption.includes(sortValue)) {
      setSortValue(e.target.value);
      dispatch(sortUserStart(e.target.value))
    } else {
      dispatch(loadUsersStart());
      setSortValue(" ");
    }
  }
  return (
    <>

      <div className="container" style={{ marginTop: "150px" }}>
        <form className=" input-group " onSubmit={handleSubmit} style={{ marginBottom: "20px" }} >

          <MDBInput type="text" className="form-control" placeholder="Search Title.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
          }} />
          <MDBBtn color="dark" type="submit" style={{ marginRight: "100px" }} >Search</MDBBtn>
          <MDBRow>
            <MDBCol size="12"><h5>Sort By:</h5>
              <select style={{ width: "100%", borderRadius: "2px", height: "35px" }} value={sortValue} onChange={onSortChange}>
                <option>Please Select option</option>
                {sortOption.map((item, index) => (
                  // <option value={item.toLowerCase()} key={index}>{item}</option>
                  <option value={item} key={index}>{item}</option>
                ))}

              </select>
            </MDBCol>
          </MDBRow>
        </form>
        <MDBTable>
          <MDBTableHead dark>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          {users &&
            users.map((item, index) => (
              <MDBTableBody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>

                    <Link to={`/editUser/${item.id}`}>
                      <MDBTooltip title="Edit" tag="none">
                        <MDBIcon
                          fas
                          icon="pen"
                          style={{ color: "#55acee", marginBottom: "10px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>{" "}
                  </td>
                  {/* <td>
                    <Link to={`/addUser`}>
                      <MDBTooltip title="Add" tag="none">
                        <MDBIcon
                          fas
                          icon="book"
                          style={{ color: "#55acee", marginBottom: "10px" }}
                          size="lg"
                        />
                      </MDBTooltip>
                    </Link>{" "}
                  </td> */}
                </tr>
              </MDBTableBody>
            ))}
        </MDBTable>
      </div>

    </>
  );
};

export default Home;
