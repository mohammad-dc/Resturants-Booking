import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Loading from "./pages/Loading";

import { createGlobalStyle } from "styled-components";
import MontserratRegularTTf from "./assets/fonts/Montserrat-Regular.ttf";
import MontserratSemiBoldTTf from "./assets/fonts/Montserrat-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat-Regular';
  src: url(${MontserratRegularTTf}) format('truetype');
}
@font-face {
  font-family: 'Montserrat-SemiBold';
  src: url(${MontserratSemiBoldTTf}) format('truetype');
}
`;
const App: React.FC = () => (
  <IonApp>
    <GlobalStyle />
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/loading">
          <Loading />
        </Route>
        <Route exact path="/home">
          <Loading />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
