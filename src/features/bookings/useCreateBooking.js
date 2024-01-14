import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBooking as createBookingApi } from "../../services/apiBookings";

export function useCreateBooking() {
    const queryClient = useQueryClient();

    const { mutate: createBooking, isLoading: isCreating } = useMutation({
        mutationFn: createBookingApi,
        onSuccess: () => {
            toast.success("New Booking Succesfully Created");
            queryClient.invalidateQueries({ queryKey: ["bookings"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createBooking };
}
