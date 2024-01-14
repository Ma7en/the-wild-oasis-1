/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function uesCabins() {
    const {
        isLoading,
        data: cabins,
        error,
    } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
    });

    return { isLoading, error, cabins };
}
