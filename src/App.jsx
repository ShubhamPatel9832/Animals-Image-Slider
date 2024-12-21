import MainCard from "./component/MainCard";

const mainStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
};

function App() {
    return (
        <div style={mainStyle}>
            <MainCard />
        </div>
    );
}

export default App;
