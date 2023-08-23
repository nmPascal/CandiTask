import "./App.css";
import { Layout } from "./components";
import { AuthForm } from "./components/Auth/Auth";
import { useUserContext } from "./contexts";

function App() {
    const { user } = useUserContext();

    return (
        <Layout>
            {!user ? <AuthForm /> : (
                <>
                    <h1 className="text-center">Welcome {user.name}</h1>
                </>
            )}
        </Layout>
    );
}

export default App;