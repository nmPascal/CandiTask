// providers
import { useUserContext } from "./providers";

// components
import { Layout, AuthForm, Dashboard, Loader } from "./components";

// styles
import "./App.css";

function App() {
    const { user, isLoading } = useUserContext();

    return (
        <Layout>
            {user ? (
                <Dashboard />
            ) : user && isLoading ? (
                <Loader />
            ) : (
                <AuthForm />
            )}
        </Layout>
    );
}

export default App;