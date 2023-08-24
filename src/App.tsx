import "./App.css";

// contexts
import { useUserContext } from "./contexts";

// components
import { Layout, AuthForm, Dashboard } from "./components";

function App() {
    const { user } = useUserContext();

    return (
        <Layout>
            {user ? <Dashboard /> : <AuthForm />}
        </Layout>
    );
}

export default App;