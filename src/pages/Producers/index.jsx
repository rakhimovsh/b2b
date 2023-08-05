import CompanyCard from "@components/CompanyCard"
import CompanyPages from "./components/CompanyPages"
import Filter from "./components/Filter"

const Producers = () => {
    return (
        <div className="container">
            <Filter />
            <CompanyCard />
            <CompanyPages />
        </div>
    )
}

export default Producers