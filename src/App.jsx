import { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import PageWrapper from "./components/Wrapper/PageWrapper"

const Home = lazy(() => import("./pages/Home/Home"))
const Disbursement = lazy(() => import("./pages/Disbursment/Disbursment"))
const SingleDisuburseUser = lazy(() => import("./pages/Disbursment/component/SingleDisuburseUser"))

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />} >
        <Route path="/" element={<Home />} />
        <Route path="/rms/disbursement" element={<Disbursement />} />
        <Route path="/rms/disbursement/:id" element={<SingleDisuburseUser />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>


  )
}

export default App
