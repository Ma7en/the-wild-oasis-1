import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <CabinTableOperations />
            </Row>

            <Row>
                <CabinTable />

                <AddCabin />
            </Row>
        </>
    );
}

export default Cabins;

{
    // import { getCabins } from "../services/apiCabins";
    // import { useEffect } from "react";
    // useEffect(function () {
    //     getCabins().then((data) => console.log(data));
    // }, []);
    /* <img
        // src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        src="https://qxnddsjybxitlfnsokfe.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
    /> */
}
