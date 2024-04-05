import { useState } from "react"
import { generateLotteryNum, sum } from "./GenerateRandomNum"
import Ticket from "./Ticket";


export default function Lottery({n, winningSum}){
    let [lottery, setLottery]=useState(generateLotteryNum(n));
    let isWinning = sum(lottery)==winningSum;

    let buyTicket = () =>{
        setLottery(generateLotteryNum(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket nums={lottery}></Ticket>
            <br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <br /><br />
            <h3>{isWinning ? "Congratulation :), You Won Lottery" : ""}</h3>
        </div>
    )
}