import "./App.css";

// contexts
import { useUserContext } from "./contexts";

// components
import { Layout } from "./components";
import { AuthForm } from "./components/Auth/Auth";

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