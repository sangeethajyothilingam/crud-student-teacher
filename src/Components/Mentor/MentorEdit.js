import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useParams } from "react-router-dom";
const formvalidationSchema = yup.object({
  employe_id: yup.number().required(),
  name: yup.string().required().min(4),
  subject: yup.string().required(),
  qualification: yup.string().required(),
  salary: yup.string().required().min(5),
  contact: yup.string().required().min(10),
  address: yup.string().required().min(5),
});

function MentorEdit({ mentordata }) {
  const params = useParams();
  const Index = mentordata.findIndex((item) => item.employe_id == params.id);
  const details = mentordata[Index];

  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      employe_id: details.employe_id,
      name: details.name,
      subject: details.subject,
      qualification: details.qualification,
      salary: details.salary,
      contact: details.contact,
      address: details.address,
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      mentordata.splice(Index, 1, values);
      navigate("/portal/mentor");
    },
  });

  return (
    <>
      <form className="container" onSubmit={myFormik.handleSubmit}>
        <div className="row mt-4 ps-5">
          <div className="col-lg-5  mt-5">
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.employe_id && myFormik.errors.employe_id
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.employe_id}
              name="employe_id"
              placeholder="Employe_id"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.employe_id && myFormik.errors.employe_id
                ? myFormik.errors.employe_id
                : null}
            </span>
            <br />
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.name && myFormik.errors.name
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.name}
              name="name"
              placeholder="Name"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.name && myFormik.errors.name
                ? myFormik.errors.name
                : null}
            </span>
            <br />
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.subject && myFormik.errors.subject
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.subject}
              name="subject"
              placeholder="Enter your subject"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.subject && myFormik.errors.subject
                ? myFormik.errors.subject
                : null}
            </span>
            <br />

            <input
              type="text"
              className={`form-control ${
                myFormik.touched.qualification && myFormik.errors.qualification
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.qualification}
              name="qualification"
              placeholder="Enter qualification"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.qualification && myFormik.errors.qualification
                ? myFormik.errors.qualification
                : null}
            </span>
            <br />
          </div>
          <div className="col-lg-5 mt-5 ms-0">
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.salary && myFormik.errors.salary
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.salary}
              name="salary"
              placeholder="Enter salary"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.salary && myFormik.errors.salary
                ? myFormik.errors.salary
                : null}
            </span>
            <br />
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.contact && myFormik.errors.contact
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.contact}
              name="contact"
              placeholder="Contact"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.contact && myFormik.errors.contact
                ? myFormik.errors.contact
                : null}
            </span>
            <br />
            <textarea
              rows="3"
              cols="3"
              type="text"
              className={`form-control ${
                myFormik.touched.address && myFormik.errors.address
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.address}
              name="address"
              placeholder="Enter address"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            ></textarea>
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.address && myFormik.errors.address
                ? myFormik.errors.address
                : null}
            </span>
            <br />
            <div className="d-sm-flex  justify-content-end mt-3">
              <button type="submit" className="btn btn-primary create-btn">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MentorEdit;
