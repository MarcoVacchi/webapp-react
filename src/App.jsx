import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieReviews from "./components/MoviesReviews";
import HomePage from "./pages/Homepage";
import AddMovie from "./components/AddMovie";
import { LoadProvider } from "./contexts/LoadContext";

export default function App() {

  return <div>

    <LoadProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieReviews />} />
            <Route path="movies/new" element={<AddMovie />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </LoadProvider >
  </div >

};
