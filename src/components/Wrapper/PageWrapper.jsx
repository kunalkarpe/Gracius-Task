import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

function PageWrapper() {
    return (
        <div className="flex h-screen overflow-hidden">

            <Sidebar />
            <div className="flex min-w-0 min-h-0 flex-1 flex-col">
                <Navbar />

                <div style={{
                    scrollbarWidth: "none"
                }} className="bg-primary/10 min-h-0 flex-1 w-full overflow-y-auto">
                    <Outlet />
                </div >
            </div>

        </div>
    )
}

export default PageWrapper
