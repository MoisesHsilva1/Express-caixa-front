import { Route, Routes } from "react-router";
import HomePage from "../components/pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
