import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <div className={css["not-found-page-container"]}>
          <h2 className={css["not-found-page-title"]}>
            Page not found. Please go to home page
          </h2>
          <Link to="/">
            <Button>Home page </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
