import {
    createSearchParams,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";

export default function useRoutesHandler() {
    // url queries
    const navigate = useNavigate();
    const route = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    function getUrlQueries(url) {
        const urlData = new URLSearchParams(url);
        const resultData = {};
        for (const [key, value] of urlData.entries()) {
            resultData[key] = value;
        }
        return resultData;
    }

    const urlQueries = getUrlQueries(location.search);
    // FUNCTIONS
    const navigateTo = ({
        url,
        search,
    }) => {
        navigate({
            pathname: url,
            search: createSearchParams({
                ...urlQueries,
                ...search,
            }).toString(),
        });
    };



    // VARIABLES
    const activeRoutes = location.pathname?.split("/");
    const subRoute = activeRoutes[activeRoutes.length - 1];

    return {
        searchParams,
        setSearchParams,
        activeRoutes,
        subRoute,
        route,
        location,
        urlQueries,
        navigate,
        navigateTo,
    };
}
