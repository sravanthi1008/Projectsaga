import React, { useState, useEffect } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { createUserStart, updateUserStart } from "../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  body: "",
  userId: "",
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { users } = useSelector((state) => state.data);
  const { title, body, userId } = formValue;

  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    }
  }, [id]);

  const Changehandle = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        toast.success("User Added Successfully");
        setTimeout(() => history.push("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        toast.success("User Updated Successfully");
        setTimeout(() => history.push("/"), 500);
      }
    }
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >

      <p className="fs-2 fw-bold">
        {editMode ? "Update User Detail" : "Add User Detail"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={title || ""}
          name="title"
          type="text"
          onChange={Changehandle}
          required
          label="Title"
          validation="Please provide a name."
          invalid
        />
        <br />
        <MDBInput
          value={body || ""}
          name="body"
          type="text"
          onChange={Changehandle}
          required
          label="Body"
          validation="Please provide a Body."
          invalid
        />
        <br />
        <MDBInput
          value={userId || ""}
          name="userId"
          type="text"
          onChange={Changehandle}
          required

          validation="Please provide a Body."
          invalid
        />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {editMode ? "Update" : "Add"}
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>

    </MDBValidation>
  );
};

export default AddEditUser;
