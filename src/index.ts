import Services from "@core/services/Services";
import { App } from "./view/App/App";

Services.gameService.init()
document.getElementById('root').append(new App().view);