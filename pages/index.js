import styled from "styled-components";
import db from "../db.json";

import { useRouter } from "next/router";
import Widget from "../src/components/Widget.js";
import Footer from "../src/components/Footer.js";
import GitHubCorner from "../src/components/GitHubCorner.js";
import QuizBackground from "../src/components/QuizBackground.js";
import QuizContainer from "../src/components/QuizContainer.js";
import Input from "../src/components/Input.js";
import Button from "../src/components/Button.js";
import QuizLogo from "../src/components/QuizLogo.js";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Teste</h1>
            </Widget.Header>
            <Widget.Content>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <Input
                  name="nomeDoUsuario"
                  placeholder="Seu nome"
                  type="text"
                  onChange={({ target }) => setName(target.value)}
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Teste 2</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur ea earum modi veniam vero minus accusantium quas
                dolores molestiae repudiandae velit et maxime quam,
                reprehenderit possimus provident id nesciunt sit.
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="" />
      </QuizBackground>
    </>
  );
}
