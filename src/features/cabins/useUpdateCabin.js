import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useUpdatetCabin() {
    const queryClient = useQueryClient();

    const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin succesfully edited");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateCabin };
}
