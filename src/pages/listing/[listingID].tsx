import {useRouter} from "next/router"
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export  const getServerSideProps:GetServerSideProps = async(context)=>{

    const listingID  = context.params?.listingID
    if (typeof listingID !== "string") throw new Error("no id");

    return {
        props: {listingID}
    }
}

type ListingInterface = {
    listingID: String;
}

export default function Listing({listingID}:ListingInterface){
    // const router = useRouter()
    // const {listingID} = router.query
    // console.log(router)
    console.log(listingID)

    return(
        <div>
            <h1>Listing</h1>
        </div>
    )
}