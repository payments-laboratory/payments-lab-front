import { FunctionComponent, lazy } from "react";

const AmountPage = lazy(() => import("@pages/payment/amount"));
const CompletionPage = lazy(() => import("@pages/payment/completion"));
const DetailPage = lazy(() => import("@pages/payment/detail"));
const ProcessingPage = lazy(() => import("@pages/payment/processing"));
const MyPage = lazy(() => import("@pages/user/my"));
const SignInPage = lazy(() => import("@pages/user/signIn"));
const SignUpPage = lazy(() => import("@pages/user/signUp"));

interface RouterProps {
    name: string;
    path: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: FunctionComponent<any>;
}

const PageRoutes: Array<RouterProps> = [
    {
        name: "amount",
        path: "/amount",
        Component: AmountPage,
    },
    {
        name: "completion",
        path: "/completion",
        Component: CompletionPage,
    },
    {
        name: "detail",
        path: "/detail",
        Component: DetailPage,
    },
    {
        name: "processing",
        path: "/processing",
        Component: ProcessingPage,
    },
    {
        name: "my",
        path: "/my",
        Component: MyPage,
    },
    {
        name: "signIn",
        path: "/signIn",
        Component: SignInPage,
    },
    {
        name: "signUp",
        path: "/signUp",
        Component: SignUpPage,
    },
];

export default PageRoutes;
