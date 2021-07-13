import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/Body/About/About";
import Skillset from "./Components/Body/Skillset/Skillset";
import Projects from "./Components/Body/Projects/Projects";
import Work from "./Components/Body/Work/Work";
import { StylesProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst={true}>
        <div className="header_banner">
          <Header />
          <Banner />
        </div>
        <div>
          <About />
          <Skillset />
          <Projects />
          <Work />
          {/* <Test /> */}
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}
