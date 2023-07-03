import AmountBox from "./AmountBox";
import Button from "./Button";
import ContentTitle from "./ContentTitle";
import CountButton from "./CountButton";

import Layout from "@components/global/Layout";

const PaymentAmountPage = () => {
    return (
        <Layout>
            <CountButton />
            <ContentTitle title="결제 금액을 선택해주세요." />
            <AmountBox />
            <Button />
        </Layout>
    );
};

export default PaymentAmountPage;
