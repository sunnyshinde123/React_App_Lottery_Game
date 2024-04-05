import TicketNum  from "./TicketNum"

export default function Ticket({nums}){
    return (
        <div>
            {nums.map((ticket, idx)=>{
                <TicketNum num={ticket} key={idx}/>
            })}
        </div>
    )
}