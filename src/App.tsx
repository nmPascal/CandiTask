import "./App.css";
import { Layout } from "./components";
import { AuthCard } from "./components/AuthCard";
import { useUserContext } from "./contexts";

function App() {
    const { user } = useUserContext();

    return (
        <Layout>
            {!user ? <AuthCard /> : (
                <>
                    <h1 className="text-center">Welcome {user.name}</h1>
                </>
            )}
        </Layout>
    );
}

export default App;