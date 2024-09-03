interface IHeadingCard {
  icon: any;
  name: string;
  des: string;
  editable?: boolean;
  navigation?: () => React.ReactNode;
}

export default function HeadingCard(props: IHeadingCard) {
  return (
    <div className="pb-6 border-l border-b border-r rounded-bl-3xl rounded-br-3xl shadow-md">
      {props.navigation && props.navigation()}

      <div className="mx-auto mb-4 h-20 aspect-square grid place-items-center border rounded-full shadow-md">
        <props.icon className="text-3xl" />
      </div>

      {!props.editable ? (
        <>
          <h3 className="mb-2 mx-auto text-center font-semibold text-2xl cursor-default">{props.name}</h3>
          <p className="mx-auto text-center text-sm text-gray-500 cursor-default">{props.des}</p>
        </>
      ) : (
        <>
          <input
            className="mb-2 w-full text-center font-semibold text-2xl bg-transparent outline-none"
            type="text"
            placeholder={"Site Name"}
            id="field-name"
            defaultValue={props.name}
            name="name"
          />
          <input
            className="w-full text-center text-sm text-gray-500 bg-transparent outline-none"
            type="text"
            placeholder={"Site Link"}
            id="field-href"
            defaultValue={props.des}
            name="href"
          />
        </>
      )}
    </div>
  );
}
