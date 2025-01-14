import FilterBox from "./FilterBox";

export default function Header(props) {
    return (
        <div
            style={{
                textAlign: "center",
                border: "1px solid #ccc",
                padding: "0 1rem",
            }}
        >
            <h2>Header</h2>
            <FilterBox className="header-search-box" />
        </div>
    );
}
