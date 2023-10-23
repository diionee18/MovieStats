import { RecoilRoot } from "recoil";
import Home from "./page/Home";
import TopBar from "./components/top/TopBar";

function App() {
    return (
        <>
            <RecoilRoot>
                <TopBar />
                <Home />
            </RecoilRoot>
        </>
    );
}

export default App;