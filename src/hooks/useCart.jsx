import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()
    //  -----------------
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['Carts' , user?.email],
        enabled: !loading,
        //    -----------------
    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['Carts' , user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure(`/Carts?email=${user.email}`)
    //         console.log('res from axios', res)
    //         return res.data;
    //     },
    // })
   
        queryFn: async () => {
            const res = await axiosSecure(`/Carts?email=${user.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}

export default useCart;