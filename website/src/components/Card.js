export default function Card({
    title="untitled",
    content="blah blah blah"
}){
    return (
    <div className="bg-white p-20">
        <h1>{title}</h1>
        <p>{content}</p>
    </div>);
};