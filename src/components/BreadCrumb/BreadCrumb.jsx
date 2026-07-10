import { Link } from "react-router-dom";
import useRoutesHandler from "../../utility/urUtility";

const Breadcrumb = () => {
    const { location } = useRoutesHandler()
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <div className="text-sm text-gray-600 flex items-center gap-2">
            {pathnames.map((segment, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isActive = index === pathnames.length - 1;
                const label = segment.charAt(0).toUpperCase() + segment.slice(1);

                return (
                    <span key={routeTo} className="flex items-center font-medium gap-2 text-xs">
                        {index > 0 && <span>{">"}</span>}

                        <Link to={routeTo} className={`hover:underline text-sm ${isActive ? "text-primary" : ""}`}>
                            {label}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumb;