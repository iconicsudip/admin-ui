import { useQuery } from "@tanstack/react-query"
import { api } from "."

export const useGetMembers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await api.get('/members.json')
            return res.data
        }
    })
}