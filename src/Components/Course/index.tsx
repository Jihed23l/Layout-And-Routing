import './index.css'
export default function Course({title,price,id}:{title:string,price:number,id:number}){

    return (
        <div className="course" key={id}>
            <h1>{title}</h1>
            <h2>{price}</h2>
        </div>
    )
}