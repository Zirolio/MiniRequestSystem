import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@store/store";
import { BrowserRouter, Route, Routes } from "react-router";
import UserPage from "@pages/UserPage/UserPage";
import ManagerPage from "@pages/ManagerPage/ManagerPage";
import "./globals.scss";
import Header from "@/widgets/Header/Header";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route index element={<UserPage />} />
                        <Route path="manager" element={<ManagerPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);