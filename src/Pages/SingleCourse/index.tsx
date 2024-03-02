import { useParams } from "react-router-dom"
import { courses } from "../../util/constant"

export default function SingleCourse(){

    const {id}=useParams()
    console.log({id})

    const course=courses?.find((el)=>el.id === Number(id))
    console.log('cour',course)

    return (
        <>
        <h1>SINGLE COURSE PAGE</h1>
            <h1>COURSE TITLE : {course?.title}</h1>
            <h1>COURSE PRICE: {course?.price}</h1>
            <h1>COURSE DURATION: {course?.duration}</h1>
            <h1>COURSE DESCRIPTION: {course?.description}</h1>
        </>
    )
}