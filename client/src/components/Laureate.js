export default function Laureate(props) {
    return (
        <div>
            <div> AwardWinner: {props.data.knownName === undefined ? props.data.orgName.en : props.data.knownName.en}</div>
            <div > Portion : {props.data.portion}</div>
        </div>)
}