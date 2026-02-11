export const Infoblock = ({title, details, link}: {title: string, details: string[], link: string}) => {
  return (
    <section className="flex-1 py-10">
        <h2 className="text-2xl font-semibold mb-4">
        {title}
        </h2>
        <ul>
        {details?.length ? details.map((detail, index) => (
            <li key={index}>{detail}</li>
        )): <li>No details available.</li>}
        </ul>
    </section>
  );
}
