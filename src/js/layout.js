import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetDetails } from './component/planetDetails';
import { PlanetCards } from './component/planets';
import { CharacterCards } from "./component/characters";
import { CharacterDetails } from "./component/characterDetails";
import { VehicleCards } from "./component/vehicles";
import { VehicleDetails } from "./component/vehicleDetails";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/characters" element={<CharacterCards />} />
                        <Route path="/characters/:id" element={<CharacterDetails />} />
                        <Route path="/vehicles" element={<VehicleCards />} />
                        <Route path="/vehicles/:uid" element={<VehicleDetails />} />
                        <Route path="/planets" element={<PlanetCards />} />
                        <Route path="/planets/:uid" element={<PlanetDetails />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
