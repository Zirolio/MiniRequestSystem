import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@store/store";
import { BrowserRouter, Route, Routes } from "react-router";
import "./globals.scss";
import Header from "@/widgets/Header/Header";
import MainPage from "@pages/MainPage/MainPage";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route index element={<MainPage />} />
                        <Route path="manager" element={<MainPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);