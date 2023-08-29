/* eslint-disable react-refresh/only-export-components */
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

// providers
import { useUserContext, useDashboardContext } from "../providers";

// interfaces
import {
    ICandidaciesProviderProps,
    ICandidacy,
    ICompany,
    IEditCandidacy,
    INewCandidacy
} from "../interfaces";

// helpers
import {
    DrawerItemsHelper,
    composeCompanyData,
    transformDocumentsToCandidacies
} from "../helpers";

// utils
import { EDrawerItems, client } from "../utils";

// packages
import { Databases, ID } from "appwrite";

type Props = {
    children: ReactNode;
};

const CandidaciesContext = createContext<ICandidaciesProviderProps>({
    allCandidacies: [],
    chosenCand: null,
    allCompanies: [],
    error: "",
    setChosenCand: () => { },
    createCandidacy: () => { },
    editCandidacy: () => { },
    deleteCandidacy: () => { },
});

export const useCandidaciesContext = () => useContext(CandidaciesContext);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export const CandidaciesProvider = ({ children }: Props) => {
    const { user } = useUserContext();
    const { setCurrentTab } = useDashboardContext();
    const databases = new Databases(client);

    const [allCandidacies, setAllCandidacies] = useState<ICandidacy[]>([]);
    const [chosenCand, setChosenCand] = useState<ICandidacy | null>(null);
    const [allCompanies, setAllCompanies] = useState<ICompany[]>([]);
    const [error, setError] = useState<string>("");

    /**
     * Create candidacy
     * @param INewCandidacy
     * @returns void
     */
    const createCandidacy = (newCandidacy: INewCandidacy) => {
        if (!user) return;

        if (!newCandidacy.company) return setError("Company is required");
        if (!newCandidacy.position) return setError("Position is required");
        if (!newCandidacy.country) return setError("Country is required");
        if (!newCandidacy.location) return setError("Location is required");

        const newObj = { uid: user.userId, ...newCandidacy };
        const promise = databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            newObj,
        );

        promise.then(() => {
            getCandidacies();
            setCurrentTab(DrawerItemsHelper.getItems(EDrawerItems.PRIMARY)[0]);
        }, (err) => setError(err.message));
    };

    /**
     * Get all candidacies
     * @returns void
     */
    const getCandidacies = () => {
        if (!user) return;
        const promise = databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
        );

        promise.then((res) => {
            const { documents } = res;
            setAllCandidacies(transformDocumentsToCandidacies(documents, user.userId));
        }, (err) => console.log("~> err", err));
    };

    /**
     * Update candidacy
     * @param IEditCandidacy
     * @returns void
     */
    const editCandidacy = ({ id, ...rest }: IEditCandidacy) => {
        if (!user) return;
        const promise = databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id,
            rest,
        );

        promise.then((res) => {
            getCandidacies();
            const { documents } = res;
            const transformed = transformDocumentsToCandidacies(documents, user.userId);
            setChosenCand(transformed.find((item) => item.id === id)!);
        }, (err) => {
            console.log("~> err", err);
        });
    };

    /**
     * Delete candidacy
     * @param string
     * @returns void
     */
    const deleteCandidacy = (id: string) => {
        const promise = databases.deleteDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id,
        );

        promise.then(() => {
            setChosenCand(null);
            getCandidacies();
        }, (err) => console.log("~> err", err));
    };

    useEffect(() => {
        if (!user) {
            setAllCandidacies([]);
            return;
        }
        // createCandidacy();
        getCandidacies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        setAllCompanies(composeCompanyData(allCandidacies));
        if (!allCandidacies.length) return;
        setChosenCand(allCandidacies[0]);
    }, [allCandidacies]);

    const propsValues = {
        allCandidacies,
        chosenCand,
        allCompanies,
        error,
        setChosenCand,
        createCandidacy,
        editCandidacy,
        deleteCandidacy,
    };

    return (
        <CandidaciesContext.Provider value={propsValues}>
            {children}
        </CandidaciesContext.Provider>
    );
};