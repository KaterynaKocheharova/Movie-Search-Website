import { Formik, Form, Field, ErrorMessage } from "formik";
import { CiSearch } from "react-icons/ci";
import * as Yup from "yup";
import css from "./MovieSearchBar.module.css";

const QueryValidationSchema = Yup.object().shape({
  query: Yup.string().required("Write your query first!"),
});

const MoviesSearchBar = ({ onSubmit }) => {
  const submitQuery = (values, actions) => {
    onSubmit(values.query);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={submitQuery}
        validationSchema={QueryValidationSchema}
      >
        <Form className={css.form}>
          <div className={css["field-group"]}>
            <Field
              className={css.field}
              type="text"
              name="query"
              placeholder="Search for movies..."
            />
            <button className={css.button} type="submit">
              <CiSearch className={css["search-icon"]} />
            </button>
          </div>
          <ErrorMessage className={css["error"]} name="query" component="div" />
        </Form>
      </Formik>
    </div>
  );
};

export default MoviesSearchBar;
