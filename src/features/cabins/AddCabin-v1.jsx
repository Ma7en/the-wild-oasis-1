import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
    return (
        <>
            <div>
                <Modal>
                    <Modal.Open opens="cabin-form">
                        <Button>Add new cabin</Button>
                    </Modal.Open>
                    <Modal.Window name="cabin-form">
                        <CreateCabinForm />
                    </Modal.Window>

                    {/* <Modal.Open opens="table">
                        <Button>Show table</Button>
                    </Modal.Open>
                    <Modal.Window name="table">
                        <CabinTable />
                    </Modal.Window> */}
                </Modal>
            </div>
        </>
    );
}

// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);

//     return (
//         <>
//             <div>
//                 <Button onClick={() => setIsOpenModal((show) => !show)}>
//                     {!isOpenModal ? "Add New Cabin" : "Hidden Form Cabin"}
//                 </Button>

//                 {isOpenModal && (
//                     <Modal onClose={() => setIsOpenModal(false)}>
//                         <CreateCabinForm
//                             onCloseModal={() => setIsOpenModal(false)}
//                         />
//                     </Modal>
//                 )}
//                 {/* {isOpenModal && <CreateCabinForm />} */}
//             </div>
//         </>
//     );
// }

export default AddCabin;
