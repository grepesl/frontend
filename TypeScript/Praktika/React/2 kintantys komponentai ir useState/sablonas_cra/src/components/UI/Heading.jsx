// const Heading = (visiProp)
const Heading = ({text, size}) => {
    console.log(text, size);

    const H = `h${size}`;
    return (
        <H>{text}</H>
    )

    // return ( 
    // size === 3 ?
    // <h3>{text}</h3> :
    // size === 2 ?
    // <h2>{text}</h2> :
    // <></>
    // )
}
 
export default Heading;