// providers
import { useUserContext } from "./providers";

// components
import { Layout, AuthForm, Dashboard } from "./components";

// styles
import "./App.css";

function App() {
    const { user } = useUserContext();

    return (
        <Layout>
            {user ? <Dashboard /> : <AuthForm />}
        </Layout>
    );
}

export default App;