interface Message {
  msgOne: string;
  msgTwo: string;
}
export default function Hmmm(props: Message) {
  return (
    <div>
      <h2 className="text-2xl font-bold ">{props.msgOne}</h2>

      <p className="text-sm text-gray-800 mt-5">{props.msgTwo}</p>
    </div>
  );
}
