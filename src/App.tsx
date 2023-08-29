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
            {isLoading ? (
                <Loader />
            ) : user ? (
                <Dashboard />
            ) : (
                <AuthForm />
            )}
        </Layout>
    );
}

export default App;