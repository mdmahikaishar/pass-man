interface IAuthSection {
  title: string;
  des: string;
  children: React.ReactNode;
}

export default function AuthSection(props: IAuthSection) {
  return (
    <section className="">
      <div className="holder min-h-screen flex flex-col md:flex-row gap-8">
        {/* Left */}
        <div className="md:w-3/6 py-8 flex flex-col items-center justify-center">
          <h1 className="mb-4 text-3xl text-center">{props.title}</h1>
          <p className="max-w-md text-center">{props.des}</p>
        </div>

        {/* Right */}
        <div className="md:w-3/6 p-4 grid place-items-center">{props.children}</div>
      </div>
    </section>
  );
}
