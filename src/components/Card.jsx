/* eslint-disable react/prop-types */

const Card=({title,value})=>{
    return(
        <div className="bg-blue-600 rounded-lg shadow-md p-6">
            <h2 className="text-black font-extrabold">{title}</h2>
            <p className="text-3xl">{value}</p>
        </div>
    )
}

export default Card;