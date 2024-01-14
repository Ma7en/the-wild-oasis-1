/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
    HiArrowDownOnSquare,
    HiArrowUpOnSquare,
    HiEye,
    HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & span:first-child {
        font-weight: 500;
    }

    & span:last-child {
        color: var(--color-grey-500);
        font-size: 1.2rem;
    }
`;

const Amount = styled.div`
    font-family: "Sono";
    font-weight: 500;
`;

// function BookingRow({
//     booking: {
//         id: bookingId,
//         created_at,
//         startDate,
//         endDate,
//         numNights,
//         numGuests,
//         totalPrice,
//         status,
//         guests: { fullName: guestName, email } = {},
//         cabins: { name: cabinName } = {},
//     } = {},
// }) {
function BookingRow({ booking }) {
    const {
        id: bookingId,
        created_at,
        startDate,
        endDate,
        numNights,
        numGuests,
        totalPrice,
        cabinPrice,
        extrasPrice,
        status,
        guests: { fullName: guestName, email } = {},
        cabins: { name: cabinName } = {},
    } = booking;
    const navigate = useNavigate();
    const { checkout, isCheckingOut } = useCheckout();
    const { isDeleting, deleteBooking } = useDeleteBooking();

    // const { cabinPrice, extrasPrice } = booking;
    // console.log(endDate - startDate);
    // console.log(new Date(startDate));
    // console.log(
    //     `getDate:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDate(),
    //     `getDay:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    //     `getFullYear:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getFullYear(),
    //     `e:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    //     `e:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    //     `e:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    //     `e:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    //     `e:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    //     `e:- `,
    //     new Date(new Date(endDate) - new Date(startDate)).getDay(),
    // );

    // console.log(`extrasPrice:- `, extrasPrice);

    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };

    return (
        <>
            <Table.Row>
                <Cabin>{cabinName}</Cabin>
                {/* <Cabin>d</Cabin> */}

                <Stacked>
                    <span>{guestName}</span>
                    <span>{email}</span>
                </Stacked>

                <Stacked>
                    <span>
                        {isToday(new Date(startDate))
                            ? "Today"
                            : formatDistanceFromNow(startDate)}{" "}
                        {/* &rarr; {numNights} night stay */}
                        &rarr;{" "}
                        {new Date(
                            new Date(endDate) - new Date(startDate),
                        ).getDate()}{" "}
                        night stay
                    </span>
                    <span>
                        {format(new Date(startDate), "yyyy MMM dd ")} &mdash;{" "}
                        {format(new Date(endDate), "yyyy MMM dd ")}
                    </span>
                </Stacked>

                <Tag type={statusToTagName[status]}>
                    {status.replace("-", " ")}
                </Tag>

                {/* <Amount>{formatCurrency(totalPrice)}</Amount> */}
                <Amount>{formatCurrency(cabinPrice + extrasPrice)}</Amount>

                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={bookingId} />

                        <Menus.List id={bookingId}>
                            <Menus.Button
                                icon={<HiEye />}
                                onClick={() =>
                                    navigate(`/bookings/${bookingId}`)
                                }
                            >
                                See details
                            </Menus.Button>

                            {status === "unconfirmed" && (
                                <Menus.Button
                                    icon={<HiArrowDownOnSquare />}
                                    onClick={() =>
                                        navigate(`/checkin/${bookingId}`)
                                    }
                                >
                                    Check in
                                </Menus.Button>
                            )}

                            {status === "checked-in" && (
                                <Menus.Button
                                    icon={<HiArrowUpOnSquare />}
                                    onClick={() => checkout(bookingId)}
                                    disabled={isCheckingOut}
                                >
                                    Check out
                                </Menus.Button>
                            )}

                            <Modal.Open opens="delete">
                                <Menus.Button icon={<HiTrash />}>
                                    Delete Booking
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                    </Menus.Menu>

                    <Modal.Window name="delete">
                        <ConfirmDelete
                            resourceName="booking"
                            disabled={isDeleting}
                            onConfirm={() => deleteBooking(bookingId)}
                        />
                    </Modal.Window>
                </Modal>
            </Table.Row>
        </>
    );
}

export default BookingRow;
