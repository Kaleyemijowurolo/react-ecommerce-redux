import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./lib/colors";
import Slider from "./components/slider";
import Footer from "./components/footer";
import HorizontalLine from "./components/divider";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <section>
          <header>
            <Header />
          </header>
        </section>
        <div className="container">
          <Slider />
          <HorizontalLine />
        </div>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
const AppWrapper = styled.main`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;

  .container {
    width: 85%;
    min-height: 100%;
  }

  section {
    width: 100vw;
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid ${colors.outline};

    header {
      width: 85%;
    }
  }
`;
